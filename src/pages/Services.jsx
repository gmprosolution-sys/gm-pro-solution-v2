import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: "🚗", title: t.contactAppraisal, desc: t.serviceAppraisalDesc },
    { icon: "🧾", title: t.contactTaxNotary, desc: t.serviceTaxDesc },
    { icon: "📝", title: t.contactTaxNotary, desc: t.serviceNotaryDesc },
  ];

  return (
    <section id="services" className="py-20 bg-[#04142c] text-white text-center">
      <h2 className="text-3xl font-bold mb-10">{t.servicesTitle}</h2>
      <div className="grid md:grid-cols-3 gap-8 px-10">
        {services.map((service, index) => (
          <div key={index} className="bg-[#0b264b] p-6 rounded-2xl shadow-lg">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
