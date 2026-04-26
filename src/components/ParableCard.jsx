import { useEffect, useRef, useState } from "react";

export default function ParableCard({
  title,
  reference,
  scripture,
  interpretation,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1), transform 2.4s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="border-l-2 border-black px-6">
        <h2 className="font-cardinal text-[40px]">
          {title} - {reference}
        </h2>
        <p className="text-[20px] leading-relaxed">{scripture}</p>
      </div>
      <div className="flex flex-col gap-2">
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
