interface InputSectionProps {
  value: string;
  onChange: (value: string) => void;
}

export function InputSection({ value, onChange }: InputSectionProps) {
  return (
    <div className="bg-white border-4 border-black p-6 mb-8 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter text for codes..."
        className="w-full p-4 text-xl border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
      />
    </div>
  );
}