import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Mail, 
  MapPin, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Award, 
  ExternalLink, 
  User, 
  Star, 
  GitFork, 
  BookOpen, 
  Users, 
  Linkedin, 
  Terminal, 
  Download, 
  Sun, 
  Moon, 
  ShieldCheck, 
  X, 
  LineChart, 
  Copy, 
  Check,
  Cpu,
  Layers,
  Activity,
  Globe,
  Zap,
  CheckCircle2,
  Server,
  Binary,
  Languages
} from 'lucide-react';
import { personalInfo } from './data';
import { translations, Language } from './i18n';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const getSkillBadgeStyle = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('cuda') || s.includes('hip') || s.includes('gpu')) {
    return 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20 hover:border-emerald-500/50';
  }
  if (s.includes('c++') || s === 'c' || s.includes('openmp') || s.includes('mpi')) {
    return 'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20 hover:border-sky-500/50';
  }
  if (s.includes('java')) {
    return 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:border-amber-500/50';
  }
  if (s.includes('python')) {
    return 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20 hover:border-blue-500/50';
  }
  if (s.includes('linux') || s.includes('posix') || s.includes('valgrind') || s.includes('gdb') || s.includes('bash')) {
    return 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20 hover:border-orange-500/50';
  }
  if (s.includes('sql') || s.includes('relazionali') || s.includes('relational')) {
    return 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20 hover:border-indigo-500/50';
  }
  return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:border-slate-400';
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// GitHub API Types
interface GithubProfile {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export default function App() {
  const [lang, setLang] = useState<Language>('it');
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [isLoadingGithub, setIsLoadingGithub] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const t = translations[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Update document lang attribute
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    // Fetch GitHub Profile and Repos concurrently (non-blocking)
    const fetchGithubData = async () => {
      const username = personalInfo.github.split('/').pop();
      if (!username) {
        setIsLoadingGithub(false);
        return;
      }

      try {
        const [profileRes, reposRes] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
        ]);

        if (profileRes.status === 'fulfilled' && profileRes.value.ok) {
          const profileData = await profileRes.value.json();
          setGithubProfile(profileData);
        }

        if (reposRes.status === 'fulfilled' && reposRes.value.ok) {
          const reposData = await reposRes.value.json();
          
          // Target repos to highlight
          const targetRepos = [
            'SalaryTracker',
            'RACER',
            'WinT',
            'Game-Of-Life-In-Your-Terminal',
            'Progetto-Sicurezza'
          ];
          
          const filteredRepos = reposData
            .filter((r: GithubRepo) => targetRepos.includes(r.name))
            .sort((a: GithubRepo, b: GithubRepo) => targetRepos.indexOf(a.name) - targetRepos.indexOf(b.name));
            
          setGithubRepos(filteredRepos);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setIsLoadingGithub(false);
      }
    };

    fetchGithubData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500/20 selection:dark:bg-sky-500/30">
      
      {/* Navigation (Precision Header) */}
      <header className="fixed top-0 w-full z-50 bg-white/85 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-3">
            <picture className="w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-center bg-slate-100 dark:bg-slate-900">
              <source srcSet="/profile.webp" type="image/webp" />
              <img 
                src="/profile.jpg" 
                alt={`Foto profilo di ${personalInfo.name}`} 
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover" 
              />
            </picture>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-slate-900 dark:text-white leading-none">{personalInfo.name}</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">{t.nav.about}</a>
            <a href="#skills" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">{t.nav.skills}</a>
            <a href="#projects" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">{t.nav.projects}</a>
            <a href="#experience" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">{t.nav.experience}</a>
            <a href="#education" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">{t.nav.education}</a>
            <a href="#github" className="px-3 py-1.5 rounded-lg hover:text-blue-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all">GitHub</a>
            
            <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 mx-2"></div>

            {/* Language Switcher */}
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              aria-label={`Cambia lingua (attuale: ${lang.toUpperCase()})`}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-100/80 dark:bg-slate-800/80 text-xs font-mono font-bold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>{lang === 'it' ? 'EN' : 'IT'}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              aria-label="Cambia tema scuro/chiaro" 
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center justify-center cursor-pointer"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
              aria-label={`Cambia lingua (attuale: ${lang.toUpperCase()})`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-slate-800 dark:text-slate-200"
            >
              <Languages className="w-3.5 h-3.5 text-blue-600 dark:text-sky-400" />
              <span>{lang === 'it' ? 'EN' : 'IT'}</span>
            </button>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              aria-label="Cambia tema scuro/chiaro" 
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-20 space-y-24 relative z-10">
        
        {/* Hero Section: Systems & HPC Split-View */}
        <section id="hero" className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Core Identity & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Profile Head & Title */}
              <div className="flex items-center gap-5">
                <picture className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-200 dark:border-slate-800 shadow-md bg-slate-100 dark:bg-slate-900">
                  <source srcSet="/profile.webp" type="image/webp" />
                  <img 
                    src="/profile.jpg" 
                    alt={`Foto profilo di ${personalInfo.name}`} 
                    width={400}
                    height={400}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover" 
                  />
                </picture>
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400 mb-1">
                    {t.hero.institution}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                    {personalInfo.name}
                  </h1>
                  <p className="text-base md:text-lg font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {t.hero.role}
                  </p>
                </div>
              </div>

              {/* Bio Pitch */}
              <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                {lang === 'it' ? (
                  <>
                    Laureato in <strong className="text-slate-900 dark:text-white">Informatica</strong> con focus su <span className="text-blue-600 dark:text-sky-400 font-semibold">programmazione di sistema, C/C++ e High Performance Computing</span>. Esperienza pratica su architetture parallele (MPI, OpenMP, CUDA, HIP), algoritmi e sviluppo distribuito.
                  </>
                ) : (
                  <>
                    Graduated in <strong className="text-slate-900 dark:text-white">Computer Science</strong> with a focus on <span className="text-blue-600 dark:text-sky-400 font-semibold">systems programming, C/C++, and High Performance Computing</span>. Hands-on experience with parallel architectures (MPI, OpenMP, CUDA, HIP), algorithms, and distributed computing.
                  </>
                )}
              </p>

              {/* Action Buttons Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a 
                  href="/CV_Valerio_Cola.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download="CV_Valerio_Cola.pdf" 
                  aria-label="Scarica il Curriculum Vitae di Valerio Cola" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow font-medium text-sm rounded-xl transition-all"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {t.hero.downloadCv}
                </a>
                
                <button 
                  onClick={() => setShowContactModal(true)} 
                  aria-label="Invia un'email a Valerio Cola" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 shadow-xs font-medium text-sm rounded-xl transition-all cursor-pointer"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {t.hero.contactMe}
                </button>

                <a 
                  href={personalInfo.github} 
                  aria-label="Visita il profilo GitHub di Valerio Cola" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white shadow-xs font-medium text-sm rounded-xl transition-all"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  GitHub
                </a>

                <a 
                  href="https://salarytracker.valeriocola.it/" 
                  aria-label="Visita il sito web di SalaryTracker" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white shadow-xs font-medium text-sm rounded-xl transition-all"
                >
                  <LineChart className="w-4 h-4" aria-hidden="true" />
                  SalaryTracker
                </a>
              </div>

              {/* Social Pills */}
              {personalInfo.socials && personalInfo.socials.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">Social:</span>
                  {personalInfo.socials.map((social, idx) => {
                    let Icon: any = Github;
                    if (social.name === "LinkedIn") Icon = Linkedin;
                    if (social.name === "X") Icon = XIcon;
                    
                    return (
                      <a 
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-sky-400 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800 hover:border-slate-400 transition-all shadow-xs"
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {social.handle}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Col: Interactive Systems Console / Spec Box */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 shadow-xl overflow-hidden font-mono text-xs">
                
                {/* Terminal Header */}
                <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="ml-2 text-slate-400 text-[11px] font-sans font-medium">valerio@cola:~$</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-emerald-400">online</span>
                  </div>
                </div>

                {/* Terminal Body - Unified View */}
                <div className="p-5 space-y-4 leading-relaxed">
                  
                  {/* System & Architecture */}
                  <div className="space-y-1.5">
                    <div className="text-slate-400 font-semibold text-[11px]">{t.terminal.specsTitle}</div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-400 font-semibold">{t.terminal.osLabel}</span>
                      <span className="col-span-2 text-emerald-400">Windows 11, Ubuntu, WSL</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-400 font-semibold">{t.terminal.degreeLabel}</span>
                      <span className="col-span-2 text-slate-200">{t.terminal.degreeValue}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-400 font-semibold">{t.terminal.coreStackLabel}</span>
                      <span className="col-span-2 text-sky-400">C, C++, CUDA, MPI, Java, Python, SQL</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <span className="text-slate-400 font-semibold">{t.terminal.toolsLabel}</span>
                      <span className="col-span-2 text-amber-300">VSCode, WSL, Git, Valgrind, Make</span>
                    </div>
                  </div>

                  {/* Quick Reach & Coordinates */}
                  <div className="pt-3 border-t border-slate-800 space-y-2">
                    <div className="text-slate-400 font-semibold text-[11px]">{t.terminal.contactTitle}</div>
                    <div className="flex items-center justify-between p-2 rounded bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-300 truncate text-[11px]">{personalInfo.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[10px] font-sans flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        {copiedEmail ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        {copiedEmail ? t.terminal.copied : t.terminal.copy}
                      </button>
                    </div>
                    {githubProfile && (
                      <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-300">
                        <Users className="w-3.5 h-3.5 text-sky-400" />
                        <span>{githubProfile.followers} {t.terminal.followers} &middot; {githubProfile.public_repos} {t.terminal.repositories}</span>
                      </div>
                    )}
                  </div>

                  {/* Terminal Prompt line */}
                  <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-slate-500 text-[11px]">
                    <span className="text-emerald-400">➜</span>
                    <span className="text-sky-400">~/valeriocola</span>
                    <span className="animate-pulse text-slate-200">_</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* About / Profile Section */}
        <section id="about" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.about.title}</h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{t.about.subtitle}</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900/70 p-8 md:p-10 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs relative overflow-hidden group hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="space-y-5 text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed">
                {lang === 'it' ? (
                  <>
                    <p className="text-lg md:text-xl font-medium text-slate-900 dark:text-slate-100">
                      Laureato in <span className="text-blue-600 dark:text-sky-400 font-bold">Informatica</span> presso Sapienza Università di Roma con una solida preparazione in <span className="text-slate-900 dark:text-white font-bold">algoritmi, strutture dati e programmazione parallela</span>.
                    </p>
                    
                    <p>
                      Ho maturato esperienza pratica nello sviluppo di progetti accademici e di ricerca utilizzando <span className="font-semibold text-slate-900 dark:text-white">Java, C/C++ e Python</span>, dimostrando una forte attitudine al problem solving, alla programmazione ad oggetti (OOP), ai design pattern e alla progettazione software strutturata.
                    </p>

                    <p>
                      Particolarmente orientato alla programmazione di sistema e all'High Performance Computing con <span className="font-semibold text-slate-900 dark:text-white">OpenMP, MPI, CUDA e HIP</span>, con costante attenzione all'ottimizzazione delle prestazioni, gestione efficiente della memoria, database relazionali e utilizzo dei tool avanzati di profiling e debugging in ambiente <span className="font-semibold text-slate-900 dark:text-white">Linux</span>.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-lg md:text-xl font-medium text-slate-900 dark:text-slate-100">
                      Graduated in <span className="text-blue-600 dark:text-sky-400 font-bold">Computer Science</span> from Sapienza University of Rome with solid preparation in <span className="text-slate-900 dark:text-white font-bold">algorithms, data structures, and parallel computing</span>.
                    </p>
                    
                    <p>
                      I have gained hands-on experience developing academic and research projects in <span className="font-semibold text-slate-900 dark:text-white">Java, C/C++, and Python</span>, demonstrating a strong aptitude for analytical problem solving, object-oriented programming (OOP), design patterns, and structured software architecture.
                    </p>

                    <p>
                      Specially focused on low-level systems and High Performance Computing using <span className="font-semibold text-slate-900 dark:text-white">OpenMP, MPI, CUDA, and HIP</span>, with constant emphasis on execution efficiency, rigorous memory management, relational databases, and advanced debugging/profiling toolchains in <span className="font-semibold text-slate-900 dark:text-white">Linux</span> environments.
                    </p>
                  </>
                )}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Skills Bento Grid (Layered Systems Architecture) */}
        <section id="skills" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.skills.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.skills.groups.map((skillGroup, idx) => {
                let GroupIcon = Code2;
                if (skillGroup.icon === 'cpu') GroupIcon = Cpu;
                if (skillGroup.icon === 'layers') GroupIcon = Layers;
                if (skillGroup.icon === 'terminal') GroupIcon = Terminal;
                if (skillGroup.icon === 'globe') GroupIcon = Globe;

                return (
                  <div 
                    key={idx} 
                    className="bg-white dark:bg-slate-900/70 p-6 md:p-7 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          <GroupIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{skillGroup.category}</h3>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">{skillGroup.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {skillGroup.items.map((item, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-colors duration-200 cursor-default ${getSkillBadgeStyle(item)}`}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                <ExternalLink className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.projects.title}</h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{t.projects.subtitle}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {t.projects.items.map((project, idx) => (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900/70 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs overflow-hidden hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all p-7 md:p-8 space-y-5"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {project.title}
                        </h3>
                        {project.highlights && project.highlights.map((h, i) => (
                          <span key={i} className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-700 dark:text-sky-400 border border-blue-500/20">
                            {h}
                          </span>
                        ))}
                      </div>
                      <p className="text-blue-700 dark:text-sky-400 font-semibold text-sm mt-1">{project.subtitle}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-xs font-medium rounded-lg">
                        {project.period}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono rounded-md border border-slate-200 dark:border-slate-700/60">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                          aria-label={`Codice sorgente di ${project.title}`}
                        >
                          <Github className="w-3.5 h-3.5" />
                          {t.projects.viewCode}
                        </a>
                      )}
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                          aria-label={`Sito live di ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t.projects.viewDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Experience & Research Section */}
        <section id="experience" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.experience.title}</h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{t.experience.subtitle}</p>
              </div>
            </div>

            <div className="space-y-6">
              {t.experience.items.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                  <div className="md:grid md:grid-cols-4 gap-6 items-start">
                    <div className="hidden md:block text-slate-600 dark:text-slate-400 font-mono text-xs pt-1.5">
                      {exp.period}
                    </div>
                    <div className="md:col-span-3 relative pb-6 md:pb-0">
                      {/* Timeline line */}
                      <div className="absolute left-[-33px] md:left-[-25px] top-2 w-px h-full bg-slate-300 dark:bg-slate-800"></div>
                      {/* Timeline dot */}
                      <div className="absolute left-[-37px] md:left-[-29px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900/40"></div>
                      
                      <div className="bg-white dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                        <div className="text-blue-700 dark:text-sky-400 font-semibold text-sm mb-1">
                          {exp.company} <span className="text-slate-500 dark:text-slate-400 font-normal"> · {exp.location}</span>
                        </div>
                        <div className="md:hidden text-slate-600 dark:text-slate-400 font-mono text-xs mb-3">
                          {exp.period}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mt-3 leading-relaxed text-sm md:text-base">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Education & Certifications (Combined Grid) */}
        <section id="education" className="scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Education */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.education.title}</h2>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{t.education.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {t.education.items.map((edu, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 shrink-0">
                          {edu.grade}
                        </span>
                      </div>
                      <div className="text-blue-700 dark:text-sky-400 font-semibold text-sm mb-2">{edu.institution}</div>
                      <div className="text-xs font-mono text-slate-600 dark:text-slate-400">
                        {edu.period} · {edu.location}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.education.certificationsTitle}</h2>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Attestati e qualifiche</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs space-y-4">
                  {t.education.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                      <span className="text-slate-800 dark:text-slate-200 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </section>

        {/* GitHub Repositories Section */}
        <section id="github" className="scroll-mt-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-sky-400 border border-blue-500/20">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Open Source & Repository GitHub</h2>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{lang === 'it' ? 'Codice pubblico, algoritmi e progetti' : 'Public code, algorithms and projects'}</p>
              </div>
            </div>

            {isLoadingGithub ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-busy="true" aria-label="Caricamento repository in corso...">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="bg-white dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs animate-pulse space-y-4"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-5 w-36 bg-slate-200 dark:bg-slate-800 rounded-md"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="h-3.5 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-3.5 w-10 bg-slate-200 dark:bg-slate-800 rounded"></div>
                      <div className="h-3.5 w-10 bg-slate-200 dark:bg-slate-800 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {githubRepos.map((repo) => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs hover:shadow-md hover:border-blue-400 dark:hover:border-sky-500/50 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2.5">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-sky-400 transition-colors flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-sky-400" />
                        {repo.name}
                      </h3>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-5 line-clamp-2 min-h-[2.5rem] leading-relaxed">
                      {repo.description || (lang === 'it' ? "Nessuna descrizione disponibile per questo repository." : "No description available for this repository.")}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/50">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-sky-400"></span>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
            
            {githubProfile && (
              <div className="mt-8 text-center">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium text-sm rounded-xl transition-colors shadow-xs hover:shadow"
                >
                  {lang === 'it' 
                    ? `Visualizza tutti i ${githubProfile.public_repos} repository su GitHub`
                    : `View all ${githubProfile.public_repos} repositories on GitHub`}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </FadeIn>
        </section>

      </main>

      {/* Footer (Accessibility and High Contrast compliant) */}
      <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-slate-900/60 mt-16 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
          <p>© {new Date().getFullYear()} Valerio Cola. {t.footer.allRightsReserved}</p>
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => setShowPrivacyModal(true)} 
              className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-blue-700 dark:text-sky-400" />
              {t.footer.privacyPolicy}
            </button>
            <a href={personalInfo.github} aria-label="Profilo GitHub" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 transition-colors">GitHub</a>
            <button onClick={() => setShowContactModal(true)} aria-label="Contatto Email" className="text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 transition-colors cursor-pointer">{t.nav.contact}</button>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-5 text-slate-800 dark:text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
                <Mail className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                {t.contactModal.title}
              </div>
              <button 
                onClick={() => setShowContactModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors cursor-pointer"
                aria-label={t.contactModal.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              {t.contactModal.subtitle}
            </p>

            {/* Email Box with Copy */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">{t.contactModal.emailLabel}</div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm md:text-base font-bold text-slate-900 dark:text-white truncate">
                  {personalInfo.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors shadow-xs shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      {t.contactModal.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      {t.contactModal.copy}
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Webmail & App Action Links */}
            <div className="grid grid-cols-1 gap-2.5">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors shadow-xs"
              >
                <Mail className="w-4 h-4" />
                {lang === 'it' ? 'Apri in Gmail Web (Desktop / PC)' : 'Open in Gmail Web (Desktop / PC)'}
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center justify-center gap-2 p-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                {lang === 'it' ? 'Apri Client Email Predefinito (Mobile)' : 'Open Default Email App (Mobile)'}
              </a>
            </div>

            {/* Location */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5 text-sm">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs">
                <MapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>{lang === 'it' ? personalInfo.location : 'Rome, Italy'}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowContactModal(false)}
                className="px-5 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium rounded-xl transition-colors cursor-pointer"
              >
                {t.contactModal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4 text-slate-800 dark:text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                {t.privacyModal.title}
              </div>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
                aria-label={t.privacyModal.close}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {t.privacyModal.sections.map((sec, idx) => (
                <div key={idx}>
                  <p className="font-semibold text-slate-900 dark:text-white">{sec.title}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{sec.content}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium rounded-xl transition-colors shadow-xs"
              >
                {t.privacyModal.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


