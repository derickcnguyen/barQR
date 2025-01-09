export interface PrintOptions {
  value: string;
  code: string;
  title: string;
}

export function printCode({ value, code, title }: PrintOptions): void {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  document.body.appendChild(iframe);

  const content = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Print ${title}</title>
        <style>
          @media print {
            @page { margin: 0; }
            body { margin: 1cm; }
          }
          body { 
            display: flex; 
            flex-direction: column; 
            align-items: center;
            justify-content: center;
            min-height: 90vh;
          }
          .container { text-align: center; }
          .value { 
            margin: 20px 0;
            padding: 8px;
            border: 2px solid #000;
            font-family: system-ui, -apple-system, sans-serif;
            font-size: 16px;
          }
          .code {
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="value" contenteditable="true">${value}</div>
          <div class="code">${code}</div>
        </div>
      </body>
    </html>
  `;

  const printDocument = iframe.contentWindow?.document;
  if (!printDocument) return;

  printDocument.write(content);
  printDocument.close();

  iframe.onload = () => {
    iframe.contentWindow?.print();
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 100);
  };
}