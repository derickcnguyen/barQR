import { Header } from './components/Header';
import { QRCodeSection } from './components/QRCodeSection';
import { BarcodeSection } from './components/BarcodeSection';
import { Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-yellow-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="grid md:grid-cols-2 gap-8">
          <QRCodeSection />
          <BarcodeSection />
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="transform -rotate-1 inline-block bg-white border-2 border-black px-4 py-2">
            Enter text in either section to generate code.
          </p>
        </div>      
        <div className="fixed bottom-4 right-4 flex gap-4">
          <a href="https://github.com/derickcnguyen" target="_blank" rel="noopener noreferrer" 
             className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/1derick-nguyen/" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/1dericknguyen" target="_blank" rel="noopener noreferrer"
             className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
        
      </div>
    </div>
    
    
  );
}

export default App;