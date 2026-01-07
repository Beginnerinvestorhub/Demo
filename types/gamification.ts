export enum BadgeCategory {
  EDUCATION = 'education',
  INVESTMENT = 'investment',
  ENGAGEMENT = 'engagement',
  MILESTONE = 'milestone',
  SOCIAL = 'social'
}

export enum BadgeRarity {
  COMMON = 'common',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary'
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  points: number;
  isUnlocked?: boolean;
  unlockedAt?: Date;
}

export interface Achievement {
  id: string;
  name: string;
  title: string;
  description: string;
  points: number;
  badge: Badge;
  unlockedAt?: Date;
  progress?: number;
  maxProgress?: number;
}

export interface UserStats {
  totalPoints?: number;
  badges?: Badge[];
  achievements?: Achievement[];
  streak?: number;
  level?: number;
  toolsUsed?: string[];
  assessmentsCompleted?: number;
  portfoliosCreated?: number;
  educationModulesCompleted?: number;
  pageViews?: Record<string, number>;
  events?: Record<string, number>;
}

export interface UserProgress {
  currentLevel: number;
  level: number;
  currentPoints: number;
  pointsToNextLevel: number;
  totalPoints: number;
  badges: Badge[];
  achievements: Achievement[];
  streak: number;
  streaks?: {
    loginStreak?: number;
    learningStreak?: number;
    lastLoginDate?: string;
    lastLearningDate?: string;
  };
  stats?: {
    toolsUsed?: any[];
    assessmentsCompleted?: number;
    portfoliosCreated?: number;
    educationModulesCompleted?: number;
    pageViews?: Record<string, number>;
    events?: Record<string, number>;
  };
  lastActivity?: string;
  userId?: string;
}