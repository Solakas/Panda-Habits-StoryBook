import React from 'react';
import { HEX, CHART_DATA } from '../constants';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart 
} from 'recharts';
import { AlertCircle, CheckCircle2, Info, Trophy } from 'lucide-react';

export const SemanticView: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Cards Section */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold" style={{ color: HEX.PANDA_INK }}>Card Surfaces & Contexts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Nutrition Card */}
          <div className="rounded-2xl p-6 shadow-sm border border-transparent transition hover:shadow-md" 
               style={{ backgroundColor: HEX.MATCHA_GLOW }}>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-full bg-white/50 text-2xl">🥗</div>
               <div>
                 <h4 className="font-bold text-lg" style={{ color: HEX.PANDA_INK }}>Nutrition Insight</h4>
                 <p className="text-sm font-medium" style={{ color: HEX.BAMBOO_GREEN }}>Daily Summary</p>
               </div>
             </div>
             <p className="mb-6 leading-relaxed" style={{ color: HEX.PANDA_INK }}>
               You've made great green choices today. Your protein intake aligns perfectly with your goals.
             </p>
             <button 
                className="px-4 py-2 rounded-lg font-medium text-sm w-full transition active:scale-95"
                style={{ backgroundColor: HEX.BAMBOO_GREEN, color: HEX.WHITE }}
              >
                Log Meal
             </button>
          </div>

          {/* Psychology Card */}
          <div className="rounded-2xl p-6 shadow-sm border border-transparent transition hover:shadow-md" 
               style={{ backgroundColor: HEX.CALM_TEAL_TINT }}>
             <div className="flex items-center gap-3 mb-4">
               <div className="p-2 rounded-full bg-white/50 text-2xl">🧠</div>
               <div>
                 <h4 className="font-bold text-lg" style={{ color: HEX.PANDA_INK }}>Behavioral Pattern</h4>
                 <p className="text-sm font-medium" style={{ color: HEX.MINDFUL_TEAL }}>Reflection</p>
               </div>
             </div>
             <p className="mb-6 leading-relaxed" style={{ color: HEX.PANDA_INK }}>
               Noticing a trigger is the first step to changing a habit. Take a moment to breathe.
             </p>
             <button 
                className="px-4 py-2 rounded-lg font-medium text-sm w-full transition active:scale-95"
                style={{ backgroundColor: HEX.MINDFUL_TEAL, color: HEX.WHITE }}
              >
                Start Reflection
             </button>
          </div>
        </div>
      </section>

      {/* Data Vis Section */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold" style={{ color: HEX.PANDA_INK }}>Data Visualization (Projection)</h3>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
           <div className="text-center mb-6">
              <h4 className="text-lg font-bold" style={{ color: HEX.PANDA_INK }}>Your Weight Journey</h4>
              <p className="text-sm" style={{ color: HEX.MUTED_GREY }}>Long term sustainable change vs. Strict Diet</p>
           </div>
           
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <ComposedChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" stroke={HEX.MIST_GREY} vertical={false} />
                 <XAxis dataKey="name" stroke={HEX.MUTED_GREY} tick={{fill: HEX.MUTED_GREY}} axisLine={false} tickLine={false} />
                 <YAxis stroke={HEX.MUTED_GREY} tick={{fill: HEX.MUTED_GREY}} axisLine={false} tickLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
                 <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 />
                 
                 {/* Strict Diet - Restrictive Path */}
                 <defs>
                    <linearGradient id="colorRestrictive" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={HEX.PANDA_BLUSH} stopOpacity={0.1}/>
                      <stop offset="95%" stopColor={HEX.PANDA_BLUSH} stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSustainable" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={HEX.BAMBOO_GREEN} stopOpacity={0.2}/>
                      <stop offset="95%" stopColor={HEX.BAMBOO_GREEN} stopOpacity={0}/>
                    </linearGradient>
                 </defs>

                 <Area 
                    type="monotone" 
                    dataKey="restrictive" 
                    name="Strict Diet"
                    stroke={HEX.PANDA_BLUSH} 
                    fillOpacity={1} 
                    fill="url(#colorRestrictive)" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                 />

                 {/* Panda Habits - Sustainable Path */}
                 <Area 
                    type="monotone" 
                    dataKey="sustainable" 
                    name="Panda Habits"
                    stroke={HEX.BAMBOO_GREEN} 
                    fillOpacity={1} 
                    fill="url(#colorSustainable)" 
                    strokeWidth={3}
                 />

                 {/* Dots at the end */}
                 <Line type="monotone" dataKey="sustainable" stroke="none" dot={(props: any) => {
                     const { cx, cy, index, payload } = props;
                     if (index === CHART_DATA.length - 1) {
                         return <circle cx={cx} cy={cy} r={6} fill={HEX.BAMBOO_GREEN} stroke="white" strokeWidth={2} />;
                     }
                     return <></>;
                 }} />
                  <Line type="monotone" dataKey="restrictive" stroke="none" dot={(props: any) => {
                     const { cx, cy, index, payload } = props;
                     if (index === CHART_DATA.length - 1) {
                         return <circle cx={cx} cy={cy} r={5} fill={HEX.PANDA_BLUSH} stroke="white" strokeWidth={2} />;
                     }
                     return <></>;
                 }} />

               </ComposedChart>
             </ResponsiveContainer>
           </div>
           
           {/* Legend matches Flutter code */}
           <div className="flex flex-wrap gap-6 justify-center mt-6">
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: HEX.BAMBOO_GREEN }} />
                 <span className="text-sm font-medium" style={{ color: HEX.PANDA_INK }}>Panda Habits</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: HEX.PANDA_BLUSH }} />
                 <span className="text-sm font-medium" style={{ color: HEX.PANDA_INK }}>Strict Diet</span>
              </div>
           </div>

           <div className="mt-6 p-4 rounded-xl flex gap-3 text-sm leading-relaxed" 
                style={{ backgroundColor: HEX.MATCHA_GLOW, color: HEX.BAMBOO_GREEN }}>
              <div className="mt-0.5 font-bold">💡</div>
              <div>
                With Panda Habits, you lose weight steadily and maintain it, without depriving yourself of your favorite flavors.
              </div>
           </div>
        </div>
      </section>

      {/* States Section */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold" style={{ color: HEX.PANDA_INK }}>Status & Feedback</h3>
        <div className="space-y-3">
           {/* Success */}
           <div className="p-4 rounded-lg flex items-center gap-3 border" 
                style={{ backgroundColor: HEX.RICE_PAPER, borderColor: HEX.BAMBOO_GREEN }}>
              <CheckCircle2 size={20} style={{ color: HEX.BAMBOO_GREEN }} />
              <span className="font-medium" style={{ color: HEX.PANDA_INK }}>Goal Achieved! You hit your water target.</span>
           </div>

           {/* Info */}
           <div className="p-4 rounded-lg flex items-center gap-3 border" 
                style={{ backgroundColor: HEX.RICE_PAPER, borderColor: HEX.MINDFUL_TEAL }}>
              <Info size={20} style={{ color: HEX.MINDFUL_TEAL }} />
              <span className="font-medium" style={{ color: HEX.PANDA_INK }}>New psychology lesson available.</span>
           </div>

           {/* Warning */}
           <div className="p-4 rounded-lg flex items-center gap-3 border" 
                style={{ backgroundColor: HEX.RICE_PAPER, borderColor: HEX.SUNSHINE }}>
              <Trophy size={20} style={{ color: HEX.SUNSHINE }} />
              <span className="font-medium" style={{ color: HEX.PANDA_INK }}>3 day streak at risk! Log now to keep it.</span>
           </div>

           {/* Error */}
           <div className="p-4 rounded-lg flex items-center gap-3 border" 
                style={{ backgroundColor: HEX.RICE_PAPER, borderColor: HEX.ALERT_RED }}>
              <AlertCircle size={20} style={{ color: HEX.ALERT_RED }} />
              <span className="font-medium" style={{ color: HEX.PANDA_INK }}>Unable to sync data. Please check connection.</span>
           </div>
        </div>
      </section>

    </div>
  );
};