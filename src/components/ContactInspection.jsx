import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import submitLead from "../lib/submitLead";

function ContactInspection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    files: [],
  });
  const [success, setSuccess] = useState(false);

  const t = {
    en: {
      title: "Auto Damage Appraisal Request",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      details: "Vehicle Details / Description of Damage",
      upload: "Attach Photos (optional)",
      send: "Send Request",
      success: "✅ Request sent successfully!",
    },
    es: {
      title: "Solicitud de Avalúo de Daños de Auto",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      details: "Detalles del Vehículo / Descripción del Daño",
      upload: "Adjuntar Fotos (opcional)",
      send: "Enviar Solicitud",
      success: "✅ Solicitud enviada correctamente!",
    },
  }[language];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitLead({ formType: "Auto Damage Appraisal", ...formData });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", details: "", files: [] });
    } catch (error) {
      // submission failed silently for now; success banner simply won't show
    }

    setTimeout(() => setSuccess(false), 3000); // hide after 3 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#001F3F] text-white px-6 relative">
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-10 bg-green-500/90 text-white px-6 py-3 rounded-xl shadow-lg"
          >
            {t.success}
          </motion.div>
        )}
      </AnimatePresence>

      <form
        onSubmit={handleSubmit}
        className="bg-white/10 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">{t.title}</h2>

        <input
          type="text"
          placeholder={t.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
          required
        />

        <input
          type="email"
          placeholder={t.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
          required
        />

        <input
          type="tel"
          placeholder={t.phone}
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
          required
        />

        <textarea
          placeholder={t.details}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300"
          rows="4"
        />

        <input
          type="file"
          multiple
          onChange={(e) =>
            setFormData({ ...formData, files: Array.from(e.target.files) })
          }
          className="w-full text-sm"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold transition-all"
        >
          {t.send}
        </button>
      </form>
    </div>
  );
}

export default ContactInspection;
