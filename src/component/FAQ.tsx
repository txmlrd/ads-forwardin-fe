import React from "react";
import { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";

function FAQ() {
  const faqs = [
    {
      question: "Apa itu Forwardin?",
      answer:
        "Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.",
    },
    {
      question: "Apakah Forwardin cocok untuk saya?",
      answer:
        "Forwardin cocok untuk Anda yang membutuhkan alat pengelolaan pesan WhatsApp yang efisien dan efektif. Forwardin sangat cocok digunakan oleh pebisnis, marketer, dan siapa saja yang membutuhkan alat pengelolaan pesan WhatsApp yang canggih.",
    },
    {
      question: "Apa Forwardin perlu di-install ke komputer?",
      answer: "Tidak, Forwardin adalah platform berbasis web yang dapat diakses melalui browser di komputer atau perangkat seluler Anda.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <div className="mt-9 transition-all">
        {faqs.map((faq, index) => (
          <div key={index} className="py-3 px-5 rounded-lg bg-white mt-2">
            <div className="flex flex-row justify-between font-inter font-bold text-[16px]" onClick={() => toggleIndex(index)}>
              {faq.question}
              <span className="w-[22px] h-[22px] flex text-center justify-center items-center bg-biru text-white">
                <RemoveIcon />
              </span>
            </div>
            <div className={`faq-answer text-[12px] font-semibold pt-2 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${activeIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
