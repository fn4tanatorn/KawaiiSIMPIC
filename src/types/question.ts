export type SubjectType = 
  | 'Bacteriology' 
  | 'Virology' 
  | 'Mycology' 
  | 'Parasitology' 
  | 'General Microbiology & Immunology';

export type DifficultyTier = 
  | 'Round 1 (Recall & Basics)' 
  | 'Round 2 (Clinical Vignettes)' 
  | 'Finals (Advanced & Triads)';

export type TextbookSource = 
  | 'Murray 9th Ed' 
  | 'Jawetz 28th Ed';

export interface Question {
  id: string;
  stem: string;
  options: string[];
  correctIndex: number;
  rationales: {
    [optionIndex: number]: string;
  };
  source: TextbookSource;
  chapter: string;
  subject: SubjectType;
  difficulty: DifficultyTier;
  highYieldPearls: string[];
  latinNames?: string[];
  caseVignette?: boolean;
  tags?: string[];
}

export interface UserAnswerRecord {
  selectedIndex: number;
  isCorrect: boolean;
  timestamp: number;
}

export interface UserProgressState {
  answers: Record<string, UserAnswerRecord>;
  bookmarks: string[];
  streak: number;
  lastActiveDate: string;
  speedModeHighScore: number;
}

export type FilterStatus = 'all' | 'unattempted' | 'incorrect' | 'bookmarked' | 'completed';
