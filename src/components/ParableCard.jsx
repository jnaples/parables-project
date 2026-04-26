// src/components/ParableCard.jsx
export default function ParableCard({
  title,
  reference,
  scripture,
  interpretation,
}) {
  return (
    <div className="flex flex-col gap-6">
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
