import React, { useState } from 'react';
import { Question } from '../types/question';
import { Sparkles, BookOpen, Lightbulb, Microscope, Maximize2, X } from 'lucide-react';

interface RationaleViewProps {
  question: Question;
  selectedIndex: number;
}

export const RationaleView: React.FC<RationaleViewProps> = ({ question, selectedIndex }) => {
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="mt-6 space-y-5 animate-fadeIn">
      {/* Clinical / Microscopic Exhibit (If available) */}
      {question.image && (
        <div className="bg-white/95 rounded-2xl border border-rose-100 overflow-hidden shadow-xs">
          <div className="bg-rose-50/60 px-4 py-2.5 border-b border-rose-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-rose-800">
              <Microscope className="w-4 h-4 text-rose-500" />
              <span>SIMPIC Microscopic & Clinical Exhibit</span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
              Photo Quiz
            </span>
          </div>

          <div className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            {/* Image Thumbnail with zoom trigger */}
            <div
              onClick={() => setIsZoomed(true)}
              className="relative group cursor-zoom-in shrink-0 w-full sm:w-56 h-48 rounded-xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50 flex items-center justify-center"
            >
              <img
                src={question.image.src}
                alt={question.image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 text-white text-[11px] font-medium backdrop-blur-xs">
                  <Maximize2 className="w-3 h-3" />
                  คลิกเพื่อขยาย
                </span>
              </div>
            </div>

            {/* Caption & Citations */}
            <div className="flex-1 space-y-2 text-left">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                <span>{question.image.alt}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {question.image.caption}
              </p>
              <div className="text-[11px] font-medium text-slate-400 pt-1">
                Exhibit reference: <span className="text-slate-600 font-semibold">{question.image.sourceRef}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for High-Res Image */}
      {isZoomed && question.image && (
        <div
          onClick={() => setIsZoomed(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn cursor-zoom-out"
        >
          <div
            onClick={e => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2 sm:p-4 bg-slate-950 flex items-center justify-center max-h-[70vh]">
              <img
                src={question.image.src}
                alt={question.image.alt}
                className="max-h-[68vh] w-auto object-contain rounded-xl"
              />
            </div>
            <div className="p-4 sm:p-5 bg-white">
              <h5 className="text-sm font-bold text-slate-800 mb-1">
                {question.image.alt}
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed mb-2">
                {question.image.caption}
              </p>
              <span className="text-[11px] text-slate-400 font-medium">
                {question.image.sourceRef}
              </span>
            </div>
          </div>
        </div>
      )}

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
