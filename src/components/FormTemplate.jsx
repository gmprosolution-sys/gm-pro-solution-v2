import React, { useState } from "react";
import submitLead from "../lib/submitLead";

export default function FormTemplate({ title, formType, fields }) {
  const formFields =
    fields && fields.length > 0
      ? fields
      : [
          { name: "name", label: "Name", type: "text", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "phone", label: "Phone", type: "text", required: false },
          { name: "message", label: "Message", type: "textarea", required: false },
        ];

  const emptyState = Object.fromEntries(formFields.map((f) => [f.name, ""]));
  const [formData, setFormData] = useState(emptyState);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await submitLead({
        formType: formType || title || "Contact Form",
        ...formData,
      });
      setStatus("✅ Message sent successfully!");
      setFormData(emptyState);
    } catch (error) {
      setStatus("⚠️ Error sending message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b1c3a] text-white p-6">
      <h2 className="text-3xl font-bold mb-6">{title || formType || "Contact Form"}</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white text-[#0b1c3a] rounded-2xl shadow-lg p-6 w-full max-w-md"
      >
        {formFields.map((field) => (
          <div key={field.name}>
            <label className="block mb-2 font-semibold">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                onChange={handleChange}
                value={formData[field.name]}
                required={field.required}
                className="w-full mb-4 p-2 border rounded h-24"
              />
            ) : (
              <input
                type={field.type || "text"}
                name={field.name}
                onChange={handleChange}
                value={formData[field.name]}
                required={field.required}
                className="w-full mb-4 p-2 border rounded"
              />
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#0b1c3a] text-white font-bold py-2 rounded hover:scale-105 transition-transform"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
}
