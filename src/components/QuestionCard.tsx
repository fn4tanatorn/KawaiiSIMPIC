import React from 'react';
import { Question } from '../types/question';
import { OptionItem } from './OptionItem';
import { RationaleView } from './RationaleView';
import { Bookmark, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: number | null;
  isBookmarked: boolean;
  onSelectOption: (index: number) => void;
  onToggleBookmark: () => void;
  onNext: () => void;
  onPrev: () => void;
  onResetCurrent: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  isBookmarked,
  onSelectOption,
  onToggleBookmark,
  onNext,
  onPrev,
  onResetCurrent
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const isAnswered = selectedOption !== null;

  // Helper to italicize Latin binomial names in the question stem
  const renderStemWithItalics = (stemText: string, names: string[] = []) => {
    if (!names.length) return stemText;
    const regexPattern = new RegExp(`(${names.join('|')})`, 'gi');
    const parts = stemText.split(regexPattern);

    return parts.map((part, i) => {
      const match = names.find(n => n.toLowerCase() === part.toLowerCase());
      if (match) {
        return <em key={i} className="italic font-semibold text-rose-900">{part}</em>;
      }
      return part;
    });
  };

  return (
    <div className="bg-white/95 rounded-3xl border border-rose-100/80 shadow-sm p-5 sm:p-7 relative overflow-hidden transition-all">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
        <div className="flex flex-wrap items-center gap-2">
          {/* Question Index Badge */}
          <span className="px-3 py-1 bg-rose-50 text-rose-700 font-bold text-xs rounded-full border border-rose-100">
            Case {currentIndex + 1} / {totalQuestions}
          </span>

          {/* Subject Pill */}
          <span className="px-2.5 py-0.8 bg-sky-50 text-sky-700 font-medium text-xs rounded-full border border-sky-100">
            {question.subject}
          </span>

          {/* Difficulty Tier */}
          <span className="px-2.5 py-0.8 bg-amber-50 text-amber-800 font-medium text-xs rounded-full border border-amber-100">
            {question.difficulty}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 ml-auto">
          {isAnswered && (
            <button
              onClick={onResetCurrent}
              title="ลองตอบใหม่อีกครั้ง"
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onToggleBookmark}
            title={isBookmarked ? 'ลบออกจาก Bookmark' : 'บันทึกคำถามนี้'}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              isBookmarked
                ? 'text-rose-500 bg-rose-50 hover:bg-rose-100'
                : 'text-slate-400 hover:text-rose-400 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-rose-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Clinical Vignette Stem */}
      <div className="text-slate-800 font-normal text-base sm:text-lg leading-relaxed mb-6">
        {renderStemWithItalics(question.stem, question.latinNames)}
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {question.options.map((opt, idx) => (
          <OptionItem
            key={idx}
            index={idx}
            letter={letters[idx]}
            text={opt}
            isSelected={selectedOption === idx}
            isCorrect={idx === question.correctIndex}
            isAnswered={isAnswered}
            onSelect={() => onSelectOption(idx)}
          />
        ))}
      </div>

      {/* Rationale & SIMPIC Pearls View (Reveals after answer) */}
      {isAnswered && (
        <RationaleView question={question} selectedIndex={selectedOption} />
      )}

      {/* Bottom Navigation */}
      <div className="flex items-center justify-between mt-8 pt-5 border-t border-slate-100">
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100/80 hover:bg-slate-200 disabled:opacity-40 disabled:pointer-events-none transition-all cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        <div className="text-xs text-slate-400 font-medium">
          {currentIndex + 1} of {totalQuestions}
        </div>

        <button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 active:scale-95 disabled:opacity-40 disabled:pointer-events-none transition-all shadow-xs cursor-pointer"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
