// src/pages/Home.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroImage from "/images/business-man-watch.jpg";
import inspectionImage from "/images/inspection.jpg";
import taxImage from "/images/tax.jpg";
import notaryImage from "/images/notary.jpg";
import submitLead from "../lib/submitLead";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vin: "",
    year: "",
    make: "",
    model: "",
    color: "",
    damage: "",
    loss: "",
    message: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitLead({ formType: selectedService, ...formData });
      alert("✅ Thank you! Your information has been submitted successfully.");
    } catch (error) {
      alert("⚠️ Something went wrong sending your request. Please try again or call us.");
    }
    setSelectedService(null);
  };

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center p-6"
    >
      {/* Header */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold">GM Pro Solution</h1>
        <p className="mt-2 text-gray-300">
          Our values — professionalism, integrity, and precision.
        </p>
        <p className="mt-2 text-lg font-semibold text-blue-300">
          Call us today: (407) 509-9595
        </p>
      </div>

      {/* Hero image */}
      <img
        src={heroImage}
        alt="Professional"
        className="mx-auto mt-8 rounded-xl shadow-lg w-80 md:w-96"
      />

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {[
          {
            name: "Auto Damage Appraisal",
            img: inspectionImage,
            desc: "Professional vehicle inspections and appraisals.",
          },
          {
            name: "Tax Services",
            img: taxImage,
            desc: "Efficient and reliable tax filing and advisory.",
          },
          {
            name: "Notary Services",
            img: notaryImage,
            desc: "Certified notary and document authentication.",
          },
        ].map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 p-6 rounded-2xl shadow-lg cursor-pointer"
            onClick={() => setSelectedService(service.name)}
          >
            <img
              src={service.img}
              alt={service.name}
              className="rounded-lg mb-4 h-40 w-full object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{service.name}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Form */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          >
            <motion.div className="bg-white text-gray-800 p-8 rounded-2xl w-11/12 max-w-lg shadow-xl overflow-y-auto max-h-[90vh]">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedService} Request Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">📋 Client Information</h3>
                  <input
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border p-2 rounded mb-2"
                    required
                  />
                  <input
                    name="email"
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full border p-2 rounded mb-2"
                    required
                  />
                  <input
                    name="phone"
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full border p-2 rounded"
                  />
                </div>

                {selectedService === "Auto Damage Appraisal" && (
                  <>
                    <h3 className="font-semibold mb-1">🚗 Vehicle Information</h3>
                    <input
                      name="vin"
                      onChange={handleChange}
                      placeholder="VIN"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <input
                      name="year"
                      onChange={handleChange}
                      placeholder="Year"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <input
                      name="make"
                      onChange={handleChange}
                      placeholder="Make"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <input
                      name="model"
                      onChange={handleChange}
                      placeholder="Model"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <input
                      name="color"
                      onChange={handleChange}
                      placeholder="Color"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <textarea
                      name="damage"
                      onChange={handleChange}
                      placeholder="Damage Description"
                      className="w-full border p-2 rounded mb-2"
                    />
                    <textarea
                      name="loss"
                      onChange={handleChange}
                      placeholder="Fact of Loss"
                      className="w-full border p-2 rounded mb-2"
                    />
                  </>
                )}

                <textarea
                  name="message"
                  onChange={handleChange}
                  placeholder="Additional Message"
                  className="w-full border p-2 rounded mb-2"
                />
                <div>
                  <label className="block font-semibold mb-1">
                    Upload documents or photos:
                  </label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
                  >
                    Exit
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spanish notice */}
      <p className="mt-8 text-blue-200 italic">Hablamos Español — Contáctenos hoy.</p>

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-6 mt-12">
        <p className="text-sm">
          © {new Date().getFullYear()} GM Pro Solution. All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
}
