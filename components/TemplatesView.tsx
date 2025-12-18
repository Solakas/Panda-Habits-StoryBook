import React, { useState, useMemo } from 'react';
import { HEX } from '../constants';
import { 
  FileCode, Smartphone, Code2, Check, Copy, 
  ArrowLeft, ChevronRight, CheckCircle2, TrendingUp, Brain,
  Bell, Plus, Droplets, Flame, Star, ArrowRight, Heart, 
  Home, BookOpen, Utensils, BarChart3, Sun, Search, X, ChevronRight as ChevronIcon
} from 'lucide-react';
import { 
  ComposedChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer 
} from 'recharts';

// --- FLUTTER CODE SNIPPETS ---

const HOME_SCREEN_CODE = `import 'dart:ui';
import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'package:flutter_animate/flutter_animate.dart';
import 'package:intl/intl.dart';
import '../providers/nutrition_provider.dart';
import '../models.dart';
import '../constants.dart';
import '../widgets/bottom_nav.dart';
import '../widgets/log_meal_bottom_sheet.dart';
import '../widgets/main_app_header.dart';
import '../theme/app_colors.dart';
import '../theme/semantic_colors.dart';
import '../services/lessons_service.dart';
import '../services/gemini_service.dart';
import 'daily_lesson_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final provider = Provider.of<NutritionProvider>(context);
    final data = provider.nutritionData;

    return Scaffold(
      backgroundColor: AppColors.ricePaper,
      body: Stack(
        children: [
          // Scrollable Content
          Positioned.fill(
            child: SingleChildScrollView(
              padding: const EdgeInsets.only(top: 144, bottom: 20, left: 16, right: 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildDailyProgressCard(context, data).animate().fadeIn(duration: 600.ms).slideY(begin: 0.1, end: 0),
                  const SizedBox(height: 16),
                  _buildSuggestionCard(context).animate().fadeIn(delay: 100.ms, duration: 600.ms).slideY(begin: 0.1, end: 0),
                  const SizedBox(height: 16),
                  _buildDailyAffirmationCard(context).animate().fadeIn(delay: 200.ms, duration: 600.ms).slideY(begin: 0.1, end: 0),
                  const SizedBox(height: 16),
                  _buildDailyLessonCard(context).animate().fadeIn(delay: 300.ms, duration: 600.ms).slideY(begin: 0.1, end: 0),
                  const SizedBox(height: 16),
                  _buildRecipeAssistantCard(context).animate().fadeIn(delay: 400.ms, duration: 600.ms).slideY(begin: 0.1, end: 0),
                ],
              ),
            ),
          ),
          
          // Sticky Header
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            child: MainAppHeader(
              pageTitle: _getGreeting(provider.userName),
              subtitle: _getMotivationalMessage(provider),
            ),
          ),
        ],
      ),
      bottomNavigationBar: const BottomNavBar(),
    );
  }
}`;

const PERSONAL_DETAILS_CODE = `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:math' as math;
import 'dart:ui' as ui;
import 'package:intl/intl.dart';
import '../../../models/onboarding_models.dart';
import '../../../widgets/panda_avatar.dart';
import '../../../theme/app_colors.dart';
import '../../../theme/button_sizes.dart';

class StepPersonalDetails extends StatefulWidget {
  final PersonalDetails data;
  final VoidCallback onNext;
  final VoidCallback? onBack;
  final VoidCallback onSkip;
  final Function(PersonalDetails, GoalProjection) onUpdate;
  final Function(int)? onSubStepChanged;

  const StepPersonalDetails({
    super.key,
    required this.data,
    required this.onNext,
    required this.onSkip,
    this.onBack,
    required this.onUpdate,
    this.onSubStepChanged,
  });

  @override
  State<StepPersonalDetails> createState() => _StepPersonalDetailsState();
}
// ... (Dart Logic for StepPersonalDetails) ...
`;

const BEHAVIOR_PROFILE_CODE = `import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:lottie/lottie.dart';
import '../../../models/onboarding_models.dart';
import '../../../theme/app_colors.dart';
import '../../../theme/semantic_colors.dart';
import '../../../theme/button_sizes.dart';

class StepBehaviorProfile extends StatefulWidget {
  final BehavioralAnswers answers;
  final VoidCallback onNext;
  // ...
}`;

// --- SHARED COMPONENTS ---

const PhoneShell = ({ children }: { children?: React.ReactNode }) => (
  <div className="w-[375px] h-[760px] bg-[#F9FAFB] rounded-[48px] shadow-2xl border-[12px] border-gray-950 overflow-hidden flex flex-col relative mx-auto shrink-0 transition-all select-none">
    {children}
  </div>
);

const StatusBar = () => (
  <div className="h-12 px-8 flex justify-between items-end pb-1 shrink-0 z-50 relative bg-white">
    <span className="font-bold text-[14px] text-gray-950">9:41</span>
    <div className="flex gap-2 items-center">
       <div className="w-5 h-2.5 rounded-[2px] border border-black/50 relative after:content-[''] after:absolute after:top-1/2 after:-right-1 after:-translate-y-1/2 after:w-0.5 after:h-1 after:bg-black/50" />
       <div className="w-4 h-4 flex items-center justify-center">
          <div className="w-full h-[2px] bg-black rotate-45 rounded-full" />
       </div>
    </div>
  </div>
);

const BottomHandle = () => (
  <div className="h-6 flex justify-center pt-2 shrink-0 z-50 relative bg-white">
     <div className="w-32 h-1 bg-black/10 rounded-full" />
  </div>
);

// --- HOME SIMULATION (Replicating user image precisely) ---

const HomeSimulation = () => {
  const [water, setWater] = useState(0);

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#F3F4F6]">
      <StatusBar />
      
      {/* App Header */}
      <div className="bg-white px-6 pb-6 pt-3 shadow-sm relative z-40 rounded-b-[32px]">
         <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#E5E7EB] border border-[#E5E7EB] flex items-center justify-center text-4xl shadow-sm overflow-hidden">
               <span role="img" aria-label="avatar">🐨</span>
            </div>
            <div className="flex-1">
               <h1 className="text-[22px] font-extrabold text-[#111827] leading-tight">Καλημέρα, Sol</h1>
               <p className="text-[14px] text-gray-400 font-bold mt-0.5">Συνέχισε να μαθαίνεις!</p>
            </div>
         </div>
         {/* Debug Banner Simulation */}
         <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 pointer-events-none">
            <div className="absolute top-6 -right-8 w-32 bg-[#D97706] text-white text-[10px] font-extrabold py-1.5 text-center rotate-45 uppercase tracking-widest shadow-md">
               DEBUG
            </div>
         </div>
      </div>

      {/* Main Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-5 pt-5 pb-24 space-y-5">
         
         {/* Main Progress Dashboard Card */}
         <div className="bg-white p-6 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-6">
            
            {/* Meal Progress Row */}
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-5">
                  <div className="w-24 h-24 rounded-full border-[8px] border-[#E5E7EB] flex items-center justify-center relative bg-white">
                     <span className="text-[24px] font-extrabold text-[#111827]">0%</span>
                  </div>
                  <div>
                     <h3 className="text-[19px] font-extrabold text-[#111827]">0/5 γεύματα</h3>
                     <p className="text-[15px] text-[#15803D] font-bold mt-1">Ξεκίνα καταγράφοντας!</p>
                  </div>
               </div>
               <button className="bg-[#15803D] text-white px-5 py-3 rounded-[24px] font-extrabold text-[16px] flex items-center gap-2 active:scale-95 transition-transform shadow-lg shadow-green-900/10 whitespace-nowrap">
                  <Plus size={20} strokeWidth={3} /> Προσθήκη
               </button>
            </div>

            {/* Macro Statistics Summary Bar */}
            <div className="flex justify-between items-center px-6 py-4 bg-[#F9FAFB] rounded-2xl border border-gray-50">
               <div className="text-center">
                  <div className="text-[11px] font-bold text-gray-400 mb-1 tracking-wide uppercase">Σύνολο</div>
                  <div className="text-[17px] font-extrabold text-[#111827]">0 <span className="text-[11px] font-bold text-gray-400">kcal</span></div>
               </div>
               <div className="w-[1.5px] h-10 bg-gray-200 opacity-50" />
               <div className="text-center">
                  <div className="text-[11px] font-bold text-[#0D9488] mb-1 tracking-wide uppercase">Π</div>
                  <div className="text-[17px] font-extrabold text-[#0D9488]">0 <span className="text-[11px] font-bold text-[#0D9488]/60">g</span></div>
               </div>
               <div className="w-[1.5px] h-10 bg-gray-200 opacity-50" />
               <div className="text-center">
                  <div className="text-[11px] font-bold text-[#CA8A04] mb-1 tracking-wide uppercase">Υ</div>
                  <div className="text-[17px] font-extrabold text-[#CA8A04]">0 <span className="text-[11px] font-bold text-[#CA8A04]/60">g</span></div>
               </div>
               <div className="w-[1.5px] h-10 bg-gray-200 opacity-50" />
               <div className="text-center">
                  <div className="text-[11px] font-bold text-[#E11D48] mb-1 tracking-wide uppercase">Λ</div>
                  <div className="text-[17px] font-extrabold text-[#E11D48]">0 <span className="text-[11px] font-bold text-[#E11D48]/60">g</span></div>
               </div>
            </div>

            {/* Water Tracking Row */}
            <div className="bg-[#CCFBF1]/30 rounded-2xl p-4 border border-[#0D9488]/10 flex items-center gap-5">
               <div className="w-16 h-16 rounded-full bg-white border-[4px] border-[#E5E7EB] flex items-center justify-center shadow-sm">
                  <Droplets size={24} className="text-[#0D9488] fill-[#0D9488]" />
               </div>
               <div className="flex-1">
                  <div className="text-[18px] font-extrabold text-[#111827]">{water}/15 ποτήρια</div>
                  <div className="text-[14px] text-gray-400 font-bold">Νερό σήμερα</div>
               </div>
               <div className="flex gap-2">
                  <button onClick={() => setWater(w => Math.min(15, w+1))} className="bg-[#0D9488] text-white w-12 h-12 rounded-2xl flex items-center justify-center text-[18px] font-extrabold active:scale-90 transition-transform shadow-md shadow-teal-900/10">+1</button>
                  <button onClick={() => setWater(w => Math.min(15, w+2))} className="bg-[#0D9488]/10 text-[#0D9488] w-12 h-12 rounded-2xl flex items-center justify-center text-[18px] font-extrabold active:scale-90 transition-transform">+2</button>
               </div>
            </div>

            {/* Streak & Daily Goal Tracker */}
            <div className="pt-4 border-t border-gray-100 flex flex-col gap-4">
               <div className="bg-[#FEF9C3]/50 p-5 rounded-[28px] border border-[#FEF08A] flex items-center gap-4 relative overflow-hidden">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                     <div className="w-9 h-9 rounded-full bg-[#FEF9C3] flex items-center justify-center">
                        <Star size={20} className="text-[#EAB308] fill-[#EAB308]" />
                     </div>
                  </div>
                  <div className="flex-1">
                     <div className="text-[18px] font-extrabold text-[#111827]">Στόχος σήμερα</div>
                     <div className="text-[14px] text-gray-500 font-bold">0/3 γεύματα</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-full border border-[#FEF08A] flex items-center gap-2 shadow-sm">
                     <Flame size={20} className="text-[#D97706] fill-[#D97706]" />
                     <span className="font-extrabold text-[#111827] text-[18px]">0</span>
                  </div>
               </div>
               <p className="text-[14px] text-gray-500 font-bold leading-relaxed px-1">
                 Κατέγραψε 3 γεύματα για να κλειδώσεις τη μέρα ως τέλεια και να αυξήσεις το σερί σου.
               </p>
            </div>
         </div>

         {/* Contextual Suggestion Card (Breakfast) */}
         <div className="bg-white p-5 rounded-[28px] shadow-sm flex items-center gap-5 active:bg-gray-50 transition-colors cursor-pointer border border-gray-100">
            <div className="w-14 h-14 bg-[#FEF9C3]/60 rounded-2xl flex items-center justify-center">
               <Sun size={28} className="text-[#EAB308] fill-[#EAB308]" />
            </div>
            <div className="flex-1">
               <h3 className="text-[18px] font-extrabold text-[#111827]">Ιδέες για πρωινό</h3>
               <p className="text-[14px] text-gray-400 font-bold">Υγιεινές και ενεργητικές επιλογές</p>
            </div>
            <div className="w-10 h-10 bg-[#F9FAFB] rounded-full flex items-center justify-center">
               <ChevronIcon size={20} className="text-[#EAB308]" strokeWidth={3} />
            </div>
         </div>

         {/* Psychology & Affirmation Card */}
         <div className="bg-[#FEE2E2]/70 p-6 rounded-[32px] border border-[#FECACA] relative shadow-sm">
            <div className="flex justify-between items-start mb-5">
               <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Heart size={24} className="text-[#F43F5E] fill-[#F43F5E]" />
               </div>
               <span className="text-[13px] font-extrabold text-[#F43F5E] uppercase tracking-wider">Ψυχολογία</span>
            </div>
            <h3 className="text-[22px] font-extrabold text-[#111827] mb-3 leading-tight">Σημερινή επιβεβαίωση</h3>
            <p className="text-[17px] text-[#111827] font-bold leading-relaxed opacity-90">
              Σήμερα θα επιλέξω τουλάχιστον ένα γεύμα που θα με κάνει να νιώσω δυνατή.
            </p>
         </div>

      </div>

      {/* App Bottom Tab Navigation */}
      <div className="h-[80px] bg-white border-t border-gray-100 flex items-center justify-around px-4 pb-2 relative z-50 rounded-t-[32px] shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
         <div className="flex flex-col items-center gap-1.5 text-[#15803D]">
            <Home size={26} fill="currentColor" strokeWidth={2.5} />
            <span className="text-[11px] font-extrabold uppercase">Αρχική</span>
         </div>
         <div className="flex flex-col items-center gap-1.5 text-gray-400">
            <BookOpen size={26} strokeWidth={2.5} />
            <span className="text-[11px] font-bold uppercase">Εκμάθηση</span>
         </div>
         <div className="flex flex-col items-center gap-1.5 text-gray-400">
            <Utensils size={26} strokeWidth={2.5} />
            <span className="text-[11px] font-bold uppercase">Διατροφή</span>
         </div>
         <div className="flex flex-col items-center gap-1.5 text-gray-400">
            <BarChart3 size={26} strokeWidth={2.5} />
            <span className="text-[11px] font-bold uppercase">Πρόοδος</span>
         </div>
      </div>

      <BottomHandle />
    </div>
  );
};

// --- PERSONAL DETAILS SIMULATION ---

const PandaAvatarSim = ({ emoji = '🐼', size = 'text-6xl' }: { emoji?: string, size?: string }) => (
  <div className="w-40 h-40 mx-auto relative mb-6 shrink-0">
    <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center shadow-inner border border-gray-100">
        <span className={`${size} grayscale opacity-80`}>🐼</span>
    </div>
    <div className="absolute top-1 right-2 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl border border-gray-50">
        {emoji}
    </div>
  </div>
);

const PersonalDetailsSimulation = () => {
  const [subStep, setSubStep] = useState(0);
  const [formData, setFormData] = useState({
    age: '28',
    gender: 'female',
    activity: 'sedentary',
    currentWeight: '75',
    height: '165',
    targetWeight: '60'
  });

  const totalSubSteps = 7; // 0..6

  const handleNext = () => {
    if (subStep < totalSubSteps - 1) setSubStep(s => s + 1);
  };

  const handleBack = () => {
    if (subStep > 0) setSubStep(s => s - 1);
  };

  const graphData = useMemo(() => {
    const current = parseFloat(formData.currentWeight) || 75;
    const target = parseFloat(formData.targetWeight) || 60;
    const diff = current - target;
    const months = Math.max(6, Math.ceil(Math.abs(diff) / 2)); 
    
    const data = [];
    for (let m = 0; m <= months; m++) {
      const progress = m / months;
      const p = 1 - Math.pow(1 - progress, 2); 
      const sustainable = current - (diff * p);
      let restrictive;
      if (m <= 2) {
         restrictive = current - (diff * 1.2 * (m/2));
      } else {
         const regainProgress = (m - 2) / (months - 2);
         restrictive = (current - diff * 1.2) + (diff * 0.5 * regainProgress); 
      }
      data.push({ name: `M${m}`, sustainable, restrictive });
    }
    return data;
  }, [formData.currentWeight, formData.targetWeight]);

  const renderContent = () => {
    switch (subStep) {
      case 0: return (
          <div className="flex flex-col items-center justify-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="🎂" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Πόσο χρονών είσαι;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Για να υπολογίσουμε σωστά τον μεταβολισμό σου.</p>
            <div className="bg-[#DCFCE7]/60 border-[3px] border-[#15803D] rounded-[24px] px-10 py-8 flex items-center gap-3 shadow-sm">
              <input type="number" value={formData.age} onChange={(e) => setFormData({...formData, age: e.target.value})} className="w-20 bg-transparent text-4xl font-extrabold text-[#15803D] text-center focus:outline-none" />
              <span className="text-xl text-[#15803D] font-extrabold opacity-60">ετών</span>
            </div>
          </div>
        );
      case 1: return (
          <div className="flex flex-col items-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="⚧️" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Ποιο είναι το φύλο σου;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Για τον υπολογισμό των θερμιδικών αναγκών.</p>
            <div className="w-full space-y-4">
              {['female', 'male', 'other'].map(g => (
                <button key={g} onClick={() => setFormData({...formData, gender: g})} className={`w-full p-5 rounded-[24px] border-[3px] text-left flex items-center justify-between transition-all ${formData.gender === g ? 'bg-[#DCFCE7] border-[#15803D]' : 'bg-white border-gray-200'}`}>
                  <span className="font-extrabold text-[18px] text-[#111827] capitalize">{g === 'female' ? 'Γυναίκα' : g === 'male' ? 'Άντρας' : 'Άλλο'}</span>
                  {formData.gender === g ? <CheckCircle2 className="text-[#15803D]" strokeWidth={3} /> : <div className="w-7 h-7 rounded-full border-[3px] border-gray-100"/>}
                </button>
              ))}
            </div>
          </div>
        );
      case 2: return (
          <div className="flex flex-col items-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="🏃" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Πόσο δραστήριος είσαι;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Επίλεξε αυτό που ταιριάζει περισσότερο.</p>
            <div className="w-full space-y-4 overflow-y-auto pb-4 custom-scrollbar">
              {[{ id: 'sedentary', label: 'Καθιστική ζωή', sub: 'Λίγη ή καθόλου άσκηση' }, { id: 'light', label: 'Ελαφριά', sub: '1–2 φορές/εβδομάδα' }, { id: 'moderate', label: 'Μέτρια', sub: '3–4 φορές/εβδομάδα' }, { id: 'high', label: 'Υψηλή', sub: '5+ φορές/εβδομάδα' }].map(opt => (
                <button key={opt.id} onClick={() => setFormData({...formData, activity: opt.id})} className={`w-full p-5 rounded-[24px] border-[3px] text-left flex items-center justify-between transition-all ${formData.activity === opt.id ? 'bg-[#DCFCE7] border-[#15803D]' : 'bg-white border-gray-200'}`}>
                  <div>
                    <div className="font-extrabold text-[17px] text-[#111827]">{opt.label}</div>
                    <div className="text-[13px] text-gray-500 font-bold mt-1">{opt.sub}</div>
                  </div>
                  {formData.activity === opt.id ? <CheckCircle2 className="text-[#15803D]" strokeWidth={3} /> : <div className="w-7 h-7 rounded-full border-[3px] border-gray-100"/>}
                </button>
              ))}
            </div>
          </div>
        );
      case 3: return (
          <div className="flex flex-col items-center justify-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="⚖️" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Τρέχον βάρος;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Θα το χρησιμοποιήσουμε ως αφετηρία.</p>
            <div className="bg-[#DCFCE7]/60 border-[3px] border-[#15803D] rounded-[24px] px-10 py-8 flex items-center gap-3 shadow-sm">
              <input type="number" value={formData.currentWeight} onChange={(e) => setFormData({...formData, currentWeight: e.target.value})} className="w-24 bg-transparent text-5xl font-extrabold text-[#15803D] text-center focus:outline-none" />
              <span className="text-2xl text-[#15803D] font-extrabold opacity-60">kg</span>
            </div>
          </div>
        );
      case 4: return (
          <div className="flex flex-col items-center justify-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="📏" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Ποιο είναι το ύψος σου;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Για τον υπολογισμό του ΔΜΣ.</p>
            <div className="bg-[#DCFCE7]/60 border-[3px] border-[#15803D] rounded-[24px] px-10 py-8 flex items-center gap-3 shadow-sm">
              <input type="number" value={formData.height} onChange={(e) => setFormData({...formData, height: e.target.value})} className="w-24 bg-transparent text-5xl font-extrabold text-[#15803D] text-center focus:outline-none" />
              <span className="text-2xl text-[#15803D] font-extrabold opacity-60">cm</span>
            </div>
          </div>
        );
      case 5: return (
          <div className="flex flex-col items-center justify-center h-full p-8 animate-in fade-in slide-in-from-right duration-300">
            <PandaAvatarSim emoji="🎯" />
            <h2 className="text-2xl font-extrabold text-center text-[#111827] mb-3">Επιθυμητό βάρος;</h2>
            <p className="text-center text-gray-500 font-bold mb-8">Πού θέλεις να φτάσεις;</p>
            <div className="bg-[#DCFCE7]/60 border-[3px] border-[#15803D] rounded-[24px] px-10 py-8 flex items-center gap-3 shadow-sm">
              <input type="number" value={formData.targetWeight} onChange={(e) => setFormData({...formData, targetWeight: e.target.value})} className="w-24 bg-transparent text-5xl font-extrabold text-[#15803D] text-center focus:outline-none" />
              <span className="text-2xl text-[#15803D] font-extrabold opacity-60">kg</span>
            </div>
          </div>
        );
      case 6: return (
          <div className="flex flex-col h-full p-8 animate-in fade-in slide-in-from-right duration-300">
             <div className="text-center mb-8 pt-4">
                <h2 className="text-[26px] font-extrabold text-[#111827] leading-tight">Η πορεία του βάρους σου</h2>
                <p className="text-[15px] text-gray-500 font-bold mt-2">Μακροπρόθεσμη αλλαγή vs Γρήγορη δίαιτα</p>
             </div>
             <div className="h-56 w-full mb-8">
               <ResponsiveContainer width="100%" height="100%">
                 <ComposedChart data={graphData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                   <CartesianGrid strokeDasharray="3 3" stroke={HEX.MIST_GREY} vertical={false} />
                   <XAxis dataKey="name" stroke={HEX.MUTED_GREY} tick={false} axisLine={false} tickLine={false} />
                   <YAxis stroke={HEX.MUTED_GREY} tick={false} axisLine={false} tickLine={false} domain={['dataMin - 5', 'dataMax + 5']} />
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
                   <Area type="monotone" dataKey="restrictive" stroke={HEX.PANDA_BLUSH} fillOpacity={1} fill="url(#colorRestrictive)" strokeWidth={3} strokeDasharray="6 6" animationDuration={1500} />
                   <Area type="monotone" dataKey="sustainable" stroke={HEX.BAMBOO_GREEN} fillOpacity={1} fill="url(#colorSustainable)" strokeWidth={4} animationDuration={1500} />
                 </ComposedChart>
               </ResponsiveContainer>
             </div>
             <div className="flex justify-center gap-8 mb-10">
                <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#15803D]" /><span className="text-[15px] font-extrabold text-[#111827]">Panda Habits</span></div>
                <div className="flex items-center gap-3"><div className="w-4 h-4 rounded-full bg-[#FB7185]" /><span className="text-[15px] font-extrabold text-[#111827]">Αυστηρή δίαιτα</span></div>
             </div>
             <div className="bg-[#DCFCE7] p-5 rounded-[28px] text-center text-[#15803D] text-[15px] font-bold leading-relaxed shadow-sm">
               Με το Panda Habits, χάνεις βάρος σταθερά και το διατηρείς, χωρίς να στερείσαι τις αγαπημένες σου γεύσεις.
             </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <PhoneShell>
      <div className="flex flex-col h-full bg-white">
        <StatusBar />
        <div className="bg-white pb-3 border-b border-gray-100 shrink-0">
            <div className="h-14 flex items-center relative px-6">
               {subStep > 0 && (
                 <button onClick={handleBack} className="absolute left-4 p-2.5 rounded-full hover:bg-gray-100 transition-colors">
                   <ArrowLeft size={28} className="text-[#111827]" strokeWidth={2.5} />
                 </button>
               )}
               <div className="w-full text-center">
                  <div className="text-[12px] text-gray-500 font-extrabold uppercase tracking-widest">ΠΡΟΣΩΠΙΚΑ ΣΤΟΙΧΕΙΑ</div>
                  <div className="flex justify-center gap-2 mt-2">
                    {Array.from({length: totalSubSteps}).map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === subStep ? 'bg-[#15803D] scale-125' : 'bg-gray-200'}`} />
                    ))}
                  </div>
               </div>
            </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
          {renderContent()}
        </div>

        <div className="p-8 bg-white border-t border-gray-100 space-y-4">
          <button onClick={handleNext} className="w-full h-16 rounded-[24px] text-white font-extrabold text-[18px] shadow-xl shadow-green-900/10 active:scale-[0.97] transition-all bg-[#15803D] flex items-center justify-center">
             {subStep === totalSubSteps - 1 ? 'Ολοκλήρωση' : 'Επόμενο'}
          </button>
          {subStep < totalSubSteps - 1 && (
             <button onClick={() => alert("Skipped")} className="w-full py-2 text-[#15803D] font-extrabold text-[15px] opacity-70 hover:opacity-100 transition-opacity">
               Παράβλεψη
             </button>
          )}
        </div>
        <BottomHandle />
      </div>
    </PhoneShell>
  );
};

// --- BEHAVIOR PROFILE SIMULATION ---

const BEHAVIOR_QUESTIONS = [
  'Όταν ξεκινάς προσπάθεια για απώλεια βάρους, πόσο συχνά βάζεις πολύ αυστηρούς κανόνες;',
  'Πόσο συχνά τρως όταν είσαι αγχωμένος/η, στεναχωρημένος/η ή βαριέσαι;',
  'Πόσο σε βοηθάει όταν κάποιος σου λέει ξεκάθαρα «τι να κάνεις» βήμα–βήμα;',
  'Όταν δεν βλέπεις γρήγορα αποτελέσματα, πόσο συχνά θέλεις να τα παρατήσεις;',
  'Πόσο εύκολα σταματάς να παρατηρήσεις τι νιώθεις γύρω από το φαγητό;',
];

const BEHAVIOR_SCALE = [
  'Καθόλου',
  'Σπάνια',
  'Μερικές φορές',
  'Συχνά',
  'Πάρα πολύ συχνά',
];

const BehaviorProfileSimulation = () => {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const calculateProfile = () => {
     return {
       title: 'Τελειομανές Panda',
       emoji: '⚖️',
       description: 'Τείνεις να βάζεις πολύ αυστηρούς κανόνες και όταν δεν τους ακολουθείς, νιώθεις ότι απέτυχες. Η ευελιξία είναι το κλειδί για εσένα.',
       nextSteps: 'Η εφαρμογή θα σε βοηθήσει να βλέπεις την πρόοδο σε μικρά βήματα και να αποδέχεσαι τις "ατέλειες".',
       category: 'Behavior Profile ID: all_or_nothing'
     };
  };

  const handleAnswer = (val: number) => {
    const newAnswers = { ...answers, [qIndex]: val };
    setAnswers(newAnswers);
    setTimeout(() => {
      if (qIndex < BEHAVIOR_QUESTIONS.length - 1) {
        setQIndex(qIndex + 1);
      }
    }, 300);
  };

  const handleNext = () => {
    if (Object.keys(answers).length < BEHAVIOR_QUESTIONS.length) {
       alert("Please answer all questions");
       return;
    }
    setShowResults(true);
  };

  const profile = calculateProfile();

  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
      return;
    }
    if (qIndex > 0) {
      setQIndex(qIndex - 1);
    }
  };

  return (
    <PhoneShell>
      <div className="flex flex-col h-full bg-white">
        <StatusBar />
        <div className="bg-white pb-3 border-b border-gray-100 shrink-0">
            <div className="h-14 flex items-center relative px-6">
               {(!showResults && qIndex > 0) && (
                 <button onClick={handleBack} className="absolute left-4 p-2.5 rounded-full hover:bg-gray-100 transition-colors">
                   <ArrowLeft size={28} className="text-[#111827]" strokeWidth={2.5} />
                 </button>
               )}
               <div className="w-full text-center">
                  <div className="text-[12px] text-gray-500 font-extrabold uppercase tracking-widest">
                    {showResults ? 'ΑΠΟΤΕΛΕΣΜΑΤΑ' : 'ΒΗΜΑ 2'}
                  </div>
                  <div className="text-[16px] font-extrabold text-[#111827] mt-0.5">
                    {showResults ? 'Το Προφίλ Σου' : 'Συμπεριφορικό Προφίλ'}
                  </div>
               </div>
            </div>
            {!showResults && (
               <div className="px-10 mt-3 mb-1">
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                     <div 
                       className="h-full bg-[#0D9488] transition-all duration-300 ease-out"
                       style={{ width: `${((qIndex + 1) / BEHAVIOR_QUESTIONS.length) * 100}%` }}
                     />
                  </div>
               </div>
            )}
         </div>

         <div className="flex-1 overflow-y-auto bg-white custom-scrollbar">
            {!showResults ? (
              <div className="p-8 pb-24 animate-in fade-in duration-300">
                <div className="mb-10">
                   <p className="text-[20px] font-extrabold text-[#111827] leading-tight">{BEHAVIOR_QUESTIONS[qIndex]}</p>
                </div>

                <div className="space-y-4">
                   {BEHAVIOR_SCALE.map((label, idx) => {
                      const val = idx + 1;
                      const isSelected = answers[qIndex] === val;
                      return (
                         <button
                            key={val}
                            onClick={() => handleAnswer(val)}
                            className={`w-full p-5 rounded-[24px] border-[3px] text-left transition-all flex items-center justify-between group active:scale-[0.98] ${
                               isSelected 
                                 ? 'bg-[#DCFCE7] border-[#15803D]' 
                                 : 'bg-white border-[#E5E7EB] hover:border-[#15803D]/30'
                            }`}
                         >
                            <span className={`font-extrabold text-[18px] ${isSelected ? 'text-[#15803D]' : 'text-[#111827]'}`}>{label}</span>
                            {isSelected ? (
                               <CheckCircle2 size={24} className="text-[#15803D]" strokeWidth={3} />
                            ) : (
                               <div className="w-7 h-7 rounded-full border-[3px] border-[#E5E7EB] group-hover:border-[#15803D]/30" />
                            )}
                         </button>
                      );
                   })}
                </div>

                <div className="mt-12">
                   <button 
                      onClick={qIndex === BEHAVIOR_QUESTIONS.length - 1 ? handleNext : () => setQIndex(qIndex + 1)}
                      disabled={!answers[qIndex]}
                      className={`w-full h-16 rounded-[24px] font-extrabold text-[18px] shadow-xl active:scale-95 transition-all ${
                         answers[qIndex] 
                            ? 'bg-[#15803D] text-white' 
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                   >
                      {qIndex === BEHAVIOR_QUESTIONS.length - 1 ? 'Δες το προφίλ μου' : 'Επόμενη ερώτηση'}
                   </button>
                </div>
              </div>
            ) : (
              <div className="p-8 animate-in slide-in-from-bottom duration-500">
                 <div className="w-48 h-48 mx-auto relative mb-10">
                    <div className="w-full h-full bg-gray-50 rounded-full flex items-center justify-center text-8xl shadow-inner border border-gray-100">
                       🐼
                    </div>
                    <div className="absolute top-2 right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl border border-gray-50">
                       ⚖️
                    </div>
                 </div>
                 
                 <div className="text-center mb-10">
                    <div className="text-[12px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">ΤΟ ΠΡΟΦΙΛ ΣΥΜΠΕΡΙΦΟΡΑΣ ΣΟΥ</div>
                    <h2 className="text-[32px] font-extrabold text-[#111827] leading-tight">{profile.title}</h2>
                 </div>

                 <div className="space-y-5 mb-10">
                    <div className="bg-[#CCFBF1]/50 p-6 rounded-[32px] border border-[#0D9488]/20">
                       <div className="flex items-center gap-3 mb-3">
                          <Brain size={22} className="text-[#0D9488]" />
                          <span className="text-[13px] font-extrabold text-[#0D9488] uppercase tracking-widest">ΣΥΜΠΕΡΙΦΟΡΑ</span>
                       </div>
                       <p className="text-[17px] text-[#111827] font-bold leading-relaxed">{profile.description}</p>
                    </div>

                     <div className="bg-[#DCFCE7]/50 p-6 rounded-[32px] border border-[#15803D]/20">
                       <div className="flex items-center gap-3 mb-3">
                          <TrendingUp size={22} className="text-[#15803D]" />
                          <span className="text-[13px] font-extrabold text-[#15803D] uppercase tracking-widest">ΠΡΟΟΔΟΣ</span>
                       </div>
                       <p className="text-[17px] text-[#111827] font-bold leading-relaxed">{profile.nextSteps}</p>
                    </div>
                 </div>

                 <button className="w-full h-16 rounded-[24px] text-white font-extrabold text-[18px] shadow-xl active:scale-95 transition-all bg-[#15803D]">
                    Συνέχεια
                 </button>
              </div>
            )}
         </div>

        <BottomHandle />
      </div>
    </PhoneShell>
  );
};

// --- VIEW COMPONENT ---

export const TemplatesView: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('home');
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const getCode = () => {
     switch(selectedTemplate) {
        case 'home': return HOME_SCREEN_CODE;
        case 'personal-details': return PERSONAL_DETAILS_CODE;
        case 'behavior-profile': return BEHAVIOR_PROFILE_CODE;
        default: return '';
     }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[85vh] h-auto gap-8">
       {/* Sidebar */}
       <div className="w-full lg:w-64 shrink-0 flex flex-col gap-2 border-r border-gray-100 pr-4">
          <h3 className="font-bold text-gray-400 text-xs uppercase tracking-wider mb-2 px-2">Flows</h3>
          
          <button 
            onClick={() => setSelectedTemplate('home')}
            className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between w-full ${
               selectedTemplate === 'home' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
             Home Dashboard
             {selectedTemplate === 'home' && <ChevronRight size={14} className="opacity-50" />}
          </button>

          <button 
            onClick={() => setSelectedTemplate('personal-details')}
            className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between w-full ${
               selectedTemplate === 'personal-details' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
             Personal Details
             {selectedTemplate === 'personal-details' && <ChevronRight size={14} className="opacity-50" />}
          </button>

          <button 
            onClick={() => setSelectedTemplate('behavior-profile')}
            className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between w-full ${
               selectedTemplate === 'behavior-profile' ? 'bg-gray-900 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
             Behavior Profile
             {selectedTemplate === 'behavior-profile' && <ChevronRight size={14} className="opacity-50" />}
          </button>
       </div>

       {/* Main Area */}
       <div className="flex-1 flex flex-col min-h-[700px]">
          <div className="flex items-center justify-between mb-6">
             <div>
                <h2 className="text-2xl font-bold text-[#111827]">
                  {selectedTemplate === 'home' && 'Home Dashboard'}
                  {selectedTemplate === 'personal-details' && 'Personal Details Step'}
                  {selectedTemplate === 'behavior-profile' && 'Behavior Profile Step'}
                </h2>
                <p className="text-gray-500">
                  {selectedTemplate === 'home' && 'Main user dashboard as seen in the app dashboard.'}
                  {selectedTemplate === 'personal-details' && 'Data collection with sub-steps and projection graph.'}
                  {selectedTemplate === 'behavior-profile' && 'Questionnaire to determine psychological profile.'}
                </p>
             </div>
             
             {/* Toggle */}
             <div className="bg-gray-100 p-1 rounded-lg flex">
                <button 
                  onClick={() => setViewMode('preview')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'preview' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                   <Smartphone size={16} /> Preview
                </button>
                <button 
                  onClick={() => setViewMode('code')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${viewMode === 'code' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                >
                   <Code2 size={16} /> Code
                </button>
             </div>
          </div>

          <div className="flex-1 bg-[#F3F4F6] rounded-[32px] border border-gray-200 overflow-hidden relative min-h-[800px]">
             {viewMode === 'preview' ? (
                <div className="absolute inset-0 flex items-center justify-center p-8 overflow-y-auto bg-dots">
                   <style>{`
                      .bg-dots {
                         background-image: radial-gradient(#d1d5db 1px, transparent 1px);
                         background-size: 24px 24px;
                      }
                   `}</style>
                   <div className="py-12">
                      {selectedTemplate === 'home' && <HomeSimulation />}
                      {selectedTemplate === 'personal-details' && <PersonalDetailsSimulation />}
                      {selectedTemplate === 'behavior-profile' && <BehaviorProfileSimulation />}
                   </div>
                </div>
             ) : (
                <div className="absolute inset-0 flex flex-col bg-[#0F172A]">
                   <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#1E293B]">
                     <div className="flex items-center gap-2">
                        <FileCode size={16} className="text-blue-400" />
                        <span className="text-sm text-gray-300 font-mono">
                           {selectedTemplate === 'home' ? 'lib/screens/home_screen.dart' : 
                            selectedTemplate === 'personal-details' ? 'lib/features/onboarding/steps/step_personal_details.dart' : 
                            'lib/features/onboarding/steps/step_behavior_profile.dart'}
                        </span>
                     </div>
                     <button 
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition active:scale-95"
                     >
                        {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                        {copied ? 'Copied' : 'Copy'}
                     </button>
                   </div>
                   <div className="flex-1 overflow-auto p-6 custom-scrollbar">
                      <pre className="text-[13px] font-mono text-blue-100 leading-relaxed tab-size-2">
                         {getCode()}
                      </pre>
                   </div>
                </div>
             )}
          </div>
       </div>
    </div>
  );
};