import React, { useState } from 'react';
import { HEX } from '../constants';
import { Copy, Check, FileText, Type, Ruler } from 'lucide-react';

interface TokenRow {
  name: string;
  hex: string;
  usage: string;
}

const TOKEN_COLORS: TokenRow[] = [
  { name: 'bambooGreen', hex: HEX.BAMBOO_GREEN, usage: 'Primary Brand, CTAs' },
  { name: 'pandaInk', hex: HEX.PANDA_INK, usage: 'Primary Text' },
  { name: 'ricePaper', hex: HEX.RICE_PAPER, usage: 'App Background' },
  { name: 'matchaGlow', hex: HEX.MATCHA_GLOW, usage: 'Nutrition/Success Backgrounds' },
  { name: 'mindfulTeal', hex: HEX.MINDFUL_TEAL, usage: 'Psychology/Info Actions' },
  { name: 'alertRed', hex: HEX.ALERT_RED, usage: 'Error/Danger States' },
  { name: 'sunshine', hex: HEX.SUNSHINE, usage: 'Streaks/Awards' },
];

interface TypographyRow {
  style: string;
  specs: string;
  usage: string;
  className: string;
}

const TYPOGRAPHY_STYLES: TypographyRow[] = [
  { style: 'Display', specs: '32px Bold', usage: 'Hero Titles, Big Stats', className: 'text-[32px] font-bold' },
  { style: 'Headline 1', specs: '24px Bold', usage: 'Main Section Headers', className: 'text-[24px] font-bold' },
  { style: 'Headline 2', specs: '20px Bold', usage: 'Card Titles, Sub-sections', className: 'text-[20px] font-bold' },
  { style: 'Body Link', specs: '16px SemiBold', usage: 'Interactive Text, Buttons', className: 'text-[16px] font-semibold underline decoration-2 underline-offset-4' },
  { style: 'Body Large', specs: '16px Regular', usage: 'Primary Paragraphs, readable content', className: 'text-[16px] font-normal' },
  { style: 'Body Medium', specs: '14px Regular', usage: 'Secondary text, dense info', className: 'text-[14px] font-normal' },
  { style: 'Label Large', specs: '12px SemiBold', usage: 'Metadata, Chips', className: 'text-[12px] font-semibold tracking-wide uppercase' },
  { style: 'Label Small', specs: '11px SemiBold', usage: 'Tiny stats, timestamps', className: 'text-[11px] font-semibold tracking-wide uppercase' },
];

interface SpacingRow {
  value: number;
  variable: string;
  usage: string;
}

const SPACING_SCALE: SpacingRow[] = [
  { value: 4, variable: 'AppSpacing.xs', usage: 'Tight gaps, icon spacing' },
  { value: 8, variable: 'AppSpacing.sm', usage: 'Small padding, standard gaps' },
  { value: 12, variable: 'AppSpacing.md', usage: 'Medium padding, separating related items' },
  { value: 16, variable: 'AppSpacing.lg', usage: 'Standard content padding, container edges' },
  { value: 20, variable: 'AppSpacing.xl', usage: 'Card padding, loose grouping' },
  { value: 24, variable: 'AppSpacing.2xl', usage: 'Section padding, modal boundaries' },
  { value: 32, variable: 'AppSpacing.3xl', usage: 'Major section separation' },
  { value: 40, variable: 'AppSpacing.4xl', usage: 'Large visual breaks' },
  { value: 48, variable: 'AppSpacing.5xl', usage: 'Hero spacing, large layout gaps' },
  { value: 60, variable: 'AppSpacing.6xl', usage: 'Massive spacing, safe areas' },
];

export const DesignTokensView: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-16">
      
      {/* Colors Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
           <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
              <FileText size={24} />
           </div>
           <div>
              <h2 className="text-2xl font-bold" style={{ color: HEX.PANDA_INK }}>Colors</h2>
              <code className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded font-mono">lib/theme/app_colors.dart</code>
           </div>
        </div>

        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
           <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                 <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Token Name</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Preview</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Hex Value</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Usage</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                 {TOKEN_COLORS.map((token) => (
                    <tr key={token.name} className="hover:bg-gray-50/50 transition-colors">
                       <td className="px-6 py-4 font-mono text-sm font-medium text-purple-700">{token.name}</td>
                       <td className="px-6 py-4">
                          <div 
                             className="w-16 h-10 rounded-lg shadow-sm border border-gray-200 cursor-pointer relative group"
                             style={{ backgroundColor: token.hex }}
                             onClick={() => handleCopy(token.hex)}
                          >
                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/10 rounded-lg transition-opacity">
                                {copied === token.hex ? <Check size={16} className="text-white" /> : <Copy size={16} className="text-white" />}
                             </div>
                          </div>
                       </td>
                       <td className="px-6 py-4 font-mono text-sm text-gray-600">{token.hex}</td>
                       <td className="px-6 py-4 text-sm text-gray-700">{token.usage}</td>
                    </tr>
                 ))}
              </tbody>
           </table>
        </div>
      </section>

      {/* Typography Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
           <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
              <Type size={24} />
           </div>
           <div>
              <h2 className="text-2xl font-bold" style={{ color: HEX.PANDA_INK }}>Typography</h2>
              <div className="flex items-center gap-3">
                 <code className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded font-mono">lib/theme/app_theme.dart</code>
                 <span className="text-sm text-gray-500">Uses Google Fonts <strong>Manrope</strong></span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
           {TYPOGRAPHY_STYLES.map((type) => (
              <div key={type.style} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 md:items-center group hover:border-blue-200 transition-colors">
                 <div className="md:w-1/3 space-y-1">
                    <h3 className="font-bold text-gray-900">{type.style}</h3>
                    <div className="flex flex-wrap gap-2">
                       <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded text-gray-600">{type.specs}</span>
                    </div>
                    <p className="text-sm text-gray-500 pt-1">{type.usage}</p>
                 </div>
                 <div className="md:w-2/3 p-6 bg-gray-50 rounded-lg border border-gray-100 flex items-center overflow-hidden">
                    <span className={`${type.className} text-gray-900 truncate`}>
                       The quick brown fox jumps over the lazy dog.
                    </span>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* Spacing Section */}
      <section>
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
            <div className="p-2 bg-pink-100 text-pink-600 rounded-lg">
              <Ruler size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold" style={{ color: HEX.PANDA_INK }}>Spacing</h2>
              <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500">Base unit: <strong>4px</strong> grid system</span>
              </div>
            </div>
        </div>

        <div className="overflow-hidden bg-white border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-1/3">Visual</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Variable (Concept)</th>
                    <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Usage</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {SPACING_SCALE.map((space) => (
                    <tr key={space.value} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-sm font-bold text-pink-600">{space.value}px</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                              <div 
                                className="bg-pink-300/50 border border-pink-300 rounded relative"
                                style={{ width: `${space.value}px`, height: '24px' }}
                                title={`${space.value}px`}
                              />
                              <div className="flex-1 h-px bg-pink-100 border-t border-dashed border-pink-200" />
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono text-sm text-gray-600">{space.variable}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{space.usage}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
        </div>
      </section>

    </div>
  );
};