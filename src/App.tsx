import { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { allQuestions } from './data/questions';
import { Question, SubjectType, TextbookSource, FilterStatus } from './types/question';
import { loadProgress, recordAnswer, toggleBookmark, resetProgress } from './lib/storage';
import { KawaiiHeader } from './components/KawaiiHeader';
import { KawaiiMascot, MascotMood } from './components/KawaiiMascot';
import { FilterBar } from './components/FilterBar';
import { QuestionCard } from './components/QuestionCard';
import { TimerBar } from './components/TimerBar';
import { StatsModal } from './components/StatsModal';

export function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [selectedSource, setSelectedSource] = useState<TextbookSource | 'all'>(() => {
    const params = new URLSearchParams(window.location.search);
    const s = params.get('source')?.toLowerCase();
    if (s === 'jawetz' || s === 'jawetz 28th ed') return 'Jawetz 28th Ed';
    if (s === 'murray' || s === 'murray 9th ed') return 'Murray 9th Ed';
    return 'all';
  });
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'all'>(() => {
    const params = new URLSearchParams(window.location.search);
    const sub = params.get('subject');
    if (sub && ['Bacteriology', 'Virology', 'Mycology', 'Parasitology', 'Gen & Immuno'].includes(sub)) {
      return sub as SubjectType;
    }
    return 'all';
  });
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    const params = new URLSearchParams(window.location.search);
    const q = parseInt(params.get('q') || '1', 10);
    return isNaN(q) || q < 1 ? 0 : q - 1;
  });
  const [mode, setMode] = useState<'practice' | 'speed'>('practice');
  const [isStatsOpen, setIsStatsOpen] = useState<boolean>(false);
  const [mascotMood, setMascotMood] = useState<MascotMood>('thinking');
  const [mascotMessage, setMascotMessage] = useState<string>('');

  // Synchronize URL parameters for deep-linking
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('q', (currentIndex + 1).toString());
    if (selectedSource !== 'all') params.set('source', selectedSource);
    else params.delete('source');
    if (selectedSubject !== 'all') params.set('subject', selectedSubject);
    else params.delete('subject');

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState(null, '', newUrl);
  }, [currentIndex, selectedSource, selectedSubject]);


  // Synchronize filtered questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      // Filter by textbook source
      if (selectedSource !== 'all' && q.source !== selectedSource) return false;

      // Filter by subject
      if (selectedSubject !== 'all' && q.subject !== selectedSubject) return false;

      // Filter by user progress status
      const ans = progress.answers[q.id];
      if (filterStatus === 'unattempted' && ans) return false;
      if (filterStatus === 'incorrect' && (!ans || ans.isCorrect)) return false;
      if (filterStatus === 'bookmarked' && !progress.bookmarks.includes(q.id)) return false;
      if (filterStatus === 'completed' && !ans) return false;

      return true;
    });
  }, [selectedSource, selectedSubject, filterStatus, progress]);

  // Ensure currentIndex stays within bounds when filters change
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length) {
      setCurrentIndex(Math.max(0, filteredQuestions.length - 1));
    }
  }, [filteredQuestions.length, currentIndex]);

  const currentQuestion: Question | undefined = filteredQuestions[currentIndex];
  const currentAnswer = currentQuestion ? progress.answers[currentQuestion.id] : undefined;
  const isCurrentBookmarked = currentQuestion ? progress.bookmarks.includes(currentQuestion.id) : false;

  // Counts for status filters
  const counts = useMemo(() => {
    let unattempted = 0;
    let incorrect = 0;
    let bookmarked = 0;

    allQuestions.forEach(q => {
      const a = progress.answers[q.id];
      if (!a) unattempted += 1;
      else if (!a.isCorrect) incorrect += 1;

      if (progress.bookmarks.includes(q.id)) bookmarked += 1;
    });

    return {
      total: allQuestions.length,
      unattempted,
      incorrect,
      bookmarked
    };
  }, [progress]);

  // Handle option selection
  const handleSelectOption = useCallback((optionIdx: number) => {
    if (!currentQuestion || currentAnswer) return;

    const isCorrect = optionIdx === currentQuestion.correctIndex;
    const updated = recordAnswer(currentQuestion.id, optionIdx, isCorrect);
    setProgress(updated);

    if (isCorrect) {
      setMascotMood('cheering');
      setMascotMessage('🎉 ยอดเยี่ยมมาก! ตรงประเด็น SIMPIC เป๊ะเลย!');
      // Delightful Kawaii Confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#F43F5E', '#10B981', '#F59E0B', '#6366F1', '#EC4899']
      });
    } else {
      setMascotMood('encouraging');
      setMascotMessage('🌱 ข้อนี้หลอกได้แนบเนียนมาก! ลองอ่านวิเคราะห์ตัวลวง (Distractors) ด้านล่างดูนะ');
    }
  }, [currentQuestion, currentAnswer]);

  // Handle timeout in Speed Drill mode
  const handleTimeUp = useCallback(() => {
    if (!currentQuestion || currentAnswer) return;
    // Mark as missed (-1 index)
    const updated = recordAnswer(currentQuestion.id, -1, false);
    setProgress(updated);
    setMascotMood('encouraging');
    setMascotMessage('⏰ หมดเวลา 60 วินาทีแล้ว! ฝึกต่อเพื่อเพิ่มความเร็วในการอ่านโจทย์นะ!');
  }, [currentQuestion, currentAnswer]);

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setMascotMood(mode === 'speed' ? 'speed' : 'thinking');
      setMascotMessage('');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setMascotMood(mode === 'speed' ? 'speed' : 'thinking');
      setMascotMessage('');
    }
  };

  const handleResetCurrent = () => {
    if (!currentQuestion) return;
    const updatedAnswers = { ...progress.answers };
    delete updatedAnswers[currentQuestion.id];
    const newState = { ...progress, answers: updatedAnswers };
    setProgress(newState);
    localStorage.setItem('kawaii_simpic_progress_v1', JSON.stringify(newState));
    setMascotMood(mode === 'speed' ? 'speed' : 'thinking');
    setMascotMessage('');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (['1', '2', '3', '4', '5'].includes(e.key) && !currentAnswer) {
        handleSelectOption(parseInt(e.key, 10) - 1);
      } else if (['a', 'b', 'c', 'd', 'e'].includes(e.key.toLowerCase()) && !currentAnswer) {
        const keyMap: Record<string, number> = { a: 0, b: 1, c: 2, d: 3, e: 4 };
        handleSelectOption(keyMap[e.key.toLowerCase()]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const totalAnswered = Object.keys(progress.answers).length;
  const correctCount = Object.values(progress.answers).filter(a => a.isCorrect).length;
  const accuracyRate = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-800 pb-16">
      {/* Sticky Top Header */}
      <KawaiiHeader
        mode={mode}
        onToggleMode={newMode => {
          setMode(newMode);
          setMascotMood(newMode === 'speed' ? 'speed' : 'thinking');
          setMascotMessage('');
        }}
        streak={progress.streak}
        accuracyRate={accuracyRate}
        answeredCount={totalAnswered}
        totalQuestions={allQuestions.length}
        onOpenStats={() => setIsStatsOpen(true)}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
        {/* Mascot Banner */}
        <KawaiiMascot mood={mascotMood} message={mascotMessage} />

        {/* Filter Bar */}
        <FilterBar
          selectedSource={selectedSource}
          onSelectSource={setSelectedSource}
          selectedSubject={selectedSubject}
          onSelectSubject={setSelectedSubject}
          filterStatus={filterStatus}
          onSelectStatus={setFilterStatus}
          counts={counts}
        />

        {/* Speed Drill Timer Bar */}
        {mode === 'speed' && currentQuestion && (
          <TimerBar
            key={currentQuestion.id}
            resetKey={currentQuestion.id}
            isActive={!currentAnswer}
            durationSeconds={60}
            onTimeUp={handleTimeUp}
          />
        )}

        {/* Case Navigator Pill Bar */}
        {filteredQuestions.length > 0 && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            {filteredQuestions.map((q, idx) => {
              const ans = progress.answers[q.id];
              const isCurrent = idx === currentIndex;

              let dotColor = 'bg-slate-200 text-slate-600 hover:bg-slate-300';
              if (ans) {
                dotColor = ans.isCorrect
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-rose-100 text-rose-800 border-rose-300';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setMascotMood(mode === 'speed' ? 'speed' : 'thinking');
                    setMascotMessage('');
                  }}
                  className={`shrink-0 w-8 h-8 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center ${dotColor} ${
                    isCurrent ? 'ring-2 ring-rose-400 scale-105 shadow-xs font-extrabold' : ''
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}

        {/* Question Card */}
        {currentQuestion ? (
          <QuestionCard
            question={currentQuestion}
            currentIndex={currentIndex}
            totalQuestions={filteredQuestions.length}
            selectedOption={currentAnswer ? currentAnswer.selectedIndex : null}
            isBookmarked={isCurrentBookmarked}
            onSelectOption={handleSelectOption}
            onToggleBookmark={() => {
              const updated = toggleBookmark(currentQuestion.id);
              setProgress(updated);
            }}
            onNext={handleNext}
            onPrev={handlePrev}
            onResetCurrent={handleResetCurrent}
          />
        ) : (
          <div className="bg-white rounded-3xl border border-slate-200/80 p-12 text-center shadow-xs">
            <div className="text-4xl mb-3">🔍</div>
            <h4 className="text-base font-bold text-slate-800 mb-1">
              ไม่พบคำถามที่ตรงกับตัวกรองนี้
            </h4>
            <p className="text-xs text-slate-500 mb-4">
              ลองปรับตัวกรองวิชา แหล่งหนังสือ หรือสถานะการตอบคำถามดูนะ
            </p>
            <button
              onClick={() => {
                setSelectedSource('all');
                setSelectedSubject('all');
                setFilterStatus('all');
              }}
              className="px-4 py-2 bg-rose-500 text-white rounded-xl text-xs font-bold hover:bg-rose-600 transition-all cursor-pointer shadow-xs"
            >
              ล้างตัวกรองทั้งหมด
            </button>
          </div>
        )}
      </main>

      {/* Analytics Modal */}
      <StatsModal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        questions={allQuestions}
        progress={progress}
        onReset={() => {
          const reset = resetProgress();
          setProgress(reset);
        }}
      />
    </div>
  );
}

export default App;
