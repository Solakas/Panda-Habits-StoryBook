import React, { useState } from 'react';
import { COLOR_SYSTEM, HEX } from '../constants';
import { Copy, Check } from 'lucide-react';

export const PaletteView: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
         <h2 className="text-2xl font-bold mb-4" style={{ color: HEX.PANDA_INK }}>Brand Philosophy</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
               <span className="text-3xl mb-2 block">🐼</span>
               <h3 className="font-semibold text-lg" style={{ color: HEX.PANDA_INK }}>Panda</h3>
               <p style={{ color: HEX.MUTED_GREY }}>Safety, self-acceptance, calm.</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: HEX.MATCHA_GLOW }}>
               <span className="text-3xl mb-2 block">🥗</span>
               <h3 className="font-semibold text-lg" style={{ color: HEX.BAMBOO_GREEN }}>Nutrition</h3>
               <p style={{ color: HEX.BAMBOO_GREEN }}>Health, freshness, "green choices".</p>
            </div>
            <div className="p-4 rounded-lg" style={{ backgroundColor: HEX.CALM_TEAL_TINT }}>
               <span className="text-3xl mb-2 block">🧠</span>
               <h3 className="font-semibold text-lg" style={{ color: HEX.MINDFUL_TEAL }}>Psychology</h3>
               <p style={{ color: HEX.MINDFUL_TEAL }}>Calm, reflection, emotional awareness.</p>
            </div>
         </div>
      </div>

      {COLOR_SYSTEM.map((category) => (
        <section key={category.title} className="space-y-4">
          <div className="border-b pb-2 border-gray-200">
            <h3 className="text-xl font-bold" style={{ color: HEX.PANDA_INK }}>{category.title}</h3>
            <p style={{ color: HEX.MUTED_GREY }}>{category.description}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.colors.map((color) => (
              <div 
                key={color.hex} 
                className="group relative bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md"
              >
                <div 
                  className="h-24 w-full flex items-center justify-center cursor-pointer relative"
                  style={{ backgroundColor: color.hex }}
                  onClick={() => handleCopy(color.hex)}
                >
                  <div className="opacity-0 group-hover:opacity-100 transition absolute bg-black/20 inset-0 flex items-center justify-center text-white">
                    {copied === color.hex ? <Check size={24} /> : <Copy size={24} />}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-sm" style={{ color: HEX.PANDA_INK }}>{color.name}</h4>
                    <span className="font-mono text-xs px-2 py-1 bg-gray-100 rounded text-gray-500">{color.hex}</span>
                  </div>
                  <code className="block text-xs mb-2 text-gray-400 break-all">{color.variableName}</code>
                  <p className="text-xs" style={{ color: HEX.MUTED_GREY }}>{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};