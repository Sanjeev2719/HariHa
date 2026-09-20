import React from 'react';

interface HarihaLogoProps {
  className?: string;
  variant?: 'mark' | 'full' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  dark?: boolean;
}

export function HarihaRoofIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M 12 55 L 45 23 L 56 32 V 23 H 64 V 38 L 88 56"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HarihaLogo({
  className = '',
  variant = 'full',
  size = 'md',
  showTagline = true,
  dark = false
}: HarihaLogoProps) {
  const sizeMap = {
    sm: {
      badge: 'w-8 h-8 rounded-lg',
      icon: 'w-4 h-4',
      title: 'text-sm tracking-[0.12em]',
      tagline: 'text-[7px] tracking-[0.15em]',
      dot: 'w-1.5 h-1.5'
    },
    md: {
      badge: 'w-10 h-10 rounded-xl',
      icon: 'w-5 h-5',
      title: 'text-lg md:text-xl tracking-[0.14em]',
      tagline: 'text-[8px] md:text-[8.5px] tracking-[0.22em]',
      dot: 'w-1.5 h-1.5'
    },
    lg: {
      badge: 'w-12 h-12 rounded-2xl',
      icon: 'w-6 h-6',
      title: 'text-xl md:text-2xl tracking-[0.14em]',
      tagline: 'text-[9px] md:text-[10px] tracking-[0.24em]',
      dot: 'w-2 h-2'
    },
    xl: {
      badge: 'w-16 h-16 rounded-2xl',
      icon: 'w-8 h-8',
      title: 'text-2xl md:text-3xl tracking-[0.14em]',
      tagline: 'text-[10px] md:text-xs tracking-[0.26em]',
      dot: 'w-2.5 h-2.5'
    }
  };

  const currentSize = sizeMap[size];

  // Standalone red badge like the official brand card
  if (variant === 'badge') {
    return (
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#EF3833] via-[#E52521] to-[#C71814] text-white p-4 rounded-3xl shadow-[0_12px_32px_rgba(229,37,33,0.35)] border border-white/25 flex flex-col items-center justify-center text-center ${className}`}
      >
        <div className="w-14 h-12 mb-1.5 text-white">
          <HarihaRoofIcon />
        </div>
        <span className="font-display font-black text-xl md:text-2xl tracking-tight leading-none text-white drop-shadow-sm">
          Hariha Infra
        </span>
        <span className="text-[9px] md:text-[10px] font-sans font-semibold tracking-wider text-white/95 mt-1">
          Building dream homes since 2002
        </span>
      </div>
    );
  }

  // Just the emblem / mark
  if (variant === 'mark') {
    return (
      <div
        className={`relative bg-gradient-to-br from-[#EF3833] via-[#E52521] to-[#C71814] text-white p-1.5 shadow-[0_4px_16px_rgba(229,37,33,0.4)] border border-white/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${currentSize.badge} ${className}`}
      >
        <div className={`${currentSize.icon} text-white`}>
          <HarihaRoofIcon />
        </div>
      </div>
    );
  }

  // Full lockup: Emblem + Typography + Tagline
  return (
    <div className={`flex items-center space-x-3 text-left group/logo ${className}`}>
      {/* Official Enhanced Red Squircle Emblem */}
      <div
        className={`relative bg-gradient-to-br from-[#EF3833] via-[#E52521] to-[#C71814] text-white p-1.5 shadow-[0_4px_18px_rgba(229,37,33,0.38)] border border-white/30 flex items-center justify-center shrink-0 group-hover/logo:scale-105 group-hover/logo:shadow-[0_6px_24px_rgba(229,37,33,0.55)] transition-all duration-300 ${currentSize.badge}`}
      >
        <div className={`${currentSize.icon} text-white`}>
          <HarihaRoofIcon />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5">
          <span
            className={`font-display font-black leading-tight transition-colors duration-300 ${
              dark ? 'text-[#F4F7FC] group-hover/logo:text-[#FF5252]' : 'text-[#0F172A] group-hover/logo:text-[#E52521]'
            } ${currentSize.title}`}
          >
            HARIHA INFRA
          </span>
          <span className={`inline-block rounded-full bg-[#E52521] animate-pulse ${currentSize.dot}`} />
        </div>
        {showTagline && (
          <span
            className={`font-sans font-bold uppercase transition-colors ${
              dark ? 'text-[#F4F7FC]/70 group-hover/logo:text-white' : 'text-[#475569] group-hover/logo:text-[#0F172A]'
            } ${currentSize.tagline}`}
          >
            Building dream homes since 2002
          </span>
        )}
      </div>
    </div>
  );
}
