import React from 'react';

export type MascotMood = 'thinking' | 'cheering' | 'encouraging' | 'speed';

interface KawaiiMascotProps {
  mood: MascotMood;
  message?: string;
}

export const KawaiiMascot: React.FC<KawaiiMascotProps> = ({ mood, message }) => {
  return (
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-xs border border-rose-100 rounded-2xl p-3 shadow-xs hover:border-rose-200 transition-all">
      {/* Kawaii Mascot Avatar */}
      <div className="relative w-12 h-12 shrink-0 animate-kawaii-float">
        {mood === 'cheering' && (
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Phage / Microbe Body */}
            <circle cx="24" cy="24" r="20" fill="#FDF2F8" stroke="#F43F5E" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="16" fill="#FFF1F2" />
            {/* Happy squinty eyes */}
            <path d="M16 22 Q19 18 22 22" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M26 22 Q29 18 32 22" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Cute open smile */}
            <path d="M20 27 Q24 33 28 27" fill="#E11D48" stroke="#E11D48" strokeWidth="1" strokeLinecap="round" />
            <path d="M22 29 Q24 31 26 29" fill="#FDA4AF" />
            {/* Pink blush cheeks */}
            <circle cx="15" cy="26" r="3" fill="#FDA4AF" opacity="0.8" />
            <circle cx="33" cy="26" r="3" fill="#FDA4AF" opacity="0.8" />
            {/* Sparkle star */}
            <path d="M37 10 L38 12 L40 13 L38 14 L37 16 L36 14 L34 13 L36 12 Z" fill="#F59E0B" />
          </svg>
        )}

        {mood === 'encouraging' && (
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Gentle pastel green/blue microbe */}
            <circle cx="24" cy="24" r="20" fill="#F0FDF4" stroke="#10B981" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="16" fill="#F0FDF4" />
            {/* Soft encouraging eyes */}
            <circle cx="18" cy="22" r="2.5" fill="#047857" />
            <circle cx="30" cy="22" r="2.5" fill="#047857" />
            <circle cx="17" cy="21" r="0.8" fill="white" />
            <circle cx="29" cy="21" r="0.8" fill="white" />
            {/* Soft smile */}
            <path d="M20 28 Q24 31 28 28" stroke="#047857" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Cheeks */}
            <circle cx="14" cy="25" r="2.5" fill="#A7F3D0" opacity="0.8" />
            <circle cx="34" cy="25" r="2.5" fill="#A7F3D0" opacity="0.8" />
            {/* Gentle heart */}
            <path d="M36 11 C34 9 32 12 36 15 C40 12 38 9 36 11 Z" fill="#F43F5E" />
          </svg>
        )}

        {mood === 'thinking' && (
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Friendly thinking bacteriophage */}
            <circle cx="24" cy="24" r="20" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="24" cy="24" r="16" fill="#FEF3C7" />
            {/* Curious wide eyes */}
            <circle cx="18" cy="22" r="3" fill="#B45309" />
            <circle cx="30" cy="22" r="3" fill="#B45309" />
            <circle cx="19" cy="21" r="1" fill="white" />
            <circle cx="31" cy="21" r="1" fill="white" />
            {/* Tiny cute 'o' mouth */}
            <circle cx="24" cy="28" r="2" fill="#B45309" />
            {/* Cheeks */}
            <circle cx="14" cy="26" r="2.5" fill="#FDE68A" />
            <circle cx="34" cy="26" r="2.5" fill="#FDE68A" />
          </svg>
        )}

        {mood === 'speed' && (
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full drop-shadow-sm">
            {/* Focused ninja microbe with headband */}
            <circle cx="24" cy="24" r="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="2.5" />
            {/* Headband */}
            <path d="M6 18 Q24 15 42 18" stroke="#F43F5E" strokeWidth="5" strokeLinecap="round" fill="none" />
            {/* Determined eyes */}
            <path d="M16 23 L22 25" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M32 23 L26 25" stroke="#312E81" strokeWidth="2.5" strokeLinecap="round" />
            {/* Sweatdrop */}
            <path d="M37 12 C35 15 39 16 37 18 C35 16 35 15 37 12 Z" fill="#38BDF8" />
            {/* Confident smile */}
            <path d="M21 30 Q24 33 27 30" stroke="#312E81" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        )}
      </div>

      {/* Mascot Speech Bubble / Message */}
      <div className="flex-1 min-w-0">
        <div className="text-xs font-semibold text-rose-600 flex items-center gap-1.5 mb-0.5">
          <span>Bacterio-kun</span>
          <span className="text-[10px] px-1.5 py-0.2 bg-rose-50 text-rose-500 rounded-full font-normal border border-rose-100">
            {mood === 'cheering' ? '✨ ยอดเยี่ยม!' : mood === 'encouraging' ? '🌱 สู้ๆ นะ!' : mood === 'speed' ? '⚡ SIMPIC Drill' : '💭 ชวนคิด'}
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-snug line-clamp-2">
          {message || (
            mood === 'cheering'
              ? 'ตอบถูกแล้ว! จดจำ High-Yield Pearl ไว้เตรียมแข่ง SIMPIC นะ!'
              : mood === 'encouraging'
              ? 'ไม่เป็นไรนะ ข้อนี้เป็นข้อลวงยอดฮิต ลองดู Rationale วิเคราะห์ความต่างดู!'
              : mood === 'speed'
              ? 'โหมดจับเวลา 60 วินาที ฝึกความเร็วแบบ SIMPIC Round 1 & 2!'
              : 'อ่านโจทย์อย่างละเอียด สังเกตตัวแปรทางคลินิกและชื่อวิทยาศาสตร์นะ!'
          )}
        </p>
      </div>
    </div>
  );
};
