"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

const faqData = [
  {
    question: "What is KPICC?",
    answer:
      "Kingdom Prevailers International Christian Centre (KPICC) is a vibrant church committed to spreading the love of God, nurturing faith, and fostering community fellowship.",
  },
  {
    question: "Where is KPICC located?",
    answer:
      "KPICC is located at 39 Road, 3rd Avenue Gwarimpa, Abuja, Nigeria. We welcome visitors from all walks of life.",
  },
  {
    question: "What are your service times?",
    answer:
      "We hold Sunday services at 9:00 AM and 11:30 AM. Midweek prayer and fellowship services are held on Wednesdays at 6:30 PM.",
  },
  {
    question: "Does KPICC have ministries for different groups?",
    answer:
      "Yes! KPICC has youth, women’s, men’s, and children’s ministries to cater to the spiritual growth of every group.",
  },
  {
    question: "Can I join KPICC even if I’m from a different ethnic background?",
    answer:
      "Absolutely! KPICC welcomes individuals from all ethnicities, cultures, and backgrounds. We believe God’s love is for everyone.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can participate in our ministries, volunteer for community programs, attend fellowship events, or reach out through our contact page.",
  },
  {
    question: "Does KPICC offer online streaming?",
    answer:
      "Yes! If you cannot make it physically, you can stream our services live online via our Join Us Online page.",
  },
  {
    question: "Are there programs for first-time visitors?",
    answer:
      "Yes. KPICC organizes welcome programs to help first-time visitors understand our church culture, values, and community activities.",
  },
];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-32 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-purple-600 text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              {/* Question */}
              <div
                onClick={() => toggleQuestion(index)}
                className={`flex items-center justify-between px-6 py-4 text-lg font-semibold transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-800 hover:bg-purple-100"
                }`}
              >
                <span>{faq.question}</span>
                <HiChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-white" : "text-gray-800"
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
