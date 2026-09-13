import React from 'react';
import { Check, X } from 'lucide-react';

interface OptionItemProps {
  index: number;
  letter: string;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  onSelect: () => void;
}

export const OptionItem: React.FC<OptionItemProps> = ({
  letter,
  text,
  isSelected,
  isCorrect,
  isAnswered,
  onSelect
}) => {
  let buttonStyle = 'bg-white border-slate-200/90 text-slate-800 hover:border-rose-300 hover:bg-rose-50/20 active:scale-[0.99]';
  let badgeStyle = 'bg-slate-100 text-slate-600 border-slate-200';

  if (isAnswered) {
    if (isCorrect) {
      buttonStyle = 'bg-emerald-50/90 border-emerald-400 text-emerald-950 font-medium ring-2 ring-emerald-200/60 shadow-xs';
      badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
    } else if (isSelected && !isCorrect) {
      buttonStyle = 'bg-rose-50/90 border-rose-400 text-rose-950 font-medium ring-2 ring-rose-200/60 shadow-xs';
      badgeStyle = 'bg-rose-500 text-white border-rose-500';
    } else {
      buttonStyle = 'bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-60 cursor-default';
      badgeStyle = 'bg-slate-100 text-slate-400 border-slate-200';
    }
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      disabled={isAnswered}
      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 group cursor-pointer ${buttonStyle}`}
    >
      <span
        className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 border transition-all ${badgeStyle}`}
      >
        {isAnswered && isCorrect ? (
          <Check className="w-4 h-4 text-white stroke-[3]" />
        ) : isAnswered && isSelected && !isCorrect ? (
          <X className="w-4 h-4 text-white stroke-[3]" />
        ) : (
          letter
        )}
      </span>

      <span className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5">
        {text}
      </span>
    </button>
  );
};
