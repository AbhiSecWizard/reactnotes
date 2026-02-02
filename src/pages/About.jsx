import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Us" },
    { id: "mission", label: "Mission" },
    { id: "team", label: "Team" },
    { id: "journey", label: "Journey" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* ====== HEADER ====== */}
      <section className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-3 text-gray-300">
          Learn more about our company, team, and journey.
        </p>
      </section>

      {/* ====== TABS ====== */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ====== CONTENT ====== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        {/* ====== ABOUT US ====== */}
        {activeTab === "about" && (
          <section className="bg-white p-10 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700">
              We are a team of passionate developers and designers creating modern
              digital products for businesses.
            </p>
          </section>
        )}

        {/* ====== MISSION ====== */}
        {activeTab === "mission" && (
          <section className="bg-white p-10 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Mission & Vision</h2>
            <p className="text-gray-700">
              <strong>Mission:</strong> Deliver high-quality digital solutions.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Vision:</strong> Become the leading tech company by building
              reliable products.
            </p>
          </section>
        )}

        {/* ====== TEAM ====== */}
        {activeTab === "team" && (
          <section className="bg-white p-10 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Our Team</h2>

            <div className="grid md:grid-cols-3 gap-6">
              {["John", "Sara", "Mike"].map((name, idx) => (
                <div key={idx} className="border p-6 rounded-lg">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p className="text-gray-600 mt-2">Expert Developer</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ====== JOURNEY ====== */}
        {activeTab === "journey" && (
          <section className="bg-white p-10 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Our Journey</h2>

            <div className="space-y-5">
              {[
                { year: "2021", text: "Company founded" },
                { year: "2022", text: "First big project" },
                { year: "2023", text: "Team expanded" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {item.year}
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};

export default About;
