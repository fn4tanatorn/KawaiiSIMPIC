import React, { useEffect, useState } from 'react';
import { Timer, AlertCircle } from 'lucide-react';

interface TimerBarProps {
  durationSeconds?: number;
  isActive: boolean;
  onTimeUp: () => void;
  resetKey: string | number;
}

export const TimerBar: React.FC<TimerBarProps> = ({
  durationSeconds = 60,
  isActive,
  onTimeUp,
  resetKey
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(durationSeconds);

  useEffect(() => {
    setTimeLeft(durationSeconds);
  }, [resetKey, durationSeconds]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onTimeUp]);

  const percentage = Math.max(0, Math.min(100, (timeLeft / durationSeconds) * 100));
  const isWarning = timeLeft <= 10 && timeLeft > 0;

  let colorStyle = 'bg-emerald-500';
  if (percentage <= 25) {
    colorStyle = 'bg-rose-500 animate-pulse';
  } else if (percentage <= 50) {
    colorStyle = 'bg-amber-500';
  }

  return (
    <div className="w-full bg-white/90 rounded-2xl p-3 border border-slate-200/80 shadow-xs mb-5">
      <div className="flex items-center justify-between text-xs font-semibold mb-2">
        <div className="flex items-center gap-1.5 text-slate-700">
          <Timer className={`w-4 h-4 ${isWarning ? 'text-rose-500 animate-bounce' : 'text-slate-400'}`} />
          <span>SIMPIC Rapid Drill Countdown</span>
        </div>
        <div className="flex items-center gap-1">
          {isWarning && <AlertCircle className="w-3.5 h-3.5 text-rose-500" />}
          <span className={`font-mono text-sm font-bold ${isWarning ? 'text-rose-600' : 'text-slate-800'}`}>
            {timeLeft}s
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-linear ${colorStyle}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
