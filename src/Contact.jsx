import React, { useState } from "react";
import { useLanguage } from "./context/LanguageContext";
import submitLead from "./lib/submitLead";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("...");

    try {
      await submitLead({ formType: "General Contact", ...formData });
      setStatus(t.send + " ✅");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("⚠️");
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0b264b] text-white text-center">
      <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
      <p className="text-gray-300 mb-8">{t.contactSubtitle}</p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder={t.name}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder={t.email}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-3 rounded text-black"
        />
        <textarea
          name="message"
          placeholder={t.message}
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded text-black"
        ></textarea>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
          {t.send}
        </button>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
