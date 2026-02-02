import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* 1️⃣ HERO SECTION */}
      <section className="min-h-screen bg-black text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              We Build <span className="text-blue-500">Digital Solutions</span>  
              <br /> That Grow Your Business
            </h1>

            <p className="text-gray-300 mt-6">
              Professional web, mobile & digital services to turn your ideas
              into powerful products.
            </p>

            <div className="mt-8 flex gap-4">
              <NavLink
                to="/service"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition"
              >
                Explore Services
              </NavLink>

              <NavLink
                to="/contact"
                className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team Work"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* 2️⃣ ABOUT / WHY US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="Why Choose Us"
            className="rounded-lg shadow-md animate-slide-in-left"
          />

          <div>
            <h2 className="text-3xl font-bold">
              Why Choose Us?
            </h2>

            <p className="mt-4 text-gray-600">
              We focus on quality, performance, and long-term success.
              Our solutions are crafted with modern technologies and best practices.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>✔ Experienced Professional Team</li>
              <li>✔ Scalable & Secure Solutions</li>
              <li>✔ Client-First Approach</li>
              <li>✔ On-Time Delivery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3️⃣ HIGHLIGHTS SECTION (NOT SERVICES LIST) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            What Makes Us Different
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We don’t just build projects, we build long-term partnerships.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Modern Tech</h3>
              <p className="text-gray-600 mt-2">
                Latest tools & frameworks for future-ready products.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Clean UI/UX</h3>
              <p className="text-gray-600 mt-2">
                Simple, intuitive & user-friendly designs.
              </p>
            </div>

            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-semibold">Trusted Support</h3>
              <p className="text-gray-600 mt-2">
                Long-term support & maintenance after delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ CTA SECTION */}
      <section className="bg-blue-600 py-20 text-white text-center">
        <h2 className="text-3xl font-bold">
          Ready to Start Your Project?
        </h2>

        <p className="mt-4 text-blue-100">
          Let’s discuss your idea and make it a reality.
        </p>

        <NavLink
          to="/contact"
          className="inline-block mt-8 bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Get In Touch
        </NavLink>
      </section>

    </div>
  );
};

export default Home;
