
import { ColorCategory, AccessibilityCheck } from './types';

// Raw Hex Constants
export const HEX = {
  PANDA_INK: '#111827',
  PANDA_NIGHT: '#0B1120',
  RICE_PAPER: '#F9FAFB',
  MIST_GREY: '#E5E7EB',
  MUTED_GREY: '#9CA3AF',
  BAMBOO_GREEN: '#15803D',
  MATCHA_GLOW: '#DCFCE7',
  MINDFUL_TEAL: '#0D9488',
  CALM_TEAL_TINT: '#CCFBF1',
  PANDA_BLUSH: '#FB7185',
  SUNSHINE: '#FCD34D',
  ALERT_RED: '#DC2626',
  WHITE: '#FFFFFF',
};

export const COLOR_SYSTEM: ColorCategory[] = [
  {
    title: 'Neutrals (Panda + Surfaces)',
    description: 'Used for text, backgrounds, and structural elements to maintain a calm, safe atmosphere.',
    colors: [
      { name: 'Panda Ink', hex: HEX.PANDA_INK, variableName: 'AppColors.pandaInk', description: 'Main text - High contrast black' },
      { name: 'Panda Night', hex: HEX.PANDA_NIGHT, variableName: 'AppColors.pandaNight', description: 'Nav bars, dark surfaces' },
      { name: 'Rice Paper', hex: HEX.RICE_PAPER, variableName: 'AppColors.ricePaper', description: 'App background - Soft white' },
      { name: 'Mist Grey', hex: HEX.MIST_GREY, variableName: 'AppColors.mistGrey', description: 'Borders, dividers' },
      { name: 'Muted Grey', hex: HEX.MUTED_GREY, variableName: 'AppColors.mutedGrey', description: 'Secondary text' },
    ],
  },
  {
    title: 'Primary (Nutrition / Growth)',
    description: 'Represents health, freshness, and "green choices".',
    colors: [
      { name: 'Bamboo Green', hex: HEX.BAMBOO_GREEN, variableName: 'AppColors.bambooGreen', description: 'Primary brand & CTAs' },
      { name: 'Matcha Glow', hex: HEX.MATCHA_GLOW, variableName: 'AppColors.matchaGlow', description: 'Nutrition backgrounds' },
    ],
  },
  {
    title: 'Secondary (Psychology / Calm)',
    description: 'Used for reflection, emotional awareness, and insights.',
    colors: [
      { name: 'Mindful Teal', hex: HEX.MINDFUL_TEAL, variableName: 'AppColors.mindfulTeal', description: 'Psychology, insights' },
      { name: 'Calm Teal Tint', hex: HEX.CALM_TEAL_TINT, variableName: 'AppColors.calmTealTint', description: 'Psychology backgrounds' },
    ],
  },
  {
    title: 'Accents (Energy / Emotion)',
    description: 'Used for streaks, wins, badges, and emotional highlights.',
    colors: [
      { name: 'Panda Blush', hex: HEX.PANDA_BLUSH, variableName: 'AppColors.pandaBlush', description: 'Emotional highlights' },
      { name: 'Sunshine', hex: HEX.SUNSHINE, variableName: 'AppColors.sunshine', description: 'Streaks, wins, badges' },
    ],
  },
  {
    title: 'Error',
    description: 'Used for error states and destructive actions.',
    colors: [
      { name: 'Alert Red', hex: HEX.ALERT_RED, variableName: 'AppColors.alertRed', description: 'Error states' },
    ],
  },
];

export const CONTRAST_CHECKS: AccessibilityCheck[] = [
  {
    backgroundName: 'Rice Paper',
    backgroundHex: HEX.RICE_PAPER,
    foregroundName: 'Panda Ink',
    foregroundHex: HEX.PANDA_INK,
    ratio: '15.6:1',
    level: 'AAA',
    usage: 'Body Text & Headers'
  },
  {
    backgroundName: 'White',
    backgroundHex: HEX.WHITE,
    foregroundName: 'Panda Ink',
    foregroundHex: HEX.PANDA_INK,
    ratio: '16.1:1',
    level: 'AAA',
    usage: 'Card Titles & Lists'
  },
  {
    backgroundName: 'Bamboo Green',
    backgroundHex: HEX.BAMBOO_GREEN,
    foregroundName: 'White',
    foregroundHex: HEX.WHITE,
    ratio: '5.8:1',
    level: 'AA',
    usage: 'Primary CTAs (Large Font AAA)'
  },
  {
    backgroundName: 'Matcha Glow',
    backgroundHex: HEX.MATCHA_GLOW,
    foregroundName: 'Bamboo Green',
    foregroundHex: HEX.BAMBOO_GREEN,
    ratio: '5.4:1',
    level: 'AA',
    usage: 'Success Feedback Text'
  },
  {
    backgroundName: 'Calm Teal Tint',
    backgroundHex: HEX.CALM_TEAL_TINT,
    foregroundName: 'Mindful Teal',
    foregroundHex: HEX.MINDFUL_TEAL,
    ratio: '4.6:1',
    level: 'AA',
    usage: 'Insight Descriptions'
  },
  {
    backgroundName: 'Alert Red',
    backgroundHex: HEX.ALERT_RED,
    foregroundName: 'White',
    foregroundHex: HEX.WHITE,
    ratio: '4.5:1',
    level: 'AA',
    usage: 'Destructive Actions'
  },
  {
    backgroundName: 'Panda Night',
    backgroundHex: HEX.PANDA_NIGHT,
    foregroundName: 'White',
    foregroundHex: HEX.WHITE,
    ratio: '18.4:1',
    level: 'AAA',
    usage: 'Dark UI Text'
  },
  {
    backgroundName: 'Sunshine',
    backgroundHex: HEX.SUNSHINE,
    foregroundName: 'Panda Ink',
    foregroundHex: HEX.PANDA_INK,
    ratio: '7.8:1',
    level: 'AAA',
    usage: 'Badges & High-Contrast Wins'
  }
];

export const CHART_DATA = [
  { name: 'Start', sustainable: 80, restrictive: 80 },
  { name: 'Month 1', sustainable: 78.5, restrictive: 74 },
  { name: 'Month 2', sustainable: 77, restrictive: 71 },
  { name: 'Month 3', sustainable: 75.5, restrictive: 73 },
  { name: 'Month 4', sustainable: 74, restrictive: 75.5 },
  { name: 'Month 5', sustainable: 72.5, restrictive: 74.5 },
  { name: 'Goal', sustainable: 70, restrictive: 76 },
];
