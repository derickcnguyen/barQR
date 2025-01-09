interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function EditableText({ value, onChange, placeholder }: EditableTextProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full p-3 text-lg border-4 border-black focus:outline-none focus:ring-4 focus:ring-yellow-400"
    />
  );
}