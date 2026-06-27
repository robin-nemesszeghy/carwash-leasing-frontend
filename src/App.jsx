import React, { useState } from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen flex flex-col justify-center items-center py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
          Your Car Wash Should Drive Your Store’s Growth—
          <br />
          <span className="text-blue-600">Not Your Stress Levels.</span>
        </h1>
        <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Most C-store car washes are underperforming because they require too
          much time and too much capital. We’re here to change that.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
        >
          Lease Your Wash Bay
        </a>
      </div>
    </section>
  );
};

const WhatWeDo = () => {
  return (
    <section className="py-20 pb-44 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">
          What We Do
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
          We Lease, Buy, and Modernize Old Car Washes.
        </p>
        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Our niche is partnering with C-store and gas station owners to breathe
          new life into existing wash bays.
        </p>
      </div>
    </section>
  );
};

const Features = () => {
  const benefits = [
    {
      title: "Passive Income",
      description:
        "We lease the space directly from you, turning an operational headache into guaranteed revenue.",
    },
    {
      title: "No Capital Outlay",
      description:
        "We handle 100% of the rehab, hardware upgrades, and modernization costs from day one.",
    },
    {
      title: "Dedicated Traffic",
      description:
        "Our membership-based model brings loyal customers to your pumps and aisles weekly, not monthly.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            The Benefits for You
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            We don't just fix the equipment; we transform the business model.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-6 shadow-sm">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeIndex, setActiveIndex] = useState(0);

  const washBays = [
    {
      id: 1,
      title: "Tunnel / Bay",
      before: "/site1-before.png",
      after: "/site1-after.jpg",
    },
    {
      id: 2,
      title: "Tunnel / Bay",
      before: "/site2-before.png",
      after: "/site2-after.jpg",
    },
    {
      id: 3,
      title: "Tunnel / Bay",
      before: "/site3-before.png",
      after: "/site3-after.jpg",
    },
  ];

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    setSliderPosition(50);
  };

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">The Transformation</h2>
          <p className="mt-4 text-slate-400">
            Drag the slider to see the difference, and click below to view more
            locations.
          </p>
        </div>

        {/* Main Interactive Slider Container */}
        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden bg-slate-800 border-4 border-slate-700 shadow-2xl">
          {/* Title Badge */}
          <div className="absolute top-4 left-4 z-30 bg-slate-900/80 backdrop-blur text-white px-3 py-1.5 rounded-lg text-sm font-semibold border border-slate-700 shadow-lg">
            {washBays[activeIndex].title}
          </div>

          {/* BASE LAYER (AFTER) */}
          <div className="absolute inset-0 z-0">
            <img
              src={washBays[activeIndex].after}
              alt="Modernized Car Wash"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Added transition-opacity and a dynamic check to fade out when slider is > 75% */}
            <div
              className={`absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm shadow-lg border border-blue-500 drop-shadow-md transition-opacity duration-300 ${sliderPosition > 75 ? "opacity-0" : "opacity-100"}`}
            >
              <span className="font-bold tracking-widest uppercase">
                After:
              </span>{" "}
              <span className="hidden sm:inline font-medium"> Modernized</span>
            </div>
          </div>

          {/* CLIPPED LAYER (BEFORE) */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={washBays[activeIndex].before}
              alt="Old Car Wash"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Added transition-opacity and a dynamic check to fade out when slider is < 25% */}
            <div
              className={`absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm shadow-lg border border-slate-700 drop-shadow-md transition-opacity duration-300 ${sliderPosition < 25 ? "opacity-0" : "opacity-100"}`}
            >
              <span className="font-bold tracking-widest uppercase">
                Before:
              </span>{" "}
              <span className="hidden sm:inline font-medium text-slate-300">
                {" "}
                Outdated
              </span>
            </div>
          </div>

          {/* SLIDER HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
            style={{ left: `calc(${sliderPosition}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-600 transform rotate-180"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </div>
          </div>

          {/* Invisible Range Input for sliding logic */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(e.target.value)}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>

        {/* Thumbnail Navigation Row */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="flex justify-center gap-4 overflow-x-auto py-4 snap-x scroll-smooth">
            {washBays.map((bay, index) => (
              <button
                key={bay.id}
                onClick={() => handleThumbnailClick(index)}
                className={`shrink-0 snap-start relative w-32 md:w-40 aspect-video rounded-xl overflow-hidden transition-all duration-300 focus:outline-none ${
                  activeIndex === index
                    ? "ring-4 ring-blue-500 scale-105 shadow-xl shadow-blue-900/30"
                    : "opacity-50 hover:opacity-100 hover:scale-105 border-2 border-slate-700"
                }`}
              >
                <img
                  src={bay.after}
                  alt={bay.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Criteria = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">What We’re Looking For</h2>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          We are currently seeking In-Bay Automatics, Tunnels, and Self-Serve
          locations that are ready for a professional upgrade.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
          <span className="bg-blue-700/50 px-6 py-3 rounded-full border border-blue-400 backdrop-blur-sm shadow-sm">
            In-Bay Automatics
          </span>
          <span className="bg-blue-700/50 px-6 py-3 rounded-full border border-blue-400 backdrop-blur-sm shadow-sm">
            Express Tunnels
          </span>
          <span className="bg-blue-700/50 px-6 py-3 rounded-full border border-blue-400 backdrop-blur-sm shadow-sm">
            Self-Serve Bays
          </span>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            Get a Free Site Evaluation
          </h2>
          <p className="text-slate-600 mt-3">
            Find out if your location qualifies for a modernization lease.
          </p>
        </div>

        <form
          action="https://formspree.io/f/mqevqbzd"
          method="POST"
          className="space-y-6 bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all bg-white"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all bg-white"
                placeholder="Smith"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all bg-white"
              placeholder="john@cstore.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Store / Location Address
            </label>
            <input
              type="text"
              name="address"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all bg-white"
              placeholder="123 Main St, City, State"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Message / Current Setup Details
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-600 outline-none transition-all resize-none bg-white"
              placeholder="Tell us about your existing wash bay hardware..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
          >
            Submit Site Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-blue-200 selection:text-blue-900">
      {/* Navigation Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm0 17.5c-4.274 0-7.75-3.476-7.75-7.75S7.726 4.25 12 4.25 19.75 7.726 19.75 12s-3.476 7.75-7.75 7.75zM12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Lease Your Carwash
            </span>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-block bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Get an Evaluation
          </a>
        </div>
      </header>

      {/* Main Content Areas */}
      <main>
        <Hero />
        <WhatWeDo />
        <Features />
        <Comparison />
        <Criteria />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2 font-semibold text-slate-300">
            Lease Your Carwash
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All rights reserved. Modernizing
            C-Store Wash Bays.
          </p>
        </div>
      </footer>
    </div>
  );
}
