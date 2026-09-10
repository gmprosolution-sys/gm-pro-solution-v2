const CONFIG = {
  ZAPIER_URL: "https://hooks.zapier.com/hooks/catch/25300476/usph5ce/",
  // Replace with your real Getform endpoint (e.g. "https://getform.io/f/abcd1234").
  // While this is left as "YOUR_KEY", forms will only submit to Zapier.
  GETFORM_URL: "https://getform.io/f/YOUR_KEY",
};

export const isGetformConfigured = () =>
  Boolean(CONFIG.GETFORM_URL) && !CONFIG.GETFORM_URL.includes("YOUR_KEY");

export default CONFIG;
