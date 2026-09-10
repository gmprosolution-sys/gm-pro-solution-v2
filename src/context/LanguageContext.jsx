import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    title: "Bienvenido a GM Pro Solution",
    subtitle: "Servicios profesionales de tasación e inspección",
    phone: "📞 Llámanos al 407-509-9595",
    contactAppraisal: "Valoración e Inspección",
    contactTaxNotary: "Servicios de Notaría y Taxes",
    contactUs: "Contáctanos",
    home: "Inicio",
    services: "Servicios",
    values: "Valores",
    formTitle: "Formulario de contacto",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Mensaje",
    send: "Enviar",

    // Contact section
    contactTitle: "Contáctanos",
    contactSubtitle: "Escríbenos y te responderemos lo antes posible.",

    // Services section
    servicesTitle: "Nuestros Servicios",
    serviceAppraisalDesc: "Inspecciones y valoraciones profesionales de vehículos.",
    serviceTaxDesc: "Preparación de impuestos eficiente y confiable.",
    serviceNotaryDesc: "Servicios de notaría certificados.",

    // Values section
    ourValues: "Nuestros Valores",
    trust: "Confianza",
    trustDesc: "Construimos relaciones basadas en honestidad y transparencia.",
    efficiency: "Eficiencia",
    efficiencyDesc: "Resultados rápidos y precisos en cada servicio.",
    professionalism: "Profesionalismo",
    professionalismDesc: "Atención experta y dedicada en cada proyecto.",
  },
  en: {
    title: "Welcome to GM Pro Solution",
    subtitle: "Professional appraisal and inspection services",
    phone: "📞 Call us at 407-509-9595",
    contactAppraisal: "Appraisal & Inspection",
    contactTaxNotary: "Notary & Tax Services",
    contactUs: "Contact Us",
    home: "Home",
    services: "Services",
    values: "Values",
    formTitle: "Contact Form",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",

    // Contact section
    contactTitle: "Contact Us",
    contactSubtitle: "Send us a message and we'll get back to you as soon as possible.",

    // Services section
    servicesTitle: "Our Services",
    serviceAppraisalDesc: "Professional vehicle inspections and appraisals.",
    serviceTaxDesc: "Efficient and reliable tax preparation.",
    serviceNotaryDesc: "Certified notary services.",

    // Values section
    ourValues: "Our Values",
    trust: "Trust",
    trustDesc: "We build relationships based on honesty and transparency.",
    efficiency: "Efficiency",
    efficiencyDesc: "Fast, accurate results in every service.",
    professionalism: "Professionalism",
    professionalismDesc: "Expert, dedicated attention on every project.",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
