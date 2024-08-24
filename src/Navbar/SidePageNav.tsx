"use client";
import { useEffect, useState } from "react";
import React from "react";

const sections = [
  { id: "section1", label: "Get Started" },
  { id: "section2", label: "Broadcast" },
  { id: "section3", label: "Campaign" },
  { id: "section4", label: "Auto Reply" },
  { id: "section5", label: "Opportunity" },
  { id: "section6", label: "Pricing" },
  { id: "section7", label: "FAQ" },
  { id: "section8", label: "Contact Us" },
];

const SidebarNav = () => {
  const [activeId, setActiveId] = useState<string | undefined>("");

  useEffect(() => {
    const observers = sections.map((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(section.id);
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(element);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer && observer.disconnect());
    };
  }, []);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" hidden md:block fixed left-10 top-1/2 transform p-4 -translate-y-1/2 w-64 bg-transparent text-white  flex-col">
      <nav className="border-l-2 border-gray-400 flex flex-col font-inter font-semibold">
        {sections.map((section) => (
          <button key={section.id} onClick={() => handleClick(section.id)} className={`w-fit py-2 px-4 text-left rounded-md ${activeId === section.id ? "text-black drop-shadow-lg" : "transition-all hover:text-black text-gray-300"}`}>
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default SidebarNav;
