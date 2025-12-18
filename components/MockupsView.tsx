
import React, { useState } from 'react';
import { HEX } from '../constants';
import { 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Sparkles, 
  Target, 
  Brain, 
  CheckCircle2,
  Quote,
  Layout,
  Zap,
  Eye,
  Utensils,
  Clock,
  Edit3,
  Camera,
  Search,
  ChefHat,
  ListChecks,
  Heart,
  Star,
  TrendingUp,
  Map,
  BookOpen,
  MessageSquare,
  BarChart3,
  Settings
} from 'lucide-react';

interface MockupStep {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  pandaThought: string;
  insights: {
    title: string;
    description: string;
    icon: any;
  }[];
}

const MOCKUP_DATA: MockupStep[] = [
  {
    id: 'identity',
    title: 'Defining the Identity',
    subtitle: 'Onboarding - Personal Data',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/01.%20Onboarding.png',
    pandaThought: 'First, we need to know who we are helping. Age and biology are the foundations of a healthy metabolism.',
    insights: [
      {
        title: 'Minimalist Focus',
        description: 'Large, centered inputs reduce cognitive load during a potentially sensitive data entry step.',
        icon: Target
      },
      {
        title: 'Visual Encouragement',
        description: 'The "Panda Mascot" acts as a friendly companion, softening the clinical nature of data collection.',
        icon: Sparkles
      }
    ]
  },
  {
    id: 'expectations',
    title: 'Visualizing Reality',
    subtitle: 'Onboarding - Weight Projection',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/02.%20Wiegh%20Loss%20Profile.png',
    pandaThought: 'Honesty is key. We show the user that "fast diets" lead to rebounds, while Panda Habits lead to lasting change.',
    insights: [
      {
        title: 'Contrast for Clarity',
        description: 'Using Panda Blush (Red) for restrictive paths versus Bamboo Green for sustainable ones creates an immediate subconscious preference.',
        icon: Brain
      },
      {
        title: 'Emotional Reassurance',
        description: 'The green summary box at the bottom provides a "safe harbor" of text after viewing the data.',
        icon: CheckCircle2
      }
    ]
  },
  {
    id: 'insight',
    title: 'The Psychological Mirror',
    subtitle: 'Onboarding - Behavioral Profile',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/03.%20Behavior%20Profile.png',
    pandaThought: 'Understanding the "Why" behind eating is more important than the "What". Meet your inner Panda!',
    insights: [
      {
        title: 'Card-Based Hierarchy',
        description: 'Information is grouped into logical "Insight" and "Prediction" cards to prevent overwhelm.',
        icon: Quote
      },
      {
        title: 'Actionable Feedback',
        description: 'We don\'t just label the user; we provide a concrete path forward ("The app will help you...").',
        icon: Target
      }
    ]
  },
  {
    id: 'home',
    title: 'The Daily Hub',
    subtitle: 'Dashboard - Home Screen',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/04.%20Home%20Screen.png',
    pandaThought: 'Everything you need is right here. We track meals, water, and even your mood. One paw at a time!',
    insights: [
      {
        title: 'Gamified Progress',
        description: 'The circular progress indicator turns a chore into a visual game, rewarding completion.',
        icon: Zap
      },
      {
        title: 'Priority Layout',
        description: 'Most used actions (Add Meal, Water) are placed in the center "Zone of Action" for ergonomics.',
        icon: Layout
      }
    ]
  },
  {
    id: 'logging_methods',
    title: 'Seamless Entry',
    subtitle: 'Input Methods - Meal Logging',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/05.%20Meal%20Logging.png',
    pandaThought: 'Found a snack? Just show it to me! Barcode, photo, or search—logging shouldn\'t be a chore.',
    insights: [
      {
        title: 'Frictionless Choice',
        description: 'Offering multiple input methods (Scan, Voice, Type) caters to different user environments.',
        icon: Utensils
      },
      {
        title: 'Contextual Sheets',
        description: 'Bottom sheets allow users to log quickly without losing their place on the main dashboard.',
        icon: Eye
      }
    ]
  },
  {
    id: 'logging_feedback',
    title: 'Real-time Clarity',
    subtitle: 'AI Feedback - Nutritional Breakdown',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/7eeb75b877e59b118d1110a80b368e5efc80b4d6/0.5b.%20Meal%20Logging%20.png',
    pandaThought: 'Yum! That looks like a great choice. Look at those proteins go! Balanced eating makes a happy panda.',
    insights: [
      {
        title: 'Macro Education',
        description: 'Visualizing Protein, Carbs, and Fats helps users understand the quality of their food, not just quantity.',
        icon: Brain
      },
      {
        title: 'Instant Validation',
        description: 'Immediate color-coded feedback reinforces positive habits through dopamine-friendly visuals.',
        icon: Sparkles
      }
    ]
  },
  {
    id: 'food_diary',
    title: 'Review & Refine',
    subtitle: 'Food Diary - Management View',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/14.%20Food%20Dairy%20View.png',
    pandaThought: 'Every meal is a lesson. This view helps you see patterns over time and make quick adjustments if you missed a snack.',
    insights: [
      {
        title: 'Chronological Clarity',
        description: 'Meals are grouped by time and category to mirror the natural rhythm of the day.',
        icon: Clock
      },
      {
        title: 'In-line Editing',
        description: 'Quick tap interactions allow for immediate edits without deep navigation, reducing management fatigue.',
        icon: Edit3
      }
    ]
  },
  {
    id: 'recipe_assistant_input',
    title: 'What\'s in the Fridge?',
    subtitle: 'Recipe Assistant - Ingredient Logging',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/9b7457b75419c61a05ec1b2a08eda84281df689d/22.%20Revised%20recipe%20assistant%20mockup.png',
    pandaThought: 'Don\'t let those veggies go to waste! Tell me what you have, or just snap a photo, and I\'ll help you find a delicious use for them.',
    insights: [
      {
        title: 'Multimodal Input',
        description: 'Users can toggle between typing ingredients or using the camera for instant visual recognition.',
        icon: Camera
      },
      {
        title: 'Smart Filtering',
        description: 'Quick tags allow users to refine their search by required preparation time, difficulty level, and available kitchen equipment.',
        icon: Search
      }
    ]
  },
  {
    id: 'recipe_assistant_results',
    title: 'Culinary Inspiration',
    subtitle: 'Recipe Assistant - Recommendations',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/12.%20Recipe%20Assistant%20-%20Results.png',
    pandaThought: 'Look at all these options! I found recipes that match exactly what you have on hand. No grocery trip needed!',
    insights: [
      {
        title: 'Match Accuracy',
        description: 'Recipes are scored based on how many ingredients the user already has, prioritizing efficiency.',
        icon: ChefHat
      },
      {
        title: 'Visual Cards',
        description: 'High-quality food imagery combined with caloric data helps users choose based on both taste and goals.',
        icon: ListChecks
      }
    ]
  },
  {
    id: 'recipe_assistant_details',
    title: 'Chef Mode: On',
    subtitle: 'Recipe Assistant - Detailed View',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/fef8a9ee3f9bb879f79ac872c56b536d53303438/13.%20Recipe%20Assistan%20-%20Recipe%20Details.png',
    pandaThought: 'Time to cook! Follow these simple steps. Don\'t forget to enjoy the process—balanced cooking is mindful living.',
    insights: [
      {
        title: 'Focused Instructions',
        description: 'Steps are broken into bite-sized cards to avoid visual clutter while the user is actually cooking.',
        icon: Sparkles
      },
      {
        title: 'Direct Integration',
        description: 'One-tap "Log this Meal" button ensures the user\'s nutrition tracker stays accurate with zero effort.',
        icon: Heart
      }
    ]
  },
  {
    id: 'perfect_day',
    title: 'A Perfect Day',
    subtitle: 'Feedback - Goal Achievement',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/15.%20Perfect%20Day.png',
    pandaThought: 'You did it! Three healthy choices today. See that star? That\'s your habit growing stronger. Let\'s do it again tomorrow!',
    insights: [
      {
        title: 'Visual Reward',
        description: 'The star icon and gold accents provide a psychological "micro-win", reinforcing the positive behavior.',
        icon: Star
      },
      {
        title: 'Progress Momentum',
        description: 'Highlighting the streak and the next day\'s goal creates a "bridge" of motivation to keep the user coming back.',
        icon: TrendingUp
      }
    ]
  },
  {
    id: 'lesson_roadmap',
    title: 'The Path of Wisdom',
    subtitle: 'Education - Learning Roadmap',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/0.7%20Lesson%20Roadmap.png',
    pandaThought: 'Look at how far you\'ve come! Each lesson is a bamboo shoot of knowledge. Keep climbing!',
    insights: [
      {
        title: 'Visual Journey',
        description: 'The map-like progress path turns educational content into a gamified adventure.',
        icon: Map
      },
      {
        title: 'Milestone Rewards',
        description: 'Visual markers for completed lessons create a tangible sense of growth and accomplishment.',
        icon: Zap
      }
    ]
  },
  {
    id: 'lesson_content',
    title: 'Knowledge Bites',
    subtitle: 'Education - Daily Lesson',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/16.%20Lesson%20-%20Content.png',
    pandaThought: 'Take a second to digest this. Understanding the science makes the habit stick!',
    insights: [
      {
        title: 'Information Hierarchy',
        description: 'Lessons are broken into small, digestible chunks to prevent cognitive fatigue during learning.',
        icon: Layout
      },
      {
        title: 'Engaging Imagery',
        description: 'Rich visuals and metaphors are used to illustrate complex psychological and nutritional concepts.',
        icon: Eye
      }
    ]
  },
  {
    id: 'lesson_summary',
    title: 'The Takeaway',
    subtitle: 'Education - Key Insights',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/17.%20Lesson%20-%20Summary.png',
    pandaThought: 'The most important part! Remember these key points today—they are your secret weapons.',
    insights: [
      {
        title: 'Condensed Wisdom',
        description: 'Summarizing content into actionable points ensures users walk away with a clear plan.',
        icon: ListChecks
      },
      {
        title: 'Memory Reinforcement',
        description: 'A dedicated summary screen helps the brain encode the most critical information from the lesson.',
        icon: Brain
      }
    ]
  },
  {
    id: 'lesson_quiz_multi',
    title: 'Test Your Knowledge',
    subtitle: 'Interactive - Multiple Choice',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/18.%20Lesson%20-%20Multi%20Select%20questionaire.png',
    pandaThought: 'Which one do you think is right? No pressure, it\'s all part of the learning process!',
    insights: [
      {
        title: 'Active Recall',
        description: 'Quizzes force the user to think critically, moving information from short-term to long-term memory.',
        icon: Zap
      },
      {
        title: 'Interactive Choices',
        description: 'Large, accessible selection cards make participation feel rewarding and physically easy.',
        icon: Target
      }
    ]
  },
  {
    id: 'lesson_quiz_binary',
    title: 'Fact or Fiction?',
    subtitle: 'Interactive - True/False',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/19.%20Lesson%20-%20True%20False%20question.png',
    pandaThought: 'Is it true, or is it just a myth? Let\'s bust some common misconceptions together!',
    insights: [
      {
        title: 'Rapid Validation',
        description: 'Simplified binary choices allow for quick gut-checks on newly learned facts.',
        icon: Sparkles
      },
      {
        title: 'Immediate Correction',
        description: 'Instant feedback on answers helps users self-correct and learn from mistakes on the fly.',
        icon: CheckCircle2
      }
    ]
  },
  {
    id: 'lesson_quiz_open',
    title: 'Inner Reflection',
    subtitle: 'Interactive - Open Ended',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/20.%20Lesson%20-%20Open%20end%20question.png',
    pandaThought: 'How do you feel about this? Writing it down helps your brain commit to the positive change.',
    insights: [
      {
        title: 'Personal Journaling',
        description: 'Asking users to apply concepts to their own life creates a deeper emotional bond with the content.',
        icon: Edit3
      },
      {
        title: 'Mindful Processing',
        description: 'The act of typing a reflection ensures the user is fully present and engaged with the lesson.',
        icon: Heart
      }
    ]
  },
  {
    id: 'progress_view',
    title: 'Your Journey in Data',
    subtitle: 'Dashboard - Progress & Insights',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/09.%20Progress%20View.png',
    pandaThought: 'Look at those trends! My AI eyes can see patterns you might miss. Together, we\'ll keep you on the right track!',
    insights: [
      {
        title: 'Trend Analysis',
        description: 'Interactive charts provide a visual mirror of the user\'s dedication over weeks and months.',
        icon: BarChart3
      },
      {
        title: 'AI Synthesis',
        description: 'The app transforms raw logging data into personalized advice, acting as a virtual health coach.',
        icon: Brain
      }
    ]
  },
  {
    id: 'user_profile',
    title: 'The Command Center',
    subtitle: 'User Profile - Settings & Stats',
    image: 'https://raw.githubusercontent.com/Solakas/Image-uploader/4864ac0b45e1b910d8c2d5247e4fce6ef2480429/21.%20User%20Profile.png',
    pandaThought: 'Need to reset your target or check your total accomplishments? This is your home base. Keep it updated!',
    insights: [
      {
        title: 'Identity Hub',
        description: 'A unified view for managing health metrics, notification settings, and long-term milestones.',
        icon: Settings
      },
      {
        title: 'Lifetime Stats',
        description: 'Displaying cumulative wins (Lessons, Perfect Days) shifts focus from weight to behavior change.',
        icon: Star
      }
    ]
  }
];

export const MockupsView: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const step = MOCKUP_DATA[currentStep];

  const next = () => setCurrentStep((s) => Math.min(MOCKUP_DATA.length - 1, s + 1));
  const prev = () => setCurrentStep((s) => Math.max(0, s - 1));

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-start">
      
      {/* Narrative & Controls */}
      <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-1">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-green-600 font-bold text-sm tracking-widest uppercase">
            <span className="w-8 h-[2px] bg-green-600"></span>
            Step {currentStep + 1} of {MOCKUP_DATA.length}
          </div>
          <h2 className="text-4xl font-extrabold text-[#111827] leading-tight">
            {step.title}
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            {step.subtitle}
          </p>
        </div>

        {/* Panda Quote Card */}
        <div className="relative bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-200/50 group transition-all">
          <div className="absolute -top-6 -left-2 bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-gray-50 group-hover:scale-110 transition-transform">
             🐼
          </div>
          <p className="text-lg italic text-gray-700 leading-relaxed font-medium">
            "{step.pandaThought}"
          </p>
        </div>

        {/* Design Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {step.insights.map((insight, idx) => (
            <div key={idx} className="p-6 bg-white border border-gray-200 shadow-md rounded-[24px] hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600">
                <insight.icon size={20} />
              </div>
              <h4 className="font-bold text-[#111827] mb-1">{insight.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{insight.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <button 
            onClick={prev}
            disabled={currentStep === 0}
            className={`p-4 rounded-2xl border-2 transition-all ${currentStep === 0 ? 'opacity-30 cursor-not-allowed border-gray-100' : 'border-gray-900 hover:bg-gray-900 hover:text-white active:scale-95'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={next}
            disabled={currentStep === MOCKUP_DATA.length - 1}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg transition-all ${currentStep === MOCKUP_DATA.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-700 text-white hover:bg-green-800 active:scale-95 shadow-lg shadow-green-900/20'}`}
          >
            {currentStep === MOCKUP_DATA.length - 1 ? 'End of Journey' : 'Next Step'}
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Visual Mockup Frame */}
      <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
        <div className="relative group">
          {/* Shadow Glow */}
          <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-[60px] opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Phone Shell */}
          <div className="relative w-[340px] h-[680px] sm:w-[375px] sm:h-[760px] bg-[#F9FAFB] rounded-[50px] border-[10px] border-gray-950 shadow-2xl overflow-hidden flex flex-col transition-transform hover:scale-[1.01] duration-500">
            {/* Camera / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-950 rounded-b-2xl z-50"></div>
            
            {/* The Image */}
            <div className="flex-1 bg-white relative overflow-hidden flex items-center justify-center">
              <img 
                key={step.image}
                src={step.image} 
                alt={step.title} 
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
              />
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full z-50"></div>
          </div>

          {/* Floating Tag */}
          <div className="absolute -right-6 bottom-20 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-2 animate-bounce">
            <Info size={16} className="text-blue-500" />
            <span className="text-xs font-bold text-gray-600">High Fidelity</span>
          </div>
        </div>
      </div>
    </div>
  );
};
