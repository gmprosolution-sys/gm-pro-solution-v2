import CONFIG, { isGetformConfigured } from "../config";

/**
 * Sends form data to Zapier, and additionally to Forminit (legacy raw POST
 * endpoint, same shape as the old getform.io API) once a real GETFORM_URL is
 * set in src/config.js. Accepts a plain object; values can be strings, a
 * single File, or an array of Files.
 */
export async function submitLead(data) {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item));
    } else {
      formData.append(key, value);
    }
  });

  const requests = [fetch(CONFIG.ZAPIER_URL, { method: "POST", body: formData })];

  if (isGetformConfigured()) {
    requests.push(fetch(CONFIG.GETFORM_URL, { method: "POST", body: formData }));
  }

  const results = await Promise.allSettled(requests);
  const succeeded = results.some((r) => r.status === "fulfilled" && r.value.ok);

  if (!succeeded) {
    throw new Error("Lead submission failed");
  }

  return results;
}

export default submitLead;
