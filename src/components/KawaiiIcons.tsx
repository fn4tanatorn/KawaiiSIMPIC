import React from 'react';

export const PetriIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" className="text-rose-400" />
    <circle cx="12" cy="12" r="7.5" fill="#FFF1F2" stroke="currentColor" strokeWidth="1" strokeDasharray="1.5 2" className="text-rose-300" />
    <circle cx="9.5" cy="9.5" r="1.8" fill="#10B981" />
    <circle cx="14.5" cy="9" r="2.2" fill="#F59E0B" />
    <circle cx="12" cy="15" r="2.5" fill="#6366F1" />
  </svg>
);

export const MicroscopeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 21H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-400" />
    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" className="text-slate-400" />
    <path d="M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-slate-400" />
    <path d="M15 6L11 2L8 5L12 9L15 6Z" fill="#FDF2F8" stroke="#F43F5E" strokeWidth="1.8" />
    <circle cx="8" cy="14" r="4" stroke="#0EA5E9" strokeWidth="1.8" />
    <path d="M12 14H16" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const PhageIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    {/* Icosahedral Head */}
    <path d="M12 3L16.5 6V11L12 14L7.5 11V6L12 3Z" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.6" />
    {/* Sheath */}
    <line x1="12" y1="14" x2="12" y2="19" stroke="#6366F1" strokeWidth="2" />
    {/* Baseplate and tail fibers */}
    <path d="M8 21L12 19L16 21" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 19L6 22" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M15 19L18 22" stroke="#6366F1" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);
