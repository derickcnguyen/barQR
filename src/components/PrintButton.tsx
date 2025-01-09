interface PrintButtonProps {
  onClick: () => void;
}

export function PrintButton({ onClick }: PrintButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-black text-white font-bold hover:bg-gray-800 transform transition-transform hover:-translate-y-0.5"
    >
      Print
    </button>
  );
}