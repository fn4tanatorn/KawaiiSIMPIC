import { UserProgressState, Question } from '../types/question';
import { X, Award, RotateCcw, Target } from 'lucide-react';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  progress: UserProgressState;
  onReset: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({
  isOpen,
  onClose,
  questions,
  progress,
  onReset
}) => {
  if (!isOpen) return null;

  const totalQuestions = questions.length;
  const answeredIds = Object.keys(progress.answers);
  const answeredCount = answeredIds.length;
  const correctCount = answeredIds.filter(id => progress.answers[id]?.isCorrect).length;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Subject breakdown
  const subjectStats: Record<string, { total: number; correct: number; attempted: number }> = {};
  questions.forEach(q => {
    if (!subjectStats[q.subject]) {
      subjectStats[q.subject] = { total: 0, correct: 0, attempted: 0 };
    }
    subjectStats[q.subject].total += 1;
    if (progress.answers[q.id]) {
      subjectStats[q.subject].attempted += 1;
      if (progress.answers[q.id].isCorrect) {
        subjectStats[q.subject].correct += 1;
      }
    }
  });

  // Rank determination
  let rankTitle = 'Budding Bacilli 🌱';
  let rankColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  let rankDescription = 'เริ่มต้นเพาะเชื้อความรู้ หมั่นทบทวน Rationale ให้คุ้นมือ!';

  if (answeredCount >= 5 && accuracy >= 80) {
    rankTitle = 'Microbe Master ✨';
    rankColor = 'bg-rose-50 text-rose-700 border-rose-200';
    rankDescription = 'แม่นยำระดับตัวแทนแข่งขัน SIMPIC! เก็บรายละเอียดครบทุกมิติ!';
  } else if (answeredCount >= 3 && accuracy >= 60) {
    rankTitle = 'Petri Prodigy 🧫';
    rankColor = 'bg-amber-50 text-amber-700 border-amber-200';
    rankDescription = 'ฝีมือเยี่ยม! แยกแยะข้อลวงทางคลินิกได้อย่างแม่นยำ!';
  }

  const handleConfirmReset = () => {
    if (window.confirm('คุณต้องการรีเซ็ตผลการทำข้อสอบทั้งหมดใช่หรือไม่?')) {
      onReset();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF8F5] rounded-3xl border border-rose-100 max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 mb-2">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            SIMPIC Practice Analytics
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            สถิติการฝึกซ้อมและวิเคราะห์ความแม่นยำรายวิชา
          </p>
        </div>

        {/* Rank Card */}
        <div className={`rounded-2xl p-4 border text-center mb-6 ${rankColor}`}>
          <div className="text-xs uppercase font-bold tracking-wider mb-1 opacity-75">
            Current Mastery Tier
          </div>
          <div className="text-lg font-extrabold tracking-tight mb-1">
            {rankTitle}
          </div>
          <p className="text-xs leading-relaxed opacity-90">
            {rankDescription}
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white rounded-2xl p-3 text-center border border-slate-200/80 shadow-xs">
            <div className="text-[11px] font-medium text-slate-400">Total Solved</div>
            <div className="text-xl font-extrabold text-slate-800 mt-0.5">
              {answeredCount} / {totalQuestions}
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center border border-slate-200/80 shadow-xs">
            <div className="text-[11px] font-medium text-slate-400">Accuracy</div>
            <div className="text-xl font-extrabold text-rose-600 mt-0.5">
              {accuracy}%
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 text-center border border-slate-200/80 shadow-xs">
            <div className="text-[11px] font-medium text-slate-400">Bookmarked</div>
            <div className="text-xl font-extrabold text-indigo-600 mt-0.5">
              {progress.bookmarks.length}
            </div>
          </div>
        </div>

        {/* Subject Breakdown */}
        <div className="space-y-3 mb-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5 text-sky-500" />
            <span>Accuracy by Discipline</span>
          </div>

          <div className="space-y-2">
            {Object.entries(subjectStats).map(([subj, stat]) => {
              const subjAcc = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : 0;
              return (
                <div key={subj} className="bg-white rounded-xl p-3 border border-slate-200/60 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-slate-700">{subj}</span>
                    <span className="text-slate-500">
                      {stat.correct}/{stat.attempted} ({subjAcc}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-sky-500 transition-all duration-500"
                      style={{ width: `${subjAcc}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200/80">
          <button
            onClick={handleConfirmReset}
            className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 p-2 hover:bg-rose-50 rounded-xl transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>รีเซ็ตประวัติทั้งหมด</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all cursor-pointer shadow-xs"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
};
