
import React from 'react';
import { HEX } from '../constants';
import { 
  Sparkles, 
  Brain, 
  Target, 
  ShieldCheck, 
  Zap, 
  HandMetal, 
  MessageSquareHeart, 
  Cpu, 
  Palette,
  ArrowRightCircle,
  Construction
} from 'lucide-react';

export const GenesisView: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      
      {/* Chapter 1: The Vision */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-teal-600 rounded-[40px] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        <div className="relative bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest">
                Chapter 01
              </div>
              <h2 className="text-4xl font-black leading-tight" style={{ color: HEX.PANDA_INK }}>
                Beyond the Calorie Counter
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium">
                PandaHabits was born from a simple realization: <span className="text-gray-900 font-bold">knowledge isn't enough to change behavior.</span> Most health apps feel like homework—a judgmental spreadsheet of your mistakes.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Our vision was to create a companion that understands the psychology of habits. We wanted to build a bridge between education, mental awareness, and daily routine that feels fun, safe, and entirely non-judgmental.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-50 rounded-[32px] p-8 flex items-center justify-center border border-gray-100">
               <div className="relative">
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center text-7xl shadow-xl">🐼</div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
                    <Heart size={32} fill="white" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 2: The Challenge (No Figma) */}
      <section className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-widest">
            The Method
          </div>
          <h2 className="text-4xl font-black" style={{ color: HEX.PANDA_INK }}>The "Figma-less" Evolution</h2>
          <p className="text-lg text-gray-500 font-medium">
            The main challenge? Achieve <span className="text-blue-600">High-Fidelity UI</span> without ever opening a design tool.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4 hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
              <Construction size={24} />
            </div>
            <h4 className="text-xl font-black">Design via Documentation</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              Instead of drawing rectangles, we documented an <span className="font-bold text-gray-900">Atomic Design System</span>. We defined the soul of the app through tokens, semantics, and accessibility rules first.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4 hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
              <Cpu size={24} />
            </div>
            <h4 className="text-xl font-black">Training the "Agent"</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              We used Cursor's <span className="font-bold text-gray-900">Ask & Agent modes</span> not just as a code assistant, but as a design partner. We trained it to "think" in our brand language.
            </p>
          </div>

          <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4 hover:translate-y-[-4px] transition-transform">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <h4 className="text-xl font-black">Self-Correcting UI</h4>
            <p className="text-gray-500 text-sm leading-relaxed">
              The AI became a skilled designer that uses its own style guides to correct itself. It learned to spot contrast errors and padding inconsistencies before they ever hit the screen.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 3: The Psychology */}
      <div className="bg-[#111827] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
              The Philosophy
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Habits, Not Calculations.
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Brain className="text-green-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Psychology-First</h5>
                  <p className="text-gray-400 leading-relaxed">We focus on the 'Why' of eating. Understanding emotional triggers is more valuable than tracking a single calorie.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-teal-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Non-Judgmental Space</h5>
                  <p className="text-gray-400 leading-relaxed">Logging food shouldn't be an obligation. Our UI uses soft colors and a friendly Panda mascot to remove the "shame" from the process.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="text-yellow-400" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Gamified Education</h5>
                  <p className="text-gray-400 leading-relaxed">Every action is a micro-win. We turn learning about nutrition into a journey across a roadmap of growth.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-[40px] p-8 border border-white/10 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-bold">Project Outcome</span>
                <span className="text-green-400 text-xs font-black uppercase tracking-widest">Successful</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <ArrowRightCircle size={18} className="text-green-500" />
                  <span className="text-sm">Zero Design Tool Hand-off</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRightCircle size={18} className="text-green-500" />
                  <span className="text-sm">Full AAA Accessibility Standards</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRightCircle size={18} className="text-green-500" />
                  <span className="text-sm">Consistent Semantic Multi-Modal UX</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRightCircle size={18} className="text-green-500" />
                  <span className="text-sm">Scalable Atomic Component Library</span>
                </li>
              </ul>
              <div className="pt-4">
                <div className="p-4 bg-green-500/10 rounded-2xl border border-green-500/20 text-green-100 text-xs italic">
                  "Building with the AI as a designer wasn't about speed, it was about creating a shared language of constraints that resulted in a better product."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 4: The Takeaway */}
      <div className="text-center py-10 space-y-6">
        <h3 className="text-2xl font-black" style={{ color: HEX.PANDA_INK }}>Welcome to the Future of Workflow</h3>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
          Explore the rest of this guide to see how our atomic tokens, semantic cards, and accessibility rules came together to build <span className="text-green-700 font-bold">PandaHabits</span>.
        </p>
        <div className="flex justify-center">
          <div className="animate-bounce p-3 bg-gray-100 rounded-full text-gray-400">
            <Sparkles size={24} />
          </div>
        </div>
      </div>

    </div>
  );
};

// Internal utility component for the heart icon
const Heart = ({ size, fill, className }: { size?: number, fill?: string, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill={fill || "none"} 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);
