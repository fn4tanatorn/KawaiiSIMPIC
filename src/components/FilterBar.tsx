import React from 'react';
import { SubjectType, TextbookSource, FilterStatus } from '../types/question';
import { BookOpen, Filter, Bookmark, CheckCircle2, AlertCircle } from 'lucide-react';

interface FilterBarProps {
  selectedSource: TextbookSource | 'all';
  onSelectSource: (source: TextbookSource | 'all') => void;
  selectedSubject: SubjectType | 'all';
  onSelectSubject: (subject: SubjectType | 'all') => void;
  filterStatus: FilterStatus;
  onSelectStatus: (status: FilterStatus) => void;
  counts: {
    total: number;
    unattempted: number;
    incorrect: number;
    bookmarked: number;
  };
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedSource,
  onSelectSource,
  selectedSubject,
  onSelectSubject,
  filterStatus,
  onSelectStatus,
  counts
}) => {
  const subjects: SubjectType[] = [
    'Bacteriology',
    'Virology',
    'Mycology',
    'Parasitology',
    'General Microbiology & Immunology'
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xs rounded-3xl border border-slate-200/80 p-4 sm:p-5 shadow-xs mb-6 space-y-4">
      {/* Textbook Source Row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
          <BookOpen className="w-3.5 h-3.5 text-rose-500" />
          <span>Source Textbook</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {(['all', 'Murray 9th Ed', 'Jawetz 28th Ed'] as const).map(source => {
            const isSelected = selectedSource === source;
            const label = source === 'all' ? 'All Sources' : source;

            return (
              <button
                key={source}
                onClick={() => onSelectSource(source)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-500 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subject Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400">
          <Filter className="w-3.5 h-3.5 text-sky-500" />
          <span>Subject Discipline</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => onSelectSubject('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-sky-600 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Subjects
          </button>
          {subjects.map(subj => {
            const isSelected = selectedSubject === subj;
            // Shorthand for small screens
            const shortName = subj === 'General Microbiology & Immunology' ? 'Gen & Immuno' : subj;

            return (
              <button
                key={subj}
                onClick={() => onSelectSubject(subj)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-sky-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Status Filter Row */}
      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1">
          Status:
        </span>

        <button
          onClick={() => onSelectStatus('all')}
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            filterStatus === 'all'
              ? 'bg-slate-800 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <span>All ({counts.total})</span>
        </button>

        <button
          onClick={() => onSelectStatus('unattempted')}
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            filterStatus === 'unattempted'
              ? 'bg-amber-600 text-white'
              : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
          }`}
        >
          <CheckCircle2 className="w-3 h-3" />
          <span>Unattempted ({counts.unattempted})</span>
        </button>

        <button
          onClick={() => onSelectStatus('incorrect')}
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            filterStatus === 'incorrect'
              ? 'bg-rose-600 text-white'
              : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
          }`}
        >
          <AlertCircle className="w-3 h-3" />
          <span>Missed ({counts.incorrect})</span>
        </button>

        <button
          onClick={() => onSelectStatus('bookmarked')}
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
            filterStatus === 'bookmarked'
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
          }`}
        >
          <Bookmark className="w-3 h-3" />
          <span>Bookmarked ({counts.bookmarked})</span>
        </button>
      </div>
    </div>
  );
};
