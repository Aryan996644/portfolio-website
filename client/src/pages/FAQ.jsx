import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'Are you available for full-time opportunities?',
    answer: 'Absolutely! I am actively seeking full-time roles and open to exciting challenges.',
  },
  {
    question: 'What is your preferred tech stack?',
    answer: 'I primarily work with React, Node.js, Express, MongoDB, and Tailwind CSS. I’m also exploring TypeScript, Next.js, and GraphQL.',
  },
  {
    question: 'Are you open to remote or hybrid roles?',
    answer: 'Yes, I am comfortable working in remote environments and collaborating across time zones.',
  },
  {
    question: 'Do you contribute to open-source?',
    answer: 'Yes! I regularly contribute to GitHub, create utility tools, and enjoy helping others in the dev community.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400 border border-indigo-500 inline-block px-4 py-1 rounded-full shadow-sm mb-4">
          Have Questions? I’ve Got Answers
        </p>
        <h2 className="text-4xl font-bold mb-10">Frequently Asked Questions</h2>

        <div className="space-y-6 text-left">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl bg-gray-800/40 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-medium hover:text-indigo-400 transition"
              >
                {faq.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <div
                className={`px-6 pb-4 text-gray-300 text-base transition-all duration-300 ${
                  openIndex === index ? 'block' : 'hidden'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
