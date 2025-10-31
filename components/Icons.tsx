
import React from 'react';

type IconProps = {
  className?: string;
};

export const UploadIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

export const PersonIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export const GarmentIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 21v-5.25a2.25 2.25 0 012.25-2.25h6.75a2.25 2.25 0 012.25 2.25V21m-12-12.75h12.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 6.75c0-1.518 1.232-2.75 2.75-2.75h11.5c1.518 0 2.75 1.232 2.75 2.75M3.75 6.75v9.75" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.528l-.259 1.035-.259-1.035a3.375 3.375 0 00-2.455-2.456L13.5 18l1.036.259a3.375 3.375 0 002.455 2.456l.259 1.035z" />
    </svg>
);

export const LogoIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.12 14.12c-.39.39-1.02.39-1.41 0L12 14.41l-1.71 1.71c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 13l-1.71-1.71c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 11.59l1.71-1.71c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 13l1.71 1.71c.39.38.39 1.02 0 1.41zM19.16 9.61c-.19-.52-.52-.96-.96-1.28l-1.73-1.26c-.11-.08-.25-.08-.36 0l-.8.58c-.11.08-.18.21-.18.34v.21c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2.09c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.09c0 .28-.22.5-.5.5s-.5-.22-.5-.5V6.75c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.09c0 .28-.22.5-.5.5s-.5-.22-.5-.5V6.15c0-.13-.07-.26-.18-.34l-.8-.58c-.11-.08-.25-.08-.36 0l-1.73 1.26c-.44.32-.77.76-.96 1.28-.19.52-.19 1.09 0 1.61.19.52.52.96.96 1.28l1.73 1.26c.11.08.25.08.36 0l.8-.58c.11-.08.18-.21.18-.34v-2.09c0-.28.22-.5.5-.5s.5.22.5.5v2.09c0 .28.22.5.5.5s.5-.22.5.5V9.76c0 .28.22.5.5.5s.5-.22.5.5v2.09c0 .28.22.5.5.5s.5-.22.5.5v2.09c0 .13.07.26.18.34l.8.58c.11.08.25.08.36 0l1.73-1.26c.44-.32.77-.76.96-1.28.19-.52.19-1.09 0-1.61z"/>
  </svg>
);
