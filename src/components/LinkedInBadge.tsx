import { Linkedin, ExternalLink } from 'lucide-react';

interface LinkedInBadgeProps {
  isDarkMode?: boolean;
  lang?: string;
  size?: 'medium' | 'large';
  vanity?: string;
}

export function LinkedInBadge({
  lang = 'it',
  vanity = 'valerio-cola',
}: LinkedInBadgeProps) {
  const profileUrl = `https://it.linkedin.com/in/${vanity}`;

  return (
    <div className="w-full pt-1">
      <div className="w-full max-w-md bg-white dark:bg-[#1b1f24] border border-slate-200 dark:border-slate-800/90 rounded-2xl p-4 shadow-sm hover:border-[#0a66c2]/40 transition-all">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Valerio Cola"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-[#0a66c2]/20"
              />
              <div className="absolute -bottom-1 -right-1 bg-[#0a66c2] text-white p-0.5 rounded-full ring-2 ring-white dark:ring-[#1b1f24]">
                <Linkedin className="w-3 h-3" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                  Valerio Cola
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                {lang === 'it' 
                  ? 'Junior Software Developer · Sapienza Università di Roma' 
                  : 'Junior Software Developer · Sapienza University of Rome'}
              </p>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                Roma, Lazio, Italia
              </p>
            </div>
          </div>

          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 bg-[#0a66c2] hover:bg-[#004182] text-white text-xs font-semibold rounded-full transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>{lang === 'it' ? 'Visualizza' : 'View'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
