import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= 1️⃣ HERO SECTION ================= */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Let’s talk about your project, ideas, or questions.
          Our team is always ready to help you grow.
        </p>
      </section>

      {/* ================= 2️⃣ CONTACT INFO + FORM ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

        {/* LEFT: CONTACT DETAILS */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Fill out the form or contact us directly. We usually respond
            within 24 hours.
          </p>

          <div className="space-y-5 text-gray-700">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-600" />
              <span>+91 98765 43210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600" />
              <span>contact@yourcompany.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT: CONTACT FORM */}
        <div className="bg-white p-8 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= 3️⃣ CTA / TRUST SECTION ================= */}
      <section className="bg-blue-600 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-bold">
          Why Contact Us?
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          We believe in transparency, quality delivery, and long-term partnerships.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-white mt-1" />
            <span>Quick response within 24 hours</span>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-white mt-1" />
            <span>Free initial consultation</span>
          </div>

          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-white mt-1" />
            <span>Experienced professional team</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
