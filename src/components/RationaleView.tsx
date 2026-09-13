import React from 'react';
import { Question } from '../types/question';
import { Sparkles, BookOpen, Lightbulb } from 'lucide-react';

interface RationaleViewProps {
  question: Question;
  selectedIndex: number;
}

export const RationaleView: React.FC<RationaleViewProps> = ({ question, selectedIndex }) => {
  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="mt-6 space-y-5 animate-fadeIn">
      {/* High-Yield Pearls Box */}
      <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 shadow-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
          <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span>SIMPIC High-Yield Pearls & Board Takeaways</span>
        </div>
        <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950/90 leading-relaxed">
          {question.highYieldPearls.map((pearl, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-amber-500 font-bold shrink-0">✦</span>
              <span>{pearl}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Per-Option Detailed Breakdown */}
      <div className="bg-white/90 border border-slate-200/80 rounded-2xl p-5 shadow-xs">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <Lightbulb className="w-3.5 h-3.5 text-rose-500" />
          <span>Exhaustive Option Analysis</span>
        </h4>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isCorrect = idx === question.correctIndex;
            const isSelected = idx === selectedIndex;
            const rationale = question.rationales[idx];

            return (
              <div
                key={idx}
                className={`rounded-xl p-3.5 border transition-all text-xs sm:text-sm ${
                  isCorrect
                    ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                    : isSelected
                    ? 'bg-rose-50/70 border-rose-300 text-rose-950'
                    : 'bg-slate-50/60 border-slate-200/70 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold mb-1">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCorrect
                        ? 'bg-emerald-600 text-white'
                        : isSelected
                        ? 'bg-rose-500 text-white'
                        : 'bg-slate-300 text-slate-700'
                    }`}
                  >
                    {letters[idx]}
                  </span>
                  <span className="line-clamp-1">{option}</span>
                  {isCorrect && (
                    <span className="ml-auto text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full">
                      ✓ Correct Answer
                    </span>
                  )}
                  {isSelected && !isCorrect && (
                    <span className="ml-auto text-[11px] font-bold text-rose-700 bg-rose-100/90 px-2 py-0.5 rounded-full">
                      ✗ Your Pick (Distractor)
                    </span>
                  )}
                </div>
                <p className="mt-1.5 leading-relaxed text-xs sm:text-sm opacity-95">
                  {rationale}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Textbook Source Reference */}
      <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50/80 rounded-xl px-4 py-2.5 border border-slate-200/60">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>Source: <strong className="text-slate-700 font-semibold">{question.source}</strong></span>
        </div>
        <span className="text-slate-600 font-medium">{question.chapter}</span>
      </div>
    </div>
  );
};
