import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BestSelling from "./components/BestSelling";
import FAQ from "./components/FAQ";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const heroRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2 });

    const words = paragraphRef.current.querySelectorAll("span");
    gsap.fromTo(words, {
      opacity: 0,
    }, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
    });
  }, []);

  const paragraph = "Experience the future of elegance and technology with our premium design.";

  return (
    <div className="min-h-screen bg-white px-6 py-12 font-sans">
      <section ref={heroRef} className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Luxury</h1>
        <p ref={paragraphRef} className="mt-4 text-lg md:text-xl">
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-1">{word}</span>
          ))}
        </p>
      </section>

      <BestSelling />
      <FAQ />
    </div>
  );
}

export default App;
