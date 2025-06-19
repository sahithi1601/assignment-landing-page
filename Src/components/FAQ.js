import React, { useState } from "react";

const faqs = [
  { q: "What is your return policy?", a: "You can return within 30 days." },
  { q: "Do you offer international shipping?", a: "Yes, we do!" },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="mb-2 border-b">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left py-2 font-medium"
          >
            {faq.q}
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === i ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="p-2 text-gray-700">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
