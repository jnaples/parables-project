import { useEffect, useRef, useState } from "react";

export default function ParableCard({
  title,
  reference,
  scripture,
  interpretation,
  eager = false,
}) {
  const ref = useRef(null);
  const interpretationRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [interpretationVisible, setInterpretationVisible] = useState(false);

  useEffect(() => {
    if (eager) {
      requestAnimationFrame(() => {
        setVisible(true);
        setInterpretationVisible(true);
      });
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [eager]);

  useEffect(() => {
    if (eager) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInterpretationVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (interpretationRef.current) observer.observe(interpretationRef.current);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <div ref={ref} className="flex flex-col gap-6">
      <div
        className="border-l-2 border-black px-6"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1), transform 2.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2 className="font-cardinal mb-2 text-[40px] leading-tight">
          {title} - {reference}
        </h2>
        <p className="text-[20px] leading-relaxed">{scripture}</p>
      </div>
      <div
        ref={interpretationRef}
        className="flex flex-col gap-2"
        style={{
          opacity: interpretationVisible ? 1 : 0,
          transform: interpretationVisible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 2.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
        }}
      >
        <h3 className="text-[20px] uppercase">Interpretation:</h3>
        {interpretation.map((para, i) => (
          <p key={i} className="text-[#414141]">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}
