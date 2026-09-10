import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import submitLead from "../lib/submitLead";

function ContactSimple() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    files: [],
  });
  const [success, setSuccess] = useState(false);

  const t = {
    en: {
      title: "Taxes & Notary Contact Form",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Message or Service Request",
      upload: "Attach Documents (optional)",
      send: "Send Message",
      success: "✅ Message sent successfully!",
    },
    es: {
      title: "Formulario de Contacto para Impuestos y Notaría",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      message: "Mensaje o Solicitud de Servicio",
      upload: "Adjuntar Documentos (opcional)",
      send: "Enviar Mensaje",
      success: "✅ Mensaje enviado correctamente!",
    },
  }[language];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitLead({ formType: "Taxes & Notary", ...formData });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "", files: [] });
    } catch (error) {
      // submission failed silently for now; success banner simply won't show
    }

    setTimeout(() => setSuccess(false), 3000);
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
          placeholder={t.message}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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

export default ContactSimple;
