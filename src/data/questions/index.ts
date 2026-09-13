import { Question, SubjectType, TextbookSource, DifficultyTier } from '../../types/question';
import { microbiologyQuestions } from './microbiologyQuestions';

export const allQuestions: Question[] = [
  ...microbiologyQuestions
];

export const getSubjects = (): SubjectType[] => [
  'Bacteriology',
  'Virology',
  'Mycology',
  'Parasitology',
  'General Microbiology & Immunology'
];

export const getTextbooks = (): TextbookSource[] => [
  'Murray 9th Ed',
  'Jawetz 28th Ed'
];

export const getDifficulties = (): DifficultyTier[] => [
  'Round 1 (Recall & Basics)',
  'Round 2 (Clinical Vignettes)',
  'Finals (Advanced & Triads)'
];
