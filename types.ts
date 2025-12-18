
export interface ColorDef {
  name: string;
  hex: string;
  variableName: string;
  description: string;
}

export interface ColorCategory {
  title: string;
  description: string;
  colors: ColorDef[];
}

export interface AccessibilityCheck {
  backgroundName: string;
  backgroundHex: string;
  foregroundName: string;
  foregroundHex: string;
  ratio: string;
  level: 'AA' | 'AAA';
  usage: string;
}

export enum Tab {
  GENESIS = 'genesis',
  TOKENS = 'tokens',
  SEMANTIC = 'semantic',
  COMPONENTS = 'components',
  ACCESSIBILITY = 'accessibility',
  MOCKUPS = 'mockups',
}
