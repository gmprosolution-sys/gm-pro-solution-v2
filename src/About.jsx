import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#071827] text-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-6"
      >
        About Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-lg text-slate-300 leading-relaxed mb-10"
      >
        GM Pro Solution is a dedicated company offering professional services in 
        <span className="text-white font-semibold"> Auto Appraisal</span>, 
        <span className="text-white font-semibold"> Tax Preparation</span>, and 
        <span className="text-white font-semibold"> Notary Assistance</span>.  
        We focus on providing reliable, efficient, and personalized support for individuals and businesses alike.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
        <p className="text-slate-300 leading-relaxed">
          Our team consists of experienced professionals committed to excellence and customer satisfaction.  
          We believe in integrity, attention to detail, and building long-term relationships with our clients.  
          Every service is delivered with care, precision, and a personal touch.
        </p>
      </motion.div>
    </section>
  );
}
