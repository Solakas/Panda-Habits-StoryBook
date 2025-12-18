import React, { useState, useEffect } from 'react';
import { HEX, COLOR_SYSTEM } from '../constants';
import { 
  ArrowLeft, CheckCircle2, Circle, Home, User, 
  Copy, Check, Code2, Layers, ChevronRight, XCircle, ThumbsUp, ThumbsDown,
  ChevronLeft, Type, Play, RotateCcw, Sliders, MapPin, Mail, Lock,
  Loader2, Utensils, Heart, GraduationCap, ChevronRight as ChevronRightIcon,
  Plus, Flame, Timer, Star, Sun, Coffee, Moon, Edit3, Trash2,
  Atom, Share2, LayoutTemplate, Map, BarChart3, Camera, ChefHat,
  Search, X, AlertCircle, Image as ImageIcon, Clock, Info, Target, Lightbulb,
  ArrowRight
} from 'lucide-react';

// --- Types ---
interface Property {
  label: string;
  value: string;
}

interface TypographySpec {
  label: string;
  font: string;
  color: string;
}

interface Control {
  key: string;
  label: string;
  type: 'color' | 'text' | 'number' | 'select' | 'boolean';
  options?: string[];
  defaultValue: string | boolean;
}

type AtomicCategory = 'Atom' | 'Molecule' | 'Organism';

interface ComponentDefinition {
  id: string;
  name: string;
  category: AtomicCategory;
  widgetName: string;
  source: string;
  description: string;
  usage: string;
  dos: string[];
  donts: string[];
  properties: Property[];
  typography: TypographySpec[];
  controls: Control[];
  code: string;
  render: (props: Record<string, any>) => React.ReactNode;
}

// --- Constants ---
const ALL_COLORS = [
  { label: 'White', value: '#FFFFFF' },
  { label: 'Transparent', value: 'transparent' },
  ...COLOR_SYSTEM.flatMap(cat => cat.colors.map(c => ({ label: c.name, value: c.hex })))
];

// --- Interactive Components ---

// 1. App Button
const InteractiveAppButton = ({ label = 'Save Changes', type = 'primary', icon = false }: any) => {
  const isPrimary = type === 'primary';
  const isDanger = type === 'danger';
  const isText = type === 'text';
  
  let bg = isPrimary ? HEX.BAMBOO_GREEN : 'transparent';
  let text = isPrimary ? '#FFFFFF' : isDanger ? HEX.ALERT_RED : HEX.BAMBOO_GREEN;
  let border = isPrimary || isText ? 'transparent' : isDanger ? HEX.ALERT_RED : HEX.BAMBOO_GREEN;
  
  return (
    <button 
      className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-bold text-base transition-transform active:scale-95 shadow-sm"
      style={{ 
        backgroundColor: bg, 
        color: text, 
        border: `1px solid ${border}`,
        minWidth: '140px'
      }}
    >
      {icon && <Trash2 size={18} />}
      <span>{label}</span>
    </button>
  );
};

// 2. Panda Avatar
const InteractivePandaAvatar = ({ emoji = '🤔' }: any) => (
  <div className="relative w-32 h-32 flex items-center justify-center">
     <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
        <span className="text-5xl grayscale opacity-50">🐼</span>
     </div>
     <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md w-10 h-10 flex items-center justify-center">
        <span className="text-xl">{emoji}</span>
     </div>
  </div>
);

// 3. Metric Chip
const InteractiveMetricChip = ({ label = 'Muscle', value = '35%' }: any) => (
   <div className="px-3 py-1.5 bg-white border border-[#E5E7EB] rounded-[16px] flex items-center gap-1.5 shadow-sm w-fit">
      <span className="text-xs text-[#9CA3AF]">{label}</span>
      <span className="text-xs font-bold text-[#15803D]">{value}</span>
   </div>
);

// 4. Suggestion Chip
const InteractiveSuggestionChip = ({ label = 'Yogurt Bowl' }: any) => (
  <button className="px-3.5 py-2.5 bg-white border-[1.5px] border-[#15803D] rounded-[20px] shadow-[0_2px_8px_rgba(17,24,39,0.05)] text-[13px] font-semibold text-[#15803D] hover:bg-green-50 transition active:scale-95">
    {label}
  </button>
);

// 5. Selection Tile
const InteractiveSelectionTile = ({ label = 'Active', selected = 'true' }: any) => {
  const isSelected = selected === 'true' || selected === true;
  return (
    <div className={`w-full max-w-xs p-5 rounded-2xl border-2 flex items-center justify-between cursor-pointer transition-all ${isSelected ? 'bg-[#DCFCE7] border-[#15803D]' : 'bg-white border-[#E5E7EB]'}`}>
       <span className="font-bold text-lg text-[#111827]">{label}</span>
       {isSelected ? <CheckCircle2 className="text-[#15803D]" /> : <Circle className="text-[#E5E7EB]" />}
    </div>
  );
};

// 6. Macro Badge
const InteractiveMacroBadge = ({ label = 'P', value = '20g', color = HEX.BAMBOO_GREEN }: any) => (
  <div className="flex items-center gap-1.5">
    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-[11px] font-semibold text-gray-400">{label}:</span>
    <span className="text-[11px] font-bold text-gray-900">{value}</span>
  </div>
);

// 7. Date Strip Item
const InteractiveDateStripItem = ({ day = 'DE', date = '21', status = 'standard' }: any) => {
  const isSelected = status === 'selected';
  const isToday = status === 'today';
  
  let bg = 'transparent';
  let border = 'transparent';
  let text = '#9CA3AF';
  let circleBg = 'transparent';
  let circleText = '#111827';

  if (isSelected) {
    bg = '#F0FDF4'; // green-50
    border = '#BBF7D0'; // green-200
    text = '#15803D';
    circleText = '#15803D';
  }
  if (isToday) {
    circleBg = '#15803D';
    circleText = '#FFFFFF';
  }

  return (
    <div className="flex flex-col items-center gap-2 p-2 rounded-full w-14 border transition-all"
         style={{ backgroundColor: bg, borderColor: border, borderWidth: '1px' }}>
      <span className="text-[11px] font-bold" style={{ color: text }}>{day}</span>
      <div className="w-9 h-9 rounded-full flex items-center justify-center text-[15px] font-bold"
           style={{ backgroundColor: circleBg, color: circleText }}>
        {date}
      </div>
      <div className="h-4 flex items-center justify-center">
         {status === 'perfect' && <Star size={12} className="text-yellow-400 fill-yellow-400" />}
         {status === 'logged' && <div className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />}
      </div>
    </div>
  );
};

// 8. View Selector
const InteractiveViewSelector = ({ selected = 'Week' }: any) => (
  <div className="bg-[#E5E7EB]/30 p-1 rounded-xl flex w-fit">
     {['Day', 'Week', 'Month'].map(opt => (
        <button
           key={opt}
           className={`px-3.5 py-2 rounded-lg text-xs transition-all ${selected === opt ? 'bg-[#15803D] text-white font-bold shadow-sm' : 'text-[#9CA3AF] font-medium'}`}
        >
           {opt}
        </button>
     ))}
  </div>
);

// 9. Standard Card
const InteractiveStandardCard = ({ title = 'Card Title' }: any) => (
  <div className="w-full max-w-sm bg-white p-5 rounded-[20px] shadow-sm border border-gray-100">
     <h3 className="font-bold text-lg text-[#111827] mb-2">{title}</h3>
     <p className="text-sm text-gray-500">Standard card content area with soft shadow and rounded corners.</p>
  </div>
);

// 10. Context Card
const InteractiveContextCard = ({ category = 'Reflection', title = 'Pattern', bg = HEX.CALM_TEAL_TINT, accent = HEX.MINDFUL_TEAL }: any) => (
  <div className="w-full max-w-sm p-5 rounded-[24px] shadow-sm border"
       style={{ backgroundColor: bg, borderColor: `${accent}4D` }}>
    <div className="flex items-center gap-3 mb-4">
       <div className="p-2 bg-white/90 rounded-full shadow-sm"><User size={20} color={accent} /></div>
       <span className="text-[13px] font-semibold" style={{ color: accent }}>{category}</span>
    </div>
    <h3 className="text-xl font-bold mb-2 text-[#111827]">{title}</h3>
    <p className="text-[15px] font-medium text-[#111827]/80">Description text goes here.</p>
  </div>
);

// 11. Method Card
const InteractiveMethodCard = ({ title = 'Scan', iconColor = HEX.MINDFUL_TEAL, bg = HEX.CALM_TEAL_TINT }: any) => (
  <div className="w-full max-w-sm p-4 rounded-[20px] bg-white border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.05)] flex items-center gap-4">
    <div className="p-3 rounded-xl" style={{ backgroundColor: bg }}>
       <Camera size={24} color={iconColor} />
    </div>
    <div className="flex-1">
       <h4 className="font-bold text-[#111827]">{title}</h4>
       <p className="text-xs text-gray-500">Subtitle text</p>
    </div>
    <ArrowRight size={20} className="text-gray-300" />
  </div>
);

// 12. Recipe Card
const InteractiveRecipeCard = ({ title = 'Omelette', calories = '350' }: any) => (
  <div className="w-full max-w-sm bg-white p-4 rounded-[20px] shadow-sm border border-gray-100">
     <div className="flex justify-between items-start mb-2">
        <h4 className="font-bold text-[17px] text-gray-900 flex-1">{title}</h4>
        <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-[#DCFCE7] text-[#15803D]">{calories} kcal</span>
     </div>
     <p className="text-sm text-gray-500">Quick and nutritious choice.</p>
  </div>
);

// 13. Streak Card
const InteractiveStreakCard = ({ value = '12', color = HEX.BAMBOO_GREEN, bg = HEX.MATCHA_GLOW }: any) => (
  <div className="w-32 h-32 relative overflow-hidden rounded-[20px] p-4 border"
       style={{ backgroundColor: bg, borderColor: `${color}1A` }}>
     <div className="absolute -right-2 -bottom-2 opacity-10">
        <Flame size={60} color={color} />
     </div>
     <div className="flex flex-col gap-2 relative z-10">
        <Flame size={24} color={color} />
        <span className="text-2xl font-bold text-[#111827]">{value}</span>
     </div>
  </div>
);

// 14. Goals Card (Projection)
const InteractiveGoalCard = ({ progress = 0.6 }: any) => (
  <div className="w-full max-w-sm p-5 rounded-[24px] bg-[#DCFCE7] border border-[#15803D]/30 shadow-sm">
     <div className="flex justify-between items-end mb-2">
        <span className="text-xl font-bold text-[#111827]">Projection</span>
        <span className="text-sm font-bold text-[#15803D]">{(progress*100).toFixed(0)}%</span>
     </div>
     <div className="h-2 w-full bg-[#15803D]/10 rounded-full overflow-hidden">
        <div style={{ width: `${progress*100}%` }} className="h-full bg-[#15803D] rounded-full" />
     </div>
  </div>
);

// 15. Input Field
const InteractiveInputField = ({ placeholder = 'Enter text...' }: any) => (
  <input 
    type="text" 
    placeholder={placeholder}
    className="w-full max-w-sm p-4 bg-[#F9FAFB] rounded-[16px] text-[#111827] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#15803D] transition-all"
  />
);

// 16. Macro Row
const InteractiveMacroRow = () => (
  <div className="flex gap-4">
     <InteractiveMacroBadge label="P" value="20g" color="#15803D" />
     <InteractiveMacroBadge label="C" value="45g" color="#FACC15" />
     <InteractiveMacroBadge label="F" value="12g" color="#FB7185" />
  </div>
);

// 17. Main App Header
const InteractiveMainAppHeader = () => (
  <div className="w-full max-w-md bg-white rounded-b-[24px] shadow-[0_4px_12px_rgba(17,24,39,0.08)] p-6 pt-12 flex items-center justify-between border-t border-x border-gray-100">
     <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-2xl">🐼</div>
        <div>
           <h2 className="text-lg font-bold text-[#111827]">My Progress</h2>
           <p className="text-xs font-bold text-[#9CA3AF] tracking-widest uppercase">KEEP GOING</p>
        </div>
     </div>
     <div className="w-11 h-11 rounded-full bg-[#DCFCE7] border-2 border-[#E5E7EB] flex items-center justify-center font-bold text-[#15803D]">G</div>
  </div>
);

// 18. Daily Progress
const InteractiveDailyProgress = ({ percent = 60 }: any) => (
  <div className="w-full max-w-sm bg-white p-5 rounded-[24px] border border-gray-200 shadow-sm">
     <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full border-4 border-[#15803D] flex items-center justify-center font-bold text-lg text-[#111827]">{percent}%</div>
        <div className="flex-1">
           <h4 className="font-bold text-[#111827]">Today's Goal</h4>
           <p className="text-sm text-gray-500">1250 / 2100 kcal</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#15803D] text-white flex items-center justify-center"><Plus size={20}/></button>
     </div>
     <InteractiveMacroRow />
  </div>
);

// 19. Log Meal Sheet
const InteractiveLogMealSheet = () => (
  <div className="w-full max-w-sm bg-white rounded-t-[24px] shadow-2xl h-96 border-t border-gray-200 flex flex-col">
     <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-4" />
     <div className="px-6 pb-4 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-xl font-bold text-[#111827]">What did you eat?</h3>
        <X className="text-gray-400" />
     </div>
     <div className="p-6 space-y-4 bg-gray-50/50 flex-1">
        <InteractiveMethodCard title="Scan Barcode" />
        <InteractiveMethodCard title="Search" iconColor={HEX.BAMBOO_GREEN} bg={HEX.MATCHA_GLOW} />
     </div>
  </div>
);

// 20. Weight Chart
const InteractiveWeightChart = () => (
  <div className="w-full max-w-md bg-white p-4 h-48 rounded-2xl border border-gray-200 relative">
     <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold text-sm">[ Interactive Chart Placeholder ]</div>
     {/* Simulation of painter */}
     <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <path d="M0 40 Q 25 10 50 30 T 100 20" fill="none" stroke={HEX.BAMBOO_GREEN} strokeWidth="2" />
        <circle cx="50" cy="30" r="3" fill={HEX.BAMBOO_GREEN} stroke="white" strokeWidth="1" />
     </svg>
  </div>
);

// 21. Weekly Strip
const InteractiveWeeklyStrip = () => (
  <div className="w-full max-w-md bg-white p-2 rounded-[20px] border border-gray-200 flex justify-between">
     <InteractiveDateStripItem day="Mon" date="21" status="standard" />
     <InteractiveDateStripItem day="Tue" date="22" status="perfect" />
     <InteractiveDateStripItem day="Wed" date="23" status="today" />
     <InteractiveDateStripItem day="Thu" date="24" status="standard" />
     <InteractiveDateStripItem day="Fri" date="25" status="standard" />
  </div>
);

// 22. Recipe Assistant
const InteractiveRecipeAssistant = () => (
  <div className="w-full max-w-md bg-white p-4 rounded-2xl border border-gray-200">
     <div className="mb-4">
        <InteractiveInputField placeholder="Search ingredients..." />
     </div>
     <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        <InteractiveSuggestionChip label="Breakfast" />
        <InteractiveSuggestionChip label="High Protein" />
     </div>
     <div className="space-y-3">
        <InteractiveRecipeCard title="Avocado Toast" calories="420" />
        <InteractiveRecipeCard title="Greek Yogurt" calories="280" />
     </div>
  </div>
);

// 23. Projection Sheet
const InteractiveProjectionSheet = () => (
  <div className="w-full max-w-sm bg-[#F9FAFB] rounded-t-[24px] shadow-xl p-6 border-t border-gray-200">
     <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
     <h3 className="text-2xl font-bold text-[#111827] mb-6">Calculation</h3>
     <div className="space-y-4">
        <div className="flex items-center gap-3">
           <div className="p-2 bg-[#DCFCE7] rounded text-[#15803D]"><Info size={16}/></div>
           <div><span className="font-bold">BMR</span> 1600</div>
        </div>
        <div className="p-3 bg-[#DCFCE7]/30 rounded-xl border border-[#15803D]/20 font-mono text-sm">
           BMR x Activity = TDEE
        </div>
     </div>
  </div>
);


// --- Component Definition List ---

const COMPONENTS: ComponentDefinition[] = [
  // --- Atoms ---
  {
    id: 'app-button',
    name: 'App Button',
    category: 'Atom',
    widgetName: 'AppButton',
    source: 'widgets/app_button.dart',
    description: 'Versatile button for all main actions.',
    usage: 'Primary for main CTAs, Secondary/Text for less importance, Danger for destructive.',
    dos: ['Use primary for the main goal', 'Use danger sparingly'],
    donts: ['Use primary for negative actions'],
    properties: [
      { label: 'Bg Color (Primary)', value: 'Bamboo Green (#15803D)' },
      { label: 'Text Color (Primary)', value: 'White (#FFFFFF)' },
      { label: 'Bg Color (Text)', value: 'Transparent' },
      { label: 'Padding', value: '12px 24px' },
      { label: 'Border Radius', value: '16px' },
      { label: 'Height', value: '48px (approx)' },
      { label: 'Shadow', value: 'Small (Primary Only)' }
    ],
    typography: [{ label: 'Label', font: 'Inter 16px Bold', color: 'White/Bamboo' }],
    controls: [
      { key: 'label', label: 'Label', type: 'text', defaultValue: 'Save Changes' },
      { key: 'type', label: 'Type', type: 'select', options: ['primary', 'secondary', 'text', 'danger'], defaultValue: 'primary' },
      { key: 'icon', label: 'Show Icon', type: 'boolean', defaultValue: false }
    ],
    code: `AppButton(\n  label: 'Save Changes',\n  type: AppButtonType.primary,\n  onPressed: () {},\n)`,
    render: (props) => <InteractiveAppButton {...props} />
  },
  {
    id: 'date-strip-item',
    name: 'Date Strip Item',
    category: 'Atom',
    widgetName: 'DateStripItem',
    source: 'food_log_diary_screen.dart',
    description: 'Single day cell for the weekly calendar strip.',
    usage: 'Inside WeeklyStrip.',
    dos: ['Highlight today', 'Show status indicators'],
    donts: ['Remove weekday label'],
    properties: [
      { label: 'Width', value: '56px' },
      { label: 'Padding', value: '8px' },
      { label: 'Border Radius', value: '999px (Stadium/Circle)' },
      { label: 'Bg Color (Selected)', value: 'Green 50 (#F0FDF4)' },
      { label: 'Border (Selected)', value: '1px solid Green 200 (#BBF7D0)' },
      { label: 'Circle Size', value: '36x36px' },
      { label: 'Circle Bg (Today)', value: 'Bamboo Green (#15803D)' }
    ],
    typography: [{ label: 'Day', font: '11px Bold', color: 'Grey' }],
    controls: [
      { key: 'day', label: 'Day', type: 'text', defaultValue: 'DE' },
      { key: 'date', label: 'Date', type: 'text', defaultValue: '21' },
      { key: 'status', label: 'Status', type: 'select', options: ['standard', 'today', 'selected', 'perfect', 'logged'], defaultValue: 'standard' }
    ],
    code: `Container(\n  decoration: BoxDecoration(\n    color: isSelected ? green50 : transparent\n  ),\n  child: Column([Text(day), CircleAvatar(child: Text(date))])\n)`,
    render: (props) => <InteractiveDateStripItem {...props} />
  },
  {
    id: 'macro-badge',
    name: 'Macro Badge',
    category: 'Atom',
    widgetName: 'MacroBadge',
    source: 'food_log_diary_screen.dart',
    description: 'Small indicator for a nutrient value.',
    usage: 'Inside MacroRow or Meal Cards.',
    dos: ['Use standard colors (Green/Yellow/Pink)'],
    donts: ['Remove dot'],
    properties: [
      { label: 'Dot Size', value: '8x8px' },
      { label: 'Gap', value: '6px' },
      { label: 'Color (P)', value: 'Bamboo Green (#15803D)' },
      { label: 'Color (C)', value: 'Sunshine (#FACC15)' },
      { label: 'Color (F)', value: 'Panda Blush (#FB7185)' }
    ],
    typography: [{ label: 'Text', font: '11px Bold', color: 'Panda Ink' }],
    controls: [
      { key: 'label', label: 'Label', type: 'text', defaultValue: 'P' },
      { key: 'value', label: 'Value', type: 'text', defaultValue: '20g' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: HEX.BAMBOO_GREEN }
    ],
    code: `Row([Circle(color: color), Text(label), Text(value)])`,
    render: (props) => <InteractiveMacroBadge {...props} />
  },
  {
    id: 'metric-chip',
    name: 'Metric Chip',
    category: 'Atom',
    widgetName: 'MetricChip',
    source: 'LogWeightSheet pattern',
    description: 'Small stat display used in details sheets.',
    usage: 'For displaying BMI, Body Fat, etc.',
    dos: ['Keep labels short'],
    donts: ['Use for primary actions'],
    properties: [
      { label: 'Bg Color', value: 'White (#FFFFFF)' },
      { label: 'Border', value: '1px solid Mist Grey (#E5E7EB)' },
      { label: 'Border Radius', value: '16px' },
      { label: 'Padding', value: '6px 12px' },
      { label: 'Shadow', value: 'Small' }
    ],
    typography: [{ label: 'Value', font: '12px Bold', color: 'Bamboo Green' }],
    controls: [
      { key: 'label', label: 'Label', type: 'text', defaultValue: 'Muscle' },
      { key: 'value', label: 'Value', type: 'text', defaultValue: '35%' }
    ],
    code: `Container(\n  decoration: BoxDecoration(border: Border.all(color: mistGrey)),\n  child: Row([Text(label), Text(value)])\n)`,
    render: (props) => <InteractiveMetricChip {...props} />
  },
  {
    id: 'panda-avatar',
    name: 'Panda Avatar',
    category: 'Atom',
    widgetName: 'PandaAvatar',
    source: 'widgets/panda_avatar.dart',
    description: 'Panda mascot with 15+ emotive poses.',
    usage: 'Onboarding, Success screens, Empty states.',
    dos: ['Use correct emotion for context'],
    donts: ['Hide emoji badge'],
    properties: [
      { label: 'Container Size', value: 'Responsive (e.g., 128x128px)' },
      { label: 'Badge Position', value: 'Top Right' },
      { label: 'Badge Shadow', value: 'Medium' },
      { label: 'Badge Bg', value: 'White (#FFFFFF)' }
    ],
    typography: [],
    controls: [
      { key: 'emoji', label: 'Emoji Badge', type: 'text', defaultValue: '🤔' }
    ],
    code: `PandaAvatar(emoji: '🤔')`,
    render: (props) => <InteractivePandaAvatar {...props} />
  },
  {
    id: 'selection-tile',
    name: 'Selection Tile',
    category: 'Atom',
    widgetName: 'SelectionTile',
    source: 'StepBehavior pattern',
    description: 'Standard selectable row for forms/wizards.',
    usage: 'Mutually exclusive options in a list.',
    dos: ['Show checkmark when selected'],
    donts: ['Use for multiple selection (checkboxes)'],
    properties: [
      { label: 'Bg Color (Selected)', value: 'Matcha Glow (#DCFCE7)' },
      { label: 'Bg Color (Unselected)', value: 'White (#FFFFFF)' },
      { label: 'Border (Selected)', value: '2px solid Bamboo Green' },
      { label: 'Border (Unselected)', value: '1px solid Mist Grey' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '16px' }
    ],
    typography: [{ label: 'Label', font: '18px Bold', color: 'Ink' }],
    controls: [
      { key: 'label', label: 'Label', type: 'text', defaultValue: 'Active' },
      { key: 'selected', label: 'Selected', type: 'boolean', defaultValue: true }
    ],
    code: `InkWell(\n  child: Container(\n    color: isSelected ? matchaGlow : white,\n    child: Row([Text(label), Icon(check)])\n  )\n)`,
    render: (props) => <InteractiveSelectionTile {...props} />
  },
  {
    id: 'suggestion-chip',
    name: 'Suggestion Chip',
    category: 'Atom',
    widgetName: 'SuggestionChip',
    source: 'LogMealSheet pattern',
    description: 'Clickable text pill for quick inputs.',
    usage: 'Meal logging suggestions.',
    dos: ['Soft shadow', 'Bamboo border'],
    donts: ['Use for navigation'],
    properties: [
      { label: 'Bg Color', value: 'White (#FFFFFF)' },
      { label: 'Border', value: '1.5px solid Bamboo Green' },
      { label: 'Padding', value: '10px 14px' },
      { label: 'Border Radius', value: '20px' },
      { label: 'Shadow', value: 'Soft (Blur 8, Offset 0 2)' }
    ],
    typography: [{ label: 'Text', font: '13px SemiBold', color: 'Bamboo' }],
    controls: [
      { key: 'label', label: 'Label', type: 'text', defaultValue: 'Yogurt Bowl' }
    ],
    code: `Container(\n  decoration: BoxDecoration(\n    border: Border.all(color: bambooGreen, width: 1.5)\n  ),\n  child: Text(label)\n)`,
    render: (props) => <InteractiveSuggestionChip {...props} />
  },
  {
    id: 'view-selector',
    name: 'View Selector',
    category: 'Atom',
    widgetName: 'ViewSelector',
    source: 'ProgressScreen pattern',
    description: 'Time range toggle (Day/Week/Month).',
    usage: 'Above charts.',
    dos: ['Highlight active tab'],
    donts: ['Hide inactive tabs completely'],
    properties: [
      { label: 'Container Bg', value: 'Mist Grey 30%' },
      { label: 'Container Radius', value: '12px' },
      { label: 'Container Padding', value: '4px' },
      { label: 'Item Radius', value: '8px' },
      { label: 'Active Bg', value: 'Bamboo Green' },
      { label: 'Active Text', value: 'White' }
    ],
    typography: [{ label: 'Text', font: '12px', color: 'Varied' }],
    controls: [
      { key: 'selected', label: 'Selected', type: 'select', options: ['Day', 'Week', 'Month'], defaultValue: 'Week' }
    ],
    code: `Container(child: Row(children: options.map(btn)))`,
    render: (props) => <InteractiveViewSelector {...props} />
  },

  // --- Molecules ---
  {
    id: 'context-card',
    name: 'Context Card',
    category: 'Molecule',
    widgetName: 'ContextCard',
    source: 'progress_screen.dart',
    description: 'Rich informational card with category styling.',
    usage: 'Insights, educational content.',
    dos: ['Use semantic theme colors', 'Include icon circle'],
    donts: ['Remove category label'],
    properties: [
      { label: 'Bg Color', value: 'Themed (e.g. Calm Teal Tint)' },
      { label: 'Border', value: '1px solid (Accent 30%)' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '24px' },
      { label: 'Icon Circle Bg', value: 'White (90% Opacity)' }
    ],
    typography: [{ label: 'Title', font: '20px Bold', color: 'Ink' }],
    controls: [
      { key: 'category', label: 'Category', type: 'text', defaultValue: 'Reflection' },
      { key: 'title', label: 'Title', type: 'text', defaultValue: 'Behavioral Pattern' },
      { key: 'bg', label: 'Background', type: 'color', defaultValue: HEX.CALM_TEAL_TINT },
      { key: 'accent', label: 'Accent', type: 'color', defaultValue: HEX.MINDFUL_TEAL }
    ],
    code: `Container(\n  color: bg,\n  child: Column([Row([Icon(accent), Text(category)]), Text(title)])\n)`,
    render: (props) => <InteractiveContextCard {...props} />
  },
  {
    id: 'goal-projection-card',
    name: 'Goals Card',
    category: 'Molecule',
    widgetName: 'GoalProjectionCard',
    source: 'progress_screen.dart',
    description: 'Variant of Context Card focused on weight goals.',
    usage: 'Progress screen dashboard.',
    dos: ['Show animated progress bar'],
    donts: ['Hide percentage'],
    properties: [
      { label: 'Bg Color', value: 'Matcha Glow (#DCFCE7)' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '24px' },
      { label: 'Progress Height', value: '8px' },
      { label: 'Progress Radius', value: '999px' },
      { label: 'Fill Color', value: 'Bamboo Green' }
    ],
    typography: [{ label: 'Percent', font: '14px Bold', color: 'Bamboo' }],
    controls: [
      { key: 'progress', label: 'Progress (0-1)', type: 'number', defaultValue: '0.6' }
    ],
    code: `Stack([Container(color: mist), FractionallySizedBox(widthFactor: progress, child: Container(color: bamboo))])`,
    render: (props) => <InteractiveGoalCard {...props} />
  },
  {
    id: 'input-field',
    name: 'Input Field',
    category: 'Molecule',
    widgetName: 'InputField',
    source: 'log_meal_bottom_sheet.dart',
    description: 'Rounded 16px text field filled with Rice Paper color.',
    usage: 'Forms and search inputs.',
    dos: ['Use placeholder text', 'Highlight on focus'],
    donts: ['Use sharp corners'],
    properties: [
      { label: 'Bg Color', value: 'Rice Paper (#F9FAFB)' },
      { label: 'Border Radius', value: '16px' },
      { label: 'Padding', value: '16px' },
      { label: 'Focus Ring', value: '2px solid Bamboo Green' }
    ],
    typography: [],
    controls: [
      { key: 'placeholder', label: 'Placeholder', type: 'text', defaultValue: 'Search...' }
    ],
    code: `TextField(\n  decoration: InputDecoration(\n    filled: true,\n    fillColor: ricePaper,\n    border: OutlineInputBorder(borderRadius: BorderRadius.circular(16))\n  )\n)`,
    render: (props) => <InteractiveInputField {...props} />
  },
  {
    id: 'macro-row',
    name: 'Macro Row',
    category: 'Molecule',
    widgetName: 'MacroRow',
    source: 'food_log_diary_screen.dart',
    description: 'Horizontal list of nutrient badges.',
    usage: 'In cards and daily summaries.',
    dos: ['Maintain order P-C-F'],
    donts: ['Stack vertically'],
    properties: [
      { label: 'Gap', value: '16px' },
      { label: 'Alignment', value: 'Vertical Center' }
    ],
    typography: [],
    controls: [],
    code: `Row(children: [MacroBadge(P), MacroBadge(C), MacroBadge(F)])`,
    render: () => <InteractiveMacroRow />
  },
  {
    id: 'method-card',
    name: 'Method Card',
    category: 'Molecule',
    widgetName: 'MethodCard',
    source: 'log_meal_bottom_sheet.dart',
    description: 'Action card with icon box for selecting input methods.',
    usage: 'Log Meal Sheet.',
    dos: ['Icon in colored box', 'Arrow on right'],
    donts: ['Make unclickable'],
    properties: [
      { label: 'Bg Color', value: 'White (#FFFFFF)' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '20px' },
      { label: 'Shadow', value: 'Blur 16, Offset 0 4' },
      { label: 'Icon Box Padding', value: '12px' },
      { label: 'Icon Box Radius', value: '12px' }
    ],
    typography: [{ label: 'Title', font: '16px Bold', color: 'Ink' }],
    controls: [
      { key: 'title', label: 'Title', type: 'text', defaultValue: 'Scan Barcode' },
      { key: 'iconColor', label: 'Icon Color', type: 'color', defaultValue: HEX.MINDFUL_TEAL },
      { key: 'bg', label: 'Icon Bg', type: 'color', defaultValue: HEX.CALM_TEAL_TINT }
    ],
    code: `Container(\n  child: Row([Container(color: bg, child: Icon(color: iconColor)), Text(title), Icon(arrow)])\n)`,
    render: (props) => <InteractiveMethodCard {...props} />
  },
  {
    id: 'recipe-card',
    name: 'Recipe Card',
    category: 'Molecule',
    widgetName: 'RecipeCard',
    source: 'recipe_assistant_screen.dart',
    description: 'Card displaying recipe summary.',
    usage: 'Recipe Assistant results.',
    dos: ['Show calories chip'],
    donts: ['Truncate title too early'],
    properties: [
      { label: 'Bg Color', value: 'White (#FFFFFF)' },
      { label: 'Border', value: '1px solid Mist Grey' },
      { label: 'Border Radius', value: '20px' },
      { label: 'Padding', value: '16px' },
      { label: 'Shadow', value: 'Soft' }
    ],
    typography: [{ label: 'Title', font: '17px Bold', color: 'Ink' }],
    controls: [
      { key: 'title', label: 'Title', type: 'text', defaultValue: 'Omelette' },
      { key: 'calories', label: 'Calories', type: 'text', defaultValue: '350' }
    ],
    code: `Container(\n  child: Column([Row([Text(title), Chip(calories)]), Text(desc)])\n)`,
    render: (props) => <InteractiveRecipeCard {...props} />
  },
  {
    id: 'standard-card',
    name: 'Standard Card',
    category: 'Molecule',
    widgetName: 'StandardCard',
    source: 'AppTheme / Common Pattern',
    description: 'Generic container with white bg, rounded corners, and soft shadow.',
    usage: 'Base for most UI blocks.',
    dos: ['Use consistent radius (20px)', 'Soft shadow'],
    donts: ['Use hard borders unless active'],
    properties: [
      { label: 'Bg Color', value: 'White (#FFFFFF)' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '20px' },
      { label: 'Shadow', value: 'Soft (Blur 12, Offset 0 4)' }
    ],
    typography: [],
    controls: [
      { key: 'title', label: 'Title', type: 'text', defaultValue: 'Simple Card' }
    ],
    code: `Container(\n  decoration: BoxDecoration(\n    color: Colors.white,\n    borderRadius: BorderRadius.circular(20),\n    boxShadow: softShadow\n  )\n)`,
    render: (props) => <InteractiveStandardCard {...props} />
  },
  {
    id: 'streak-card',
    name: 'Streak Card',
    category: 'Molecule',
    widgetName: 'StreakCard',
    source: 'progress_screen.dart',
    description: 'Square-ish card for stats display with background icon.',
    usage: 'Progress screen grid.',
    dos: ['Use large faded BG icon'],
    donts: ['Small text'],
    properties: [
      { label: 'Bg Color', value: 'Themed (e.g. Matcha Glow)' },
      { label: 'Border', value: '1px solid (Theme 10%)' },
      { label: 'Padding', value: '16px' },
      { label: 'Border Radius', value: '20px' },
      { label: 'Icon Size (FG)', value: '24px' },
      { label: 'Icon Size (BG)', value: '60px (10% Opacity)' }
    ],
    typography: [{ label: 'Value', font: '20px Bold', color: 'Ink' }],
    controls: [
      { key: 'value', label: 'Value', type: 'text', defaultValue: '12' },
      { key: 'color', label: 'Color', type: 'color', defaultValue: HEX.BAMBOO_GREEN },
      { key: 'bg', label: 'Background', type: 'color', defaultValue: HEX.MATCHA_GLOW }
    ],
    code: `Stack([\n  Positioned(child: Icon(size: 60, opacity: 0.1)),\n  Column([Icon(size: 24), Text(value)])\n])`,
    render: (props) => <InteractiveStreakCard {...props} />
  },

  // --- Organisms ---
  {
    id: 'daily-progress',
    name: 'Daily Progress',
    category: 'Organism',
    widgetName: 'DailyProgress',
    source: 'food_log_diary_screen.dart',
    description: 'Central dashboard element with circular indicator and macros.',
    usage: 'Home screen.',
    dos: ['Show clear CTA', 'Visualize goal status'],
    donts: ['Clutter'],
    properties: [
      { label: 'Bg Color', value: 'White' },
      { label: 'Border', value: '1px solid Mist Grey' },
      { label: 'Padding', value: '20px' },
      { label: 'Border Radius', value: '24px' },
      { label: 'Indicator Size', value: '64px' }
    ],
    typography: [],
    controls: [
      { key: 'percent', label: 'Percentage', type: 'number', defaultValue: '60' }
    ],
    code: `Column([\n  Row([CircularProgress(percent), Text('Goal'), AddButton]),\n  MacroRow()\n])`,
    render: (props) => <InteractiveDailyProgress {...props} />
  },
  {
    id: 'log-meal-sheet',
    name: 'Log Meal Sheet',
    category: 'Organism',
    widgetName: 'LogMealSheet',
    source: 'widgets/log_meal_bottom_sheet.dart',
    description: 'Multi-step modal for logging food.',
    usage: 'Main add action.',
    dos: ['ScrollControlled', 'Handle bar'],
    donts: ['Full screen without context'],
    properties: [
      { label: 'Bg Color', value: 'White' },
      { label: 'Border Radius', value: 'Top-L/R 24px' },
      { label: 'Handle Size', value: '40x4px' },
      { label: 'Handle Color', value: 'Mist Grey' },
      { label: 'Padding', value: '24px' }
    ],
    typography: [],
    controls: [],
    code: `showModalBottomSheet(\n  isScrollControlled: true,\n  builder: (ctx) => LogMealSheet()\n)`,
    render: () => <InteractiveLogMealSheet />
  },
  {
    id: 'main-app-header',
    name: 'Main App Header',
    category: 'Organism',
    widgetName: 'MainAppHeader',
    source: 'widgets/main_app_header.dart',
    description: 'Sticky header with avatar and page title.',
    usage: 'Top of main screens.',
    dos: ['Sticky position'],
    donts: ['Overcrowd'],
    properties: [
      { label: 'Bg Color', value: 'White' },
      { label: 'Padding Top', value: '60px' },
      { label: 'Padding Bottom', value: '16px' },
      { label: 'Padding X', value: '20px' },
      { label: 'Border Radius', value: 'Bottom-L/R 24px' },
      { label: 'Shadow', value: 'Blur 12, Offset 0 4' }
    ],
    typography: [],
    controls: [],
    code: `Container(\n  padding: EdgeInsets.only(top: 60),\n  child: Row([Logo, Title, Avatar])\n)`,
    render: () => <InteractiveMainAppHeader />
  },
  {
    id: 'projection-sheet',
    name: 'Projection Sheet',
    category: 'Organism',
    widgetName: 'ProjectionExplanationSheet',
    source: 'progress_screen.dart',
    description: 'Informational modal accessed from the Goal Projection Card.',
    usage: 'Explaining math behind predictions.',
    dos: ['Show equation'],
    donts: ['Too much text'],
    properties: [
      { label: 'Bg Color', value: 'Rice Paper (#F9FAFB)' },
      { label: 'Border Radius', value: 'Top 24px' },
      { label: 'Padding', value: '24px' },
      { label: 'Handle Size', value: '40x4px' }
    ],
    typography: [{ label: 'Header', font: '24px Bold', color: 'Ink' }],
    controls: [],
    code: `showModalBottomSheet(\n  builder: (ctx) => ProjectionSheet()\n)`,
    render: () => <InteractiveProjectionSheet />
  },
  {
    id: 'recipe-assistant',
    name: 'Recipe Assistant',
    category: 'Organism',
    widgetName: 'RecipeAssistant',
    source: 'recipe_assistant_screen.dart',
    description: 'Search tabs, Filters, and Results list container.',
    usage: 'Full screen or large component.',
    dos: ['Clean search bar'],
    donts: ['Hide results'],
    properties: [
      { label: 'Padding', value: '16px' },
      { label: 'Container Radius', value: '20px' },
      { label: 'Gap', value: '12px' },
      { label: 'Bg Color', value: 'White' },
      { label: 'Border', value: '1px solid Mist Grey' }
    ],
    typography: [],
    controls: [],
    code: `Column([SearchTabs(), FilterRow(), ResultsList()])`,
    render: () => <InteractiveRecipeAssistant />
  },
  {
    id: 'weekly-strip',
    name: 'Weekly Strip',
    category: 'Organism',
    widgetName: 'WeeklyStrip',
    source: 'food_log_diary_screen.dart',
    description: 'Horizontal date picker with status dots.',
    usage: 'Top of food log.',
    dos: ['Auto-scroll to today'],
    donts: ['Hide past days'],
    properties: [
      { label: 'Bg Color', value: 'White' },
      { label: 'Border', value: '1px solid Mist Grey' },
      { label: 'Padding', value: '8px' },
      { label: 'Border Radius', value: '20px' }
    ],
    typography: [],
    controls: [],
    code: `Row(children: days.map(day => DateStripItem(day)))`,
    render: () => <InteractiveWeeklyStrip />
  },
  {
    id: 'weight-chart',
    name: 'Weight Chart',
    category: 'Organism',
    widgetName: 'WeightChart',
    source: 'progress_screen.dart',
    description: 'Interactive line chart with bezier curves.',
    usage: 'Progress screen main viz.',
    dos: ['Gradient fill', 'Tap to see details'],
    donts: ['Jagged lines'],
    properties: [
      { label: 'Height', value: '200px' },
      { label: 'Stroke Width', value: '3px' },
      { label: 'Dot Radius', value: '4px / 6px (selected)' },
      { label: 'Line Color', value: 'Bamboo Green' }
    ],
    typography: [],
    controls: [],
    code: `CustomPaint(painter: WeightChartPainter())`,
    render: () => <InteractiveWeightChart />
  }
];

// --- Main Library Component ---

export const ComponentLibrary: React.FC = () => {
  const [activeId, setActiveId] = useState(COMPONENTS[0].id);
  const [copied, setCopied] = useState(false);
  const [widgetNameCopied, setWidgetNameCopied] = useState(false);
  const [isPlayMode, setIsPlayMode] = useState(false);
  const [customValues, setCustomValues] = useState<Record<string, any>>({});

  const activeComponent = COMPONENTS.find(c => c.id === activeId) || COMPONENTS[0];

  useEffect(() => {
    const defaults: Record<string, any> = {};
    if (activeComponent.controls) {
      activeComponent.controls.forEach(c => {
        defaults[c.key] = c.defaultValue;
      });
    }
    setCustomValues(defaults);
    setIsPlayMode(false);
  }, [activeId, activeComponent]);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyWidgetName = () => {
    navigator.clipboard.writeText(activeComponent.widgetName);
    setWidgetNameCopied(true);
    setTimeout(() => setWidgetNameCopied(false), 2000);
  };

  const handleControlChange = (key: string, value: string | boolean) => {
    setCustomValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetControls = () => {
    const defaults: Record<string, any> = {};
    activeComponent.controls.forEach(c => {
      defaults[c.key] = c.defaultValue;
    });
    setCustomValues(defaults);
  };

  const categories: AtomicCategory[] = ['Atom', 'Molecule', 'Organism'];

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-140px)] gap-8">
      {/* Sidebar List */}
      <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6 overflow-y-auto pr-2 border-r border-gray-100">
         {categories.map(category => (
            <div key={category}>
               <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-3 px-2 flex items-center gap-2">
                  {category === 'Atom' && <Atom size={14} className="text-blue-400" />}
                  {category === 'Molecule' && <Share2 size={14} className="text-purple-400" />}
                  {category === 'Organism' && <LayoutTemplate size={14} className="text-emerald-400" />}
                  {category}s
               </h3>
               <div className="space-y-1">
                  {COMPONENTS.filter(c => c.category === category)
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map(comp => (
                     <button
                        key={comp.id}
                        onClick={() => setActiveId(comp.id)}
                        className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between w-full group ${
                           activeId === comp.id ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
                        }`}
                     >
                        {comp.name}
                        {activeId === comp.id && <ChevronRight size={14} className="opacity-50" />}
                     </button>
                  ))}
               </div>
            </div>
         ))}
      </div>

      {/* Main Preview Area */}
      <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
         <div className="rounded-2xl border border-gray-200 bg-gray-50/50 flex flex-col min-h-[400px] shadow-inner mb-8 relative group overflow-hidden transition-all">
            <div className="h-12 border-b border-gray-200 bg-white/50 backdrop-blur px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <span className={`text-[10px] font-bold px-2 py-1 rounded border uppercase tracking-wider ${
                      activeComponent.category === 'Atom' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                      activeComponent.category === 'Molecule' ? 'bg-purple-50 text-purple-600 border-purple-200' :
                      'bg-emerald-50 text-emerald-600 border-emerald-200'
                   }`}>{activeComponent.category}</span>
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Preview</span>
                </div>
                <div className="flex items-center gap-2">
                   {isPlayMode && (
                      <button onClick={resetControls} className="p-1.5 text-gray-400 hover:text-gray-700 rounded-md hover:bg-gray-100 transition" title="Reset to Defaults"><RotateCcw size={14} /></button>
                   )}
                   <button onClick={() => setIsPlayMode(!isPlayMode)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition border ${isPlayMode ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}>
                      {isPlayMode ? <Sliders size={12} /> : <Play size={12} />}
                      {isPlayMode ? 'Controls Active' : 'Play Mode'}
                   </button>
                </div>
            </div>
            
            <div className="flex flex-1">
               {/* Component Render */}
               <div className="flex-1 flex items-center justify-center p-12 relative">
                  {/* Grid Background */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  {activeComponent.render(isPlayMode ? customValues : {})}
               </div>
               
               {/* Controls Panel */}
               {isPlayMode && (
                  <div className="w-64 bg-white border-l border-gray-200 p-6 shadow-xl animate-in slide-in-from-right-10 duration-200">
                     <h4 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2"><Sliders size={14} />Properties</h4>
                     <div className="space-y-4">
                        {activeComponent.controls.map(control => (
                           <div key={control.key} className="space-y-1.5">
                              <label className="text-xs font-medium text-gray-500">{control.label}</label>
                              {control.type === 'color' && (
                                 <select value={customValues[control.key] || control.defaultValue} onChange={(e) => handleControlChange(control.key, e.target.value)} className="w-full text-xs bg-gray-50 border border-gray-200 rounded px-2 py-2 font-mono text-gray-900 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none">
                                    {ALL_COLORS.map(color => (<option key={color.value} value={color.value}>{color.label}</option>))}
                                 </select>
                              )}
                              {control.type === 'select' && control.options && (
                                <select value={customValues[control.key] || control.defaultValue} onChange={(e) => handleControlChange(control.key, e.target.value)} className="w-full text-xs bg-gray-50 border border-gray-200 rounded px-2 py-2 font-mono text-gray-900 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none">
                                    {control.options.map(opt => (<option key={opt} value={opt}>{opt}</option>))}
                                 </select>
                              )}
                              {control.type === 'boolean' && (
                                <select value={String(customValues[control.key] ?? control.defaultValue)} onChange={(e) => handleControlChange(control.key, e.target.value === 'true')} className="w-full text-xs bg-gray-50 border border-gray-200 rounded px-2 py-2 font-mono text-gray-900 focus:outline-none focus:border-blue-500 transition-colors cursor-pointer appearance-none">
                                    <option value="true">True</option>
                                    <option value="false">False</option>
                                 </select>
                              )}
                              {(control.type === 'text' || control.type === 'number') && (
                                 <input type={control.type === 'number' ? 'number' : 'text'} value={customValues[control.key] || control.defaultValue} onChange={(e) => handleControlChange(control.key, e.target.value)} className="w-full text-sm bg-gray-50 border border-gray-200 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 transition-all" />
                              )}
                           </div>
                        ))}
                     </div>
                  </div>
               )}
            </div>
         </div>

         {/* Documentation */}
         <div className="mb-10">
            <div className="flex items-start justify-between">
               <div>
                  <h2 className="text-3xl font-bold text-[#111827] mb-2">{activeComponent.name}</h2>
                  <div className="flex flex-col gap-3">
                     <div className="flex items-center gap-3">
                        <button onClick={handleCopyWidgetName} title="Click to copy" className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-mono border border-purple-100 hover:bg-purple-100 transition active:scale-95">
                           {widgetNameCopied ? <Check size={12} /> : <Code2 size={12} />}
                           {widgetNameCopied ? 'Copied!' : activeComponent.widgetName}
                        </button>
                        <span className="text-sm text-gray-400 font-mono text-xs">{activeComponent.source}</span>
                     </div>
                  </div>
               </div>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed text-lg">{activeComponent.description}</p>
         </div>

         <div className="space-y-12 pb-24">
            <div>
               <h3 className="font-semibold text-gray-900 flex items-center gap-2 mb-4 text-lg"><Layers size={20} className="text-blue-500" />Usage Guidelines</h3>
               <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm"><p className="text-gray-600 leading-relaxed">{activeComponent.usage}</p></div>
            </div>
            
            {activeComponent.properties.length > 0 && (
              <div>
                 <h3 className="font-semibold text-gray-900 mb-4 px-1 text-lg">Visual Properties</h3>
                 <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {activeComponent.properties.map((prop, idx) => (
                       <div key={idx} className={`flex items-center p-4 text-sm ${idx !== activeComponent.properties.length - 1 ? 'border-b border-gray-100' : ''} bg-white hover:bg-gray-50 transition`}>
                          <span className="w-1/3 md:w-1/4 font-medium text-gray-500">{prop.label}</span>
                          <span className="w-2/3 md:w-3/4 font-mono text-gray-900">{prop.value}</span>
                       </div>
                    ))}
                 </div>
              </div>
            )}

            {activeComponent.typography.length > 0 && (
              <div>
                 <h3 className="font-semibold text-gray-900 mb-4 px-1 text-lg flex items-center gap-2"><Type size={20} className="text-gray-500" />Typography</h3>
                 <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {activeComponent.typography.map((type, idx) => (
                       <div key={idx} className={`flex flex-col sm:flex-row sm:items-center p-4 text-sm ${idx !== activeComponent.typography.length - 1 ? 'border-b border-gray-100' : ''} bg-white hover:bg-gray-50 transition gap-2 sm:gap-0`}>
                          <span className="w-full sm:w-1/3 md:w-1/4 font-medium text-gray-500">{type.label}</span>
                          <div className="w-full sm:w-2/3 md:w-3/4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                              <span className="font-mono text-gray-900 font-semibold">{type.font}</span>
                              <span className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded border border-gray-100 w-fit">{type.color}</span>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
            )}

            <div>
               <h3 className="font-semibold text-gray-900 mb-4 px-1 text-lg">Best Practices</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-6">
                     <h4 className="text-emerald-800 font-bold flex items-center gap-2 mb-4"><ThumbsUp size={18} />Dos</h4>
                     <ul className="space-y-3">{activeComponent.dos.map((item, idx) => (<li key={idx} className="flex items-start gap-2 text-sm text-emerald-900/80"><CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-600" />{item}</li>))}</ul>
                  </div>
                  <div className="bg-rose-50/50 border border-rose-100 rounded-xl p-6">
                     <h4 className="text-rose-800 font-bold flex items-center gap-2 mb-4"><ThumbsDown size={18} />Don'ts</h4>
                     <ul className="space-y-3">{activeComponent.donts.map((item, idx) => (<li key={idx} className="flex items-start gap-2 text-sm text-rose-900/80"><XCircle size={16} className="shrink-0 mt-0.5 text-rose-600" />{item}</li>))}</ul>
                  </div>
               </div>
            </div>

            <div className="relative group">
               <div className="flex items-center justify-between mb-4 px-1"><h3 className="font-semibold text-gray-900 text-lg">Implementation</h3></div>
               <div className="rounded-xl border border-gray-800 bg-[#0F172A] overflow-hidden shadow-lg">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-[#1E293B]">
                     <span className="text-xs text-gray-400 font-mono">Dart / Flutter</span>
                     <button onClick={() => handleCopy(activeComponent.code)} className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition px-2 py-1 rounded hover:bg-white/10">
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        {copied ? 'Copied!' : 'Copy Code'}
                     </button>
                  </div>
                  <div className="p-6 overflow-x-auto"><pre className="text-sm font-mono text-blue-100 leading-relaxed">{activeComponent.code}</pre></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};