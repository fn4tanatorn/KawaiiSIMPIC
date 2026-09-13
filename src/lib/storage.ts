import { UserProgressState, UserAnswerRecord } from '../types/question';

const STORAGE_KEY = 'kawaii_simpic_progress_v1';

const defaultState: UserProgressState = {
  answers: {},
  bookmarks: [],
  streak: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  speedModeHighScore: 0
};

export const loadProgress = (): UserProgressState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    
    // Check streak
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDate !== today) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currentDate = new Date(today);
      const diffDays = Math.round((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 1) {
        parsed.streak = (parsed.streak || 0) + 1;
      } else if (diffDays > 1) {
        parsed.streak = 1;
      }
      parsed.lastActiveDate = today;
    }
    
    return { ...defaultState, ...parsed };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return defaultState;
  }
};

export const saveProgress = (state: UserProgressState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
};

export const recordAnswer = (
  questionId: string,
  selectedIndex: number,
  isCorrect: boolean
): UserProgressState => {
  const current = loadProgress();
  const record: UserAnswerRecord = {
    selectedIndex,
    isCorrect,
    timestamp: Date.now()
  };
  
  const updated: UserProgressState = {
    ...current,
    answers: {
      ...current.answers,
      [questionId]: record
    }
  };
  
  saveProgress(updated);
  return updated;
};

export const toggleBookmark = (questionId: string): UserProgressState => {
  const current = loadProgress();
  const isBookmarked = current.bookmarks.includes(questionId);
  const updatedBookmarks = isBookmarked
    ? current.bookmarks.filter(id => id !== questionId)
    : [...current.bookmarks, questionId];
    
  const updated: UserProgressState = {
    ...current,
    bookmarks: updatedBookmarks
  };
  
  saveProgress(updated);
  return updated;
};

export const resetProgress = (): UserProgressState => {
  const resetState: UserProgressState = {
    ...defaultState,
    lastActiveDate: new Date().toISOString().split('T')[0]
  };
  saveProgress(resetState);
  return resetState;
};
