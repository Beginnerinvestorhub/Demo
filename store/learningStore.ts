import { create } from 'zustand';

interface LearningState {
  userProgress: any;
  isLoading: boolean;
  error: string | null;
  aiRecommendations: any;
  learningStats: any;
  currentPath: any;
  pathContent: any[];
  nextRecommended: any;
  onboardingStep: number;
  startOnboarding: () => void;
  completeOnboardingStep: (direction?: 'next' | 'back') => void;
  submitOnboardingProfile: (profile: any) => void;
  setUserProgress: (progress: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setAIRecommendations: (recommendations: any) => void;
  setLearningStats: (stats: any) => void;
  setCurrentPath: (path: any) => void;
  setPathContent: (content: any[]) => void;
  setNextRecommended: (next: any) => void;
  fetchPersonalizedPath: () => void;
  fetchAIRecommendations: () => void;
  markLessonCompleted: (contentId: number, duration: number) => Promise<void>;
  clearError: () => void;
}

export const useLearningStore = create<LearningState>((set, get) => ({
  userProgress: null,
  isLoading: false,
  error: null,
  aiRecommendations: {
    nudgeMessage: "Based on your learning pattern, we recommend focusing on portfolio diversification next.",
    confidenceScore: 0.85,
    priorityScore: 75,
    recommendedContent: [
      {
        id: 1,
        title: "Portfolio Diversification Basics",
        contentType: "lesson",
        estimatedDurationMinutes: 15
      },
      {
        id: 2,
        title: "Risk Management Strategies",
        contentType: "video",
        estimatedDurationMinutes: 20
      }
    ],
    reasoning: "You've completed 3 lessons on basic concepts. Next step is understanding how to spread risk."
  },
  learningStats: {
    totalLessons: 12,
    completedLessons: 3,
    averageScore: 85,
    timeSpent: 45,
    streak: 5,
    totalPoints: 250,
    currentStreak: 5,
    progressPercentage: 25
  },
  currentPath: {
    name: "Investment Fundamentals",
    description: "Learn the basics of investing and portfolio management",
    overallProgress: 25,
    estimatedDurationHours: 8
  },
  pathContent: [
    {
      id: 1,
      title: "Introduction to Investing",
      contentType: "lesson",
      difficultyLevel: "beginner",
      estimatedDurationMinutes: 15,
      pointsValue: 50,
      progressStatus: "completed"
    },
    {
      id: 2,
      title: "Understanding Risk",
      contentType: "video",
      difficultyLevel: "beginner",
      estimatedDurationMinutes: 20,
      pointsValue: 75,
      progressStatus: "completed"
    },
    {
      id: 3,
      title: "Portfolio Basics",
      contentType: "lesson",
      difficultyLevel: "intermediate",
      estimatedDurationMinutes: 25,
      pointsValue: 100,
      progressStatus: "in_progress"
    },
    {
      id: 4,
      title: "Market Analysis",
      contentType: "interactive",
      difficultyLevel: "intermediate",
      estimatedDurationMinutes: 30,
      pointsValue: 125,
      progressStatus: "not_started"
    }
  ],
  nextRecommended: {
    id: 3,
    title: "Portfolio Basics",
    contentType: "lesson",
    difficultyLevel: "intermediate",
    estimatedDurationMinutes: 25,
    pointsValue: 100,
    progressStatus: "in_progress"
  },
  onboardingStep: 0,
  startOnboarding: () => set({ onboardingStep: 1 }),
  completeOnboardingStep: (direction?: 'next' | 'back') => {
    if (direction === 'back') {
      set((state) => ({ onboardingStep: Math.max(1, state.onboardingStep - 1) }));
    } else {
      set((state) => ({ onboardingStep: state.onboardingStep + 1 }));
    }
  },
  submitOnboardingProfile: (profile: any) => {
    set({ isLoading: true });
    // Mock API call
    setTimeout(() => {
      set({ isLoading: false });
    }, 1000);
  },
  setUserProgress: (progress) => set({ userProgress: progress }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error: error }),
  setAIRecommendations: (recommendations) => set({ aiRecommendations: recommendations }),
  setLearningStats: (stats) => set({ learningStats: stats }),
  setCurrentPath: (path) => set({ currentPath: path }),
  setPathContent: (content) => set({ pathContent: content }),
  setNextRecommended: (next) => set({ nextRecommended: next }),
  fetchPersonalizedPath: () => {
    set({ isLoading: true });
    // Mock API call
    setTimeout(() => {
      set({ isLoading: false });
    }, 1000);
  },
  fetchAIRecommendations: () => {
    set({ isLoading: true });
    // Mock API call
    setTimeout(() => {
      set({ isLoading: false });
    }, 1000);
  },
  markLessonCompleted: async (contentId: number, duration: number) => {
    set({ isLoading: true });
    // Mock API call
    setTimeout(() => {
      set({ isLoading: false });
    }, 500);
  },
  clearError: () => set({ error: null })
}));

export const useLearningProgress = () => useLearningStore((state) => state.userProgress);
export const useLearningLoading = () => useLearningStore((state) => state.isLoading);
export const useLearningError = () => useLearningStore((state) => state.error);
export const useAIRecommendations = () => useLearningStore((state) => state.aiRecommendations);
export const useLearningStats = () => useLearningStore((state) => state.learningStats);
export const useCurrentLearningPath = () => useLearningStore((state) => state.currentPath);
export const useLearningContent = () => useLearningStore((state) => state.pathContent);
export const useNextRecommended = () => useLearningStore((state) => state.nextRecommended);