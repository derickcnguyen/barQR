import { useState, useEffect, useRef } from 'react';
import { Barcode } from 'lucide-react';
import JsBarcode from 'jsbarcode';
import { PrintButton } from './PrintButton';
import { EditableText } from './EditableText';
import { printCode } from '../utils/print';

export function BarcodeSection() {
  const [value, setValue] = useState('');
  const barcodeRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (barcodeRef.current && value) {
      JsBarcode(barcodeRef.current, value, {
        format: 'CODE128',
        width: 2,
        height: 100,
        displayValue: true,
      });
    }
  }, [value]);

  const handlePrint = () => {
    const barcode = document.querySelector('#barcode')?.innerHTML;
    if (!barcode) return;

    printCode({
      value,
      code: barcode,
      title: 'Barcode'
    });
  };

  return (
    <div className="bg-white border-4 border-black p-6 transform rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Barcode className="w-6 h-6" />
          <h2 className="text-2xl font-bold">Barcode</h2>
        </div>
        {value && <PrintButton onClick={handlePrint} />}
      </div>
      <div className="mb-4">
        <EditableText
          value={value}
          onChange={setValue}
          placeholder="Enter text for barcode..."
        />
      </div>
      <div id="barcode" className="bg-white p-4 flex justify-center">
        <svg ref={barcodeRef}></svg>
      </div>
    </div>
  );
}