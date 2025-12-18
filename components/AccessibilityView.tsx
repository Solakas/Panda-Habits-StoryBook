
import React from 'react';
import { CONTRAST_CHECKS, HEX } from '../constants';
import { 
  CheckCircle, 
  AlertTriangle, 
  Eye, 
  Fingerprint, 
  Type, 
  AudioLines, 
  Layers, 
  MoveRight, 
  Info,
  Maximize2,
  MousePointer2,
  TextCursorInput,
  ShieldCheck,
  Zap,
  Activity,
  Hand
} from 'lucide-react';

export const AccessibilityView: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Header Section */}
      <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
           <div className="w-24 h-24 bg-green-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-green-200">
              <ShieldCheck size={48} strokeWidth={2} />
           </div>
           <div>
              <div className="inline-flex px-3 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Expert Compliance</div>
              <h2 className="text-4xl font-black mb-3" style={{ color: HEX.PANDA_INK }}>PandaHabits Accessibility Standard</h2>
              <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                As lead accessibility engineers, we aim for <strong className="text-gray-900">WCAG 2.1 AAA</strong>. Inclusion isn't a feature—it's the foundation of the habit-building journey.
              </p>
           </div>
        </div>
      </div>

      {/* Section 1: Visual Clarity */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
           <div className="flex items-center gap-3">
              <Eye className="text-blue-600" size={28} />
              <h3 className="text-2xl font-black" style={{ color: HEX.PANDA_INK }}>Color Contrast & Vision</h3>
           </div>
           <span className="text-xs font-bold text-gray-400">Pass Criteria: 7:1 for AAA</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONTRAST_CHECKS.map((check, idx) => {
             const isTripleA = parseFloat(check.ratio) >= 7.0;
             return (
              <div key={idx} className="group flex flex-col rounded-3xl overflow-hidden border border-gray-100 bg-white hover:shadow-xl transition-all duration-500">
                <div 
                  className="h-32 flex items-center justify-center text-center p-6"
                  style={{ backgroundColor: check.backgroundHex }}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-black" style={{ color: check.foregroundHex }}>
                      Aa
                    </span>
                    <span className="text-[10px] mt-1 font-bold opacity-60 uppercase tracking-tighter" style={{ color: check.foregroundHex }}>
                      {check.usage}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex justify-between items-center bg-white">
                  <div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Contrast</div>
                    <div className={`text-xl font-black ${isTripleA ? 'text-green-600' : 'text-blue-600'}`}>
                      {check.ratio}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter inline-block mb-1 ${isTripleA ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                      {check.level}
                    </div>
                    <div className="flex items-center gap-1 justify-end text-green-600 text-[11px] font-bold">
                      <CheckCircle size={10} /> Valid
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
           <Info className="text-blue-600 shrink-0" size={24} />
           <p className="text-sm text-blue-900/80 leading-relaxed font-medium">
             <strong>Expert Rule:</strong> Color is never the sole indicator of status. Errors must use icons (e.g., <AlertTriangle size={12} className="inline" />) and success states must use checkmarks (<CheckCircle size={12} className="inline" />) to support users with color-blindness (Protanopia/Deuteranopia).
           </p>
        </div>
      </section>

      {/* Section 2: Interaction & Dexterity */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
           <Hand className="text-orange-600" size={28} />
           <h3 className="text-2xl font-black" style={{ color: HEX.PANDA_INK }}>Touch Physics & Interaction</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Target Size */}
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm group">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                 <Maximize2 size={24} />
              </div>
              <h4 className="text-2xl font-black mb-4">48dp Touch Target Rule</h4>
              <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                Fingers are not cursors. All interactive elements (buttons, chips, checkboxes) must have a minimum physical size of <strong>48x48 logical pixels</strong>.
              </p>
              <div className="flex items-center gap-8 bg-gray-50 p-8 rounded-3xl border-2 border-dashed border-gray-200 justify-center">
                 <div className="relative">
                    <div className="w-16 h-16 bg-orange-400/10 rounded-xl flex items-center justify-center border-2 border-orange-400 border-dashed group-hover:scale-110 transition-transform">
                       <div className="w-8 h-8 bg-orange-600 rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute -top-4 -left-4 text-[10px] font-black text-orange-600 bg-white px-2 py-0.5 rounded-full border border-orange-200">48dp Target Area</div>
                 </div>
                 <div className="max-w-[140px] text-xs text-gray-400 font-bold uppercase tracking-tight">
                    Smaller icons must use invisible padding to hit this threshold.
                 </div>
              </div>
           </div>

           {/* Feedback Loop */}
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                 <Zap size={24} />
              </div>
              <h4 className="text-2xl font-black mb-4">Multi-Modal Feedback</h4>
              <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                To confirm an action, we trigger three senses: <strong>Visual</strong> (Animation), <strong>Haptic</strong> (Vibration), and <strong>Auditory</strong> (Sound).
              </p>
              <div className="space-y-4">
                 <div className="p-4 bg-green-50 border border-green-100 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <CheckCircle className="text-green-600" />
                       <span className="text-sm font-bold text-green-800">HapticSuccess</span>
                    </div>
                    <span className="text-[10px] font-black text-green-600 bg-white px-2 py-1 rounded-lg">Goal Completed</span>
                 </div>
                 <div className="p-4 bg-orange-50 border border-orange-100 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <AlertTriangle className="text-orange-600" />
                       <span className="text-sm font-bold text-orange-800">VibrateMedium</span>
                    </div>
                    <span className="text-[10px] font-black text-orange-600 bg-white px-2 py-1 rounded-lg">Validation Error</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Section 3: Auditory & Assistive Semantics */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
           <AudioLines className="text-purple-600" size={28} />
           <h3 className="text-2xl font-black" style={{ color: HEX.PANDA_INK }}>Assistive Tech & Semantics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-[#F9FAFB] p-8 rounded-[32px] border border-gray-200">
              <div className="text-purple-600 mb-4"><TextCursorInput size={32} /></div>
              <h5 className="font-black text-lg mb-2">Descriptive Labels</h5>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Buttons shouldn't just be "Button". In Flutter, use <code>Semantics(label: "Add custom meal entry")</code> to provide context to VoiceOver/TalkBack users.
              </p>
           </div>
           <div className="bg-[#F9FAFB] p-8 rounded-[32px] border border-gray-200">
              <div className="text-purple-600 mb-4"><Layers size={32} /></div>
              <h5 className="font-black text-lg mb-2">Merge Semantics</h5>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Group related items (icon + text + value) using <code>MergeSemantics</code> so the screen reader treats the whole card as a single, logical announcement.
              </p>
           </div>
           <div className="bg-[#F9FAFB] p-8 rounded-[32px] border border-gray-200">
              <div className="text-purple-600 mb-4"><MoveRight size={32} /></div>
              <h5 className="font-black text-lg mb-2">Traversal Order</h5>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Ensure the <code>SemanticIndex</code> follows the visual flow. Avoid jumps that leave users confused about their location on the page.
              </p>
           </div>
        </div>

        <div className="p-10 bg-[#1E293B] text-white rounded-[40px] shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
              <AudioLines size={120} />
           </div>
           <div className="relative z-10">
              <div className="inline-flex px-3 py-1 bg-purple-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-6">Expert Guideline: LiveRegions</div>
              <h4 className="text-3xl font-black mb-4">Announcing Real-time Events</h4>
              <p className="text-purple-100 text-xl leading-relaxed max-w-3xl">
                "When a user's streak updates or a weight prediction is calculated, use <strong>SemanticsService.announce</strong>. This ensures blind or low-vision users know an update happened without manually searching for the change."
              </p>
           </div>
        </div>
      </section>

      {/* Section 4: Flexibility & Scale */}
      <section className="space-y-8">
        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
           <Type className="text-pink-600" size={28} />
           <h3 className="text-2xl font-black" style={{ color: HEX.PANDA_INK }}>Scaling & Adaptability</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
              <h4 className="text-2xl font-black mb-4">Dynamic Type (200%)</h4>
              <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                UI must remain functional at <strong>2.0x system text scale</strong>. Never use fixed heights for text containers.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                   <div className="text-[12px] font-bold text-gray-400 mb-2 uppercase">Normal Scale</div>
                   <div className="text-lg font-bold">Log your Breakfast</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                   <div className="text-[12px] font-bold text-gray-400 mb-2 uppercase">200% Scale</div>
                   <div className="text-3xl font-black leading-tight">Log your<br/>Breakfast</div>
                </div>
              </div>
           </div>

           <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex flex-col justify-center">
              <h4 className="text-2xl font-black mb-4">Reduced Motion</h4>
              <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                For users with vestibular disorders, all parallax and rapid animations must be disabled if the system <code>prefers-reduced-motion</code> is active.
              </p>
              <div className="p-6 bg-pink-50 border border-pink-100 rounded-3xl flex items-center gap-4">
                 <Activity className="text-pink-600" size={32} />
                 <div className="text-sm font-bold text-pink-900 leading-relaxed">
                   Use the <code>Animate.restartOnHotReload</code> check or <code>MediaQuery.maybeOf(context)?.accessibleNavigation</code> in Flutter to gate high-motion transitions.
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};
