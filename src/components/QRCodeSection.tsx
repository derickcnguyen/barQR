import { useState } from 'react';
import { QrCode } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { PrintButton } from './PrintButton';
import { EditableText } from './EditableText';
import { printCode } from '../utils/print';

export function QRCodeSection() {
  const [value, setValue] = useState('');

  const handlePrint = () => {
    const qrCode = document.querySelector('#qr-code')?.innerHTML;
    if (!qrCode) return;

    printCode({
      value,
      code: qrCode,
      title: 'QR Code'
    });
  };

  return (
    <div className="bg-white border-4 border-black p-6 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <QrCode className="w-6 h-6" />
          <h2 className="text-2xl font-bold">QR Code</h2>
        </div>
        {value && <PrintButton onClick={handlePrint} />}
      </div>
      <div className="mb-4">
        <EditableText
          value={value}
          onChange={setValue}
          placeholder="Enter text for QR code..."
        />
      </div>
      <div id="qr-code" className="bg-white p-4 flex justify-center">
        {value ? (
          <QRCodeSVG
            value={value}
            size={200}
            level="H"
            includeMargin={true}
          />
        ) : (
          <div className="w-[200px] h-[200px] border-4 border-dashed border-gray-300 flex items-center justify-center text-gray-400">
            Enter text above
          </div>
        )}
      </div>
    </div>
  );
}