import { Scan } from 'lucide-react';

export function Header() {
  return (
    <div className="bg-black text-white p-6 mb-8 transform -rotate-1">
      <div className="flex items-center gap-4">
        <Scan className="w-10 h-10" />
        <h1 className="text-4xl font-bold">BarQR Generator</h1>
      </div>
    </div>
  );
}