import React from 'react';
import { PetriIcon } from './KawaiiIcons';
import { Flame, Zap, BarChart2, BookMarked } from 'lucide-react';

interface KawaiiHeaderProps {
  mode: 'practice' | 'speed';
  onToggleMode: (mode: 'practice' | 'speed') => void;
  streak: number;
  accuracyRate: number;
  answeredCount: number;
  totalQuestions: number;
  onOpenStats: () => void;
}

export const KawaiiHeader: React.FC<KawaiiHeaderProps> = ({
  mode,
  onToggleMode,
  streak,
  accuracyRate,
  answeredCount,
  totalQuestions,
  onOpenStats
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-rose-100/80 mb-6 py-3 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        {/* Logo Wordmark */}
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-rose-50 rounded-2xl border border-rose-100 animate-kawaii-float">
            <PetriIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                Kawaii<span className="text-rose-500">SIMPIC</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-rose-100/70 text-rose-700">
                Drill
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              Exam Practice & Clinical Vignettes • Murray & Jawetz
            </p>
          </div>
        </div>

        {/* Right Action Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200/60">
            <button
              onClick={() => onToggleMode('practice')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mode === 'practice'
                  ? 'bg-white text-rose-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Practice</span>
            </button>
            <button
              onClick={() => onToggleMode('speed')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mode === 'speed'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Speed 60s</span>
            </button>
          </div>

          {/* Streak Indicator */}
          <div className="flex items-center gap-1 px-2.5 py-1.5 bg-amber-50 text-amber-700 border border-amber-200/60 rounded-xl text-xs font-bold">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            <span>{streak}d</span>
          </div>

          {/* Stats Button */}
          <button
            onClick={onOpenStats}
            title="ดูสถิติและการวิเคราะห์ผล"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer"
          >
            <BarChart2 className="w-3.5 h-3.5 text-slate-500" />
            <span>
              {answeredCount > 0 ? `${accuracyRate}%` : `${answeredCount}/${totalQuestions}`}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
