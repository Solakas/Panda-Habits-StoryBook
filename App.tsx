
import React, { useState } from 'react';
import { Palette, Layers, Accessibility, Box, Menu, X, Download, Smartphone, Sparkles } from 'lucide-react';
import { DesignTokensView } from './components/DesignTokensView';
import { SemanticView } from './components/SemanticView';
import { AccessibilityView } from './components/AccessibilityView';
import { ComponentLibrary } from './components/ComponentLibrary';
import { MockupsView } from './components/MockupsView';
import { GenesisView } from './components/GenesisView';
import { Tab } from './types';
import { HEX } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.GENESIS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ tab, icon: Icon, label }: { tab: Tab, icon: any, label: string }) => {
    const isActive = activeTab === tab;
    return (
      <button
        onClick={() => {
          setActiveTab(tab);
          setMobileMenuOpen(false);
        }}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full transition-all ${
          isActive 
            ? 'bg-gray-900 text-white shadow-md' 
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
        <span className="font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#F9FAFB] text-[#111827]">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-50">
         <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#15803D] flex items-center justify-center text-white text-lg">🐼</div>
            <span className="font-bold text-lg">PandaHabits</span>
         </div>
         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-600">
           {mobileMenuOpen ? <X /> : <Menu />}
         </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:sticky md:top-0 inset-0 md:inset-auto z-40 bg-white md:h-screen w-full md:w-72 border-r border-gray-200 p-6 flex flex-col
        transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="hidden md:flex items-center gap-3 mb-10 px-2">
           <div className="w-10 h-10 rounded-xl bg-[#15803D] flex items-center justify-center text-white text-xl shadow-lg shadow-green-900/20">🐼</div>
           <div>
              <h1 className="font-bold text-xl tracking-tight">PandaHabits</h1>
              <span className="text-xs text-gray-400 font-medium">DESIGN SYSTEM v1.0</span>
           </div>
        </div>

        <nav className="space-y-2 flex-1">
          <NavItem tab={Tab.GENESIS} icon={Sparkles} label="The Genesis" />
          <NavItem tab={Tab.TOKENS} icon={Palette} label="Design Tokens" />
          <NavItem tab={Tab.SEMANTIC} icon={Layers} label="Semantic Usage" />
          <NavItem tab={Tab.ACCESSIBILITY} icon={Accessibility} label="Accessibility" />
          <NavItem tab={Tab.COMPONENTS} icon={Box} label="Components" />
          <NavItem tab={Tab.MOCKUPS} icon={Smartphone} label="UI Mockups" />
        </nav>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <button className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-gray-600 transition">
             <Download size={14} />
             Export Tokens (JSON)
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-7xl mx-auto w-full">
        <header className="mb-8 md:mb-12">
           <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: HEX.PANDA_INK }}>
             {activeTab === Tab.GENESIS && 'Project Genesis'}
             {activeTab === Tab.TOKENS && 'Design Tokens'}
             {activeTab === Tab.SEMANTIC && 'Semantic Usage'}
             {activeTab === Tab.ACCESSIBILITY && 'Accessibility Checks'}
             {activeTab === Tab.COMPONENTS && 'Component Library'}
             {activeTab === Tab.MOCKUPS && 'UI Mockups'}
           </h1>
           <div className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed">
             {activeTab === Tab.GENESIS && 'The story of how we built a high-fidelity habit tracker using AI as a design partner.'}
             {activeTab === Tab.TOKENS && 'The core atoms of the visual design system: Colors and Typography.'}
             {activeTab === Tab.SEMANTIC && 'Guidelines on how to apply color meaningfully across different contexts of the application.'}
             {activeTab === Tab.ACCESSIBILITY && 'Ensuring the application is inclusive and legible for everyone through WCAG AAA compliance.'}
             {activeTab === Tab.COMPONENTS && 'Live previews of UI primitives constructed using the design tokens.'}
             {activeTab === Tab.MOCKUPS && 'High-fidelity visual representations of the final application user experience.'}
           </div>
        </header>

        <div className="animate-fade-in">
          {activeTab === Tab.GENESIS && <GenesisView />}
          {activeTab === Tab.TOKENS && <DesignTokensView />}
          {activeTab === Tab.SEMANTIC && <SemanticView />}
          {activeTab === Tab.ACCESSIBILITY && <AccessibilityView />}
          {activeTab === Tab.COMPONENTS && <ComponentLibrary />}
          {activeTab === Tab.MOCKUPS && <MockupsView />}
        </div>
      </main>

    </div>
  );
};

export default App;
