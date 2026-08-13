import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Mail, MapPin, Phone, Calendar, Code2, GraduationCap, Briefcase, Award, ExternalLink, User, Star, GitFork, BookOpen, Users, Linkedin, Terminal, Download, Sun, Moon, ShieldCheck, X, LineChart } from 'lucide-react';
import { personalInfo, education, experience, projects, skills, certifications } from './data';

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const getSkillHoverClass = (skill: string) => {
  const s = skill.toLowerCase();
  if (s.includes('java') && !s.includes('javascript')) return 'hover:text-yellow-700 hover:border-yellow-600/50 hover:bg-yellow-50';
  if (s.includes('c/c++') || s === 'c' || s === 'c++') return 'hover:text-blue-700 dark:text-sky-300 dark:hover:text-sky-300 hover:border-blue-600/50 hover:bg-blue-50 dark:bg-sky-500/10';
  if (s.includes('python')) return 'hover:text-yellow-700 hover:border-yellow-500/50 hover:bg-yellow-50';
  if (s.includes('javascript') || s.includes('typescript')) return 'hover:text-yellow-600 hover:border-yellow-500/50 hover:bg-yellow-50';
  if (s.includes('linux')) return 'hover:text-orange-700 hover:border-orange-600/50 hover:bg-orange-50';
  if (s.includes('git')) return 'hover:text-orange-700 hover:border-orange-600/50 hover:bg-orange-50';
  if (s.includes('sql') || s.includes('db') || s.includes('database')) return 'hover:text-sky-700 hover:border-sky-600/50 hover:bg-sky-50';
  if (s.includes('cuda') || s.includes('hip') || s.includes('gpu')) return 'hover:text-emerald-700 hover:border-emerald-600/50 hover:bg-emerald-50';
  if (s.includes('oop') || s.includes('pattern')) return 'hover:text-purple-700 hover:border-purple-600/50 hover:bg-purple-50';
  return 'hover:text-blue-600 dark:hover:text-sky-400 hover:border-blue-500/50 hover:bg-blue-50 dark:bg-sky-500/10';
};

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
  const [githubProfile, setGithubProfile] = useState<GithubProfile | null>(null);
  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [isLoadingGithub, setIsLoadingGithub] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Fetch GitHub Profile and Repos
    const fetchGithubData = async () => {
      try {
        const username = personalInfo.github.split('/').pop();
        if (!username) return;

        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setGithubProfile(profileData);
        }

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (reposRes.ok) {
          const reposData = await reposRes.json();
          
          // The specific repositories the user wants to highlight
          const targetRepos = [
            'SalaryTracker',
            'RACER',
            'WinT',
            'Game-Of-Life-In-Your-Terminal',
            'Progetto-Sicurezza'
          ];
          
          // Filter out only the requested repos and order them as specified
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
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-stone-900 dark:text-white font-sans selection:bg-blue-500/20 selection:dark:bg-sky-500/30">
      
      {/* Navigation (Simple Sticky Header) */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-stone-200 dark:border-slate-800/60 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {githubProfile && (
              <img 
                src="/profile.jpg" 
                onError={(e) => { e.currentTarget.src = githubProfile.avatar_url; }}
                alt={`Foto profilo di ${personalInfo.name}`} 
                className="w-8 h-8 rounded-full border border-stone-200 dark:border-slate-800/60 object-cover shadow-sm" 
              />
            )}
            <span className="font-bold text-xl tracking-tight text-stone-900 dark:text-white">{personalInfo.name}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">Profilo</a>
            <a href="#education" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">Formazione</a>
            <a href="#skills" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">Competenze</a>
            <a href="#experience" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">Esperienza</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">Progetti</a>
            <a href="#github" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors py-1">GitHub</a>
            <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Cambia tema scuro/chiaro" className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors ml-2 flex items-center justify-center">
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-600 dark:text-slate-400" />}
            </button>
          </nav>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Cambia tema scuro/chiaro" className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors">
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-600 dark:text-slate-400" />}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row gap-12 items-center justify-between pt-10">
          <div className="flex-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex items-center gap-6 mb-4"
            >
              {githubProfile && (
                <img 
                  src="/profile.jpg" 
                  onError={(e) => { e.currentTarget.src = githubProfile.avatar_url; }}
                  alt={`Foto profilo di ${personalInfo.name}`} 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white dark:border-slate-800 shadow-xl object-cover ring-1 ring-stone-200 dark:ring-slate-800"
                />
              )}
              <div>
                <h2 className="text-blue-600 dark:text-sky-400 font-bold tracking-wide uppercase text-sm mb-2">{personalInfo.role}</h2>
                <h1 className="text-4xl md:text-6xl font-bold text-stone-900 dark:text-white tracking-tight">
                  Ciao, sono <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-600">{personalInfo.name}.</span>
                </h1>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-lg text-stone-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Appassionato di programmazione di sistema, algoritmi e High Performance Computing, con una solida base accademica e un forte approccio analitico.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="/CV_Valerio_Cola.pdf" target="_blank" rel="noopener noreferrer" download="CV_Valerio_Cola.pdf" aria-label="Scarica il Curriculum Vitae di Valerio Cola" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg font-medium rounded-full transition-all">
                <Download className="w-4 h-4" aria-hidden="true" />
                Scarica CV
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Invia un'email a Valerio Cola" className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900/40 hover:bg-stone-50 dark:hover:bg-slate-800/60 dark:bg-slate-950 text-stone-800 dark:text-slate-200 border border-stone-200 dark:border-slate-800/60 shadow-sm font-medium rounded-full transition-all">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contattami
              </a>
              <a href={personalInfo.github} aria-label="Visita il profilo GitHub di Valerio Cola" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-slate-800 hover:bg-stone-800 dark:hover:bg-slate-700 text-white shadow-sm font-medium rounded-full transition-all">
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
              <a href="https://salarytracker.companyclstudio.workers.dev/" aria-label="Visita il sito web di SalaryTracker" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg font-medium rounded-full transition-all">
                <LineChart className="w-4 h-4" aria-hidden="true" />
                SalaryTracker
              </a>
            </motion.div>
          </div>
          
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="w-full md:w-80 space-y-4"
          >
             <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-stone-200 dark:border-slate-800/60 shadow-sm space-y-4">
                <div className="flex items-center gap-3 text-stone-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-500 dark:text-sky-400" />
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700 dark:text-slate-300">
                  <Mail className="w-5 h-5 text-blue-500 dark:text-sky-400" />
                  <span className="font-medium">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700 dark:text-slate-300">
                  <Phone className="w-5 h-5 text-blue-500 dark:text-sky-400" />
                  <span className="font-medium">{personalInfo.phone}</span>
                </div>
                {githubProfile && (
                  <div className="flex items-center gap-3 text-stone-600 dark:text-slate-400 pt-4 border-t border-stone-100 dark:border-slate-800/60">
                    <Users className="w-5 h-5 text-blue-500 dark:text-sky-400" />
                    <span className="text-sm font-medium">{githubProfile.followers} Follower &middot; {githubProfile.public_repos} Repos</span>
                  </div>
                )}
                {personalInfo.socials && personalInfo.socials.length > 0 && (
                  <div className="pt-4 border-t border-stone-100 dark:border-slate-800/60">
                    <div className="flex flex-wrap gap-2">
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
                            className="flex items-center gap-2 px-3 py-1.5 bg-stone-50 dark:bg-slate-950 text-stone-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-sky-300 text-xs font-medium rounded-full border border-stone-200 dark:border-slate-800/60 hover:border-blue-300 dark:hover:border-sky-500/50 hover:bg-blue-50 dark:hover:bg-sky-500/10 transition-all shadow-sm"
                          >
                            <Icon className="w-3.5 h-3.5" />
                            {social.handle}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
             </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-32">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <User className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Profilo</h2>
            </div>
            
            <div className="bg-white dark:bg-slate-900/40 p-8 md:p-10 rounded-3xl border border-stone-200 dark:border-slate-800/60 shadow-sm relative overflow-hidden group hover:border-blue-200 dark:hover:border-sky-500/30 transition-colors">
              {/* Decorative Element */}
              <div className="absolute -top-12 -right-12 p-12 opacity-[0.03] pointer-events-none transition-transform group-hover:scale-110 group-hover:-rotate-12 duration-700">
                <Terminal className="w-64 h-64 text-blue-900" />
              </div>
              
              <div className="relative z-10 space-y-6">
                <p className="text-xl md:text-2xl font-medium text-stone-800 dark:text-slate-200 leading-relaxed max-w-3xl">
                  Laureato in <span className="text-blue-600 dark:text-sky-400 font-bold">Informatica</span> presso Sapienza Università di Roma con una solida preparazione in <span className="text-stone-900 dark:text-white font-bold">algoritmi, strutture dati e programmazione parallela</span>.
                </p>
                
                <p className="text-stone-600 dark:text-slate-400 text-lg leading-relaxed max-w-4xl">
                  Ho maturato esperienza pratica nello sviluppo di progetti accademici utilizzando <span className="font-medium text-stone-800 dark:text-slate-200">Java, C/C++ e Python</span>, dimostrando una forte attitudine al problem solving, alla programmazione ad oggetti (OOP) e alla progettazione software.
                </p>

                <p className="text-stone-600 dark:text-slate-400 text-lg leading-relaxed max-w-4xl">
                  Particolarmente orientato alla programmazione di sistema e all'High Performance Computing con <span className="font-medium text-stone-800 dark:text-slate-200">OpenMP, MPI, CUDA e HIP</span>, con attenzione all'ottimizzazione delle prestazioni, gestione della memoria, database relazionali e utilizzo dei tool di profiling e debugging in ambiente <span className="font-medium text-stone-800 dark:text-slate-200">Linux</span>.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Education & Certs */}
        <section id="education" className="scroll-mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-sky-400" />
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Formazione</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-stone-200 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-1">{edu.degree}</h3>
                    <div className="text-blue-600 dark:text-sky-400 font-medium text-sm mb-3">{edu.institution}</div>
                    <div className="flex justify-between items-center text-sm text-stone-500 dark:text-slate-400">
                      <span>{edu.period} • {edu.location}</span>
                      <span className="font-semibold text-stone-700 dark:text-slate-300">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-6 h-6 text-blue-600 dark:text-sky-400" />
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Certificazioni</h2>
              </div>
              <div className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-stone-200 dark:border-slate-800/60 shadow-sm space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400"></div>
                    <span className="text-stone-700 dark:text-slate-300 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Code2 className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Competenze</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-stone-200 dark:border-slate-800/60 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className={`px-3 py-1.5 bg-stone-50 dark:bg-slate-950 text-stone-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-stone-200 dark:border-slate-800/60 transition-colors duration-300 cursor-default ${getSkillHoverClass(item)}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-32">
          <FadeIn>
             <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Esperienza Professionale</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 md:pl-0">
                   <div className="md:grid md:grid-cols-4 gap-6 items-start">
                      <div className="hidden md:block text-stone-500 dark:text-slate-400 font-medium text-sm pt-1">
                         {exp.period}
                      </div>
                      <div className="md:col-span-3 relative pb-8 md:pb-0">
                         {/* Timeline line */}
                         <div className="absolute left-[-33px] md:left-[-25px] top-2 w-px h-full bg-stone-200"></div>
                         {/* Timeline dot */}
                         <div className="absolute left-[-37px] md:left-[-29px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>
                         
                         <h3 className="text-xl font-bold text-stone-900 dark:text-white">{exp.title}</h3>
                         <div className="text-blue-600 dark:text-sky-400 font-semibold mb-1">{exp.company} <span className="text-stone-500 dark:text-slate-400 font-normal"> • {exp.location}</span></div>
                         <div className="md:hidden text-stone-500 dark:text-slate-400 font-medium text-sm mb-4">
                           {exp.period}
                         </div>
                         <p className="text-stone-600 dark:text-slate-400 mt-3 leading-relaxed">
                           {exp.description}
                         </p>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-32">
           <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Progetti in Evidenza</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="group bg-white dark:bg-slate-900/40 rounded-3xl border border-stone-200 dark:border-slate-800/60 shadow-sm overflow-hidden hover:shadow-md hover:border-blue-200 dark:hover:border-sky-500/30 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-stone-900 dark:text-white flex items-center gap-3">
                          {project.title}
                          <div className="flex items-center gap-2">
                            <a href={project.githubUrl || personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-stone-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-sky-400 transition-colors" aria-label={`Codice sorgente di ${project.title}`}>
                               <Github className="w-5 h-5" />
                            </a>
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-stone-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-sky-400 transition-colors" aria-label={`Sito live di ${project.title}`}>
                                 <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </h3>
                        <p className="text-blue-600 dark:text-sky-400 font-semibold">{project.subtitle}</p>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 bg-stone-100 dark:bg-slate-900/40 text-stone-600 dark:text-slate-400 font-medium text-sm rounded-full whitespace-nowrap">
                        {project.period}
                      </span>
                    </div>
                    
                    <p className="text-stone-600 dark:text-slate-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-sky-500/10 text-blue-700 dark:text-sky-300 text-xs font-semibold rounded-lg border border-blue-100 dark:border-sky-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
           </FadeIn>
        </section>

        {/* GitHub Repositories Section */}
        <section id="github" className="scroll-mt-32">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Github className="w-6 h-6 text-blue-600 dark:text-sky-400" />
              <h2 className="text-3xl font-bold text-stone-900 dark:text-white">Open Source & GitHub</h2>
            </div>

            {isLoadingGithub ? (
              <div className="flex justify-center items-center py-12">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {githubRepos.map((repo) => (
                  <a 
                    key={repo.id} 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white dark:bg-slate-900/40 p-6 rounded-2xl border border-stone-200 dark:border-slate-800/60 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-sky-500/50 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-lg font-bold text-stone-900 dark:text-white group-hover:text-blue-600 dark:hover:text-sky-400 transition-colors flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-stone-400 dark:text-slate-500 group-hover:text-blue-500 dark:text-sky-400" />
                        {repo.name}
                      </h3>
                    </div>
                    
                    <p className="text-stone-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 min-h-[2.5rem]">
                      {repo.description || "Nessuna descrizione disponibile per questo repository."}
                    </p>
                    
                    <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 dark:text-slate-400 mt-auto">
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-blue-50 dark:bg-sky-500/100"></span>
                          {repo.language}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5" />
                        {repo.forks_count}
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-slate-800 hover:bg-stone-800 dark:hover:bg-slate-700 text-white font-medium rounded-full transition-colors shadow-sm hover:shadow"
                >
                  Vedi tutti i {githubProfile.public_repos} repository su GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </FadeIn>
        </section>

      </main>

      <footer className="border-t border-stone-200 dark:border-slate-800/60 bg-stone-100 dark:bg-slate-900/40 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-stone-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Valerio Cola. Tutti i diritti riservati.</p>
          <div className="flex gap-6 items-center">
            <button 
              onClick={() => setShowPrivacyModal(true)} 
              className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-sky-400" />
              Privacy & Cookie Policy
            </button>
            <a href={personalInfo.github} aria-label="Profilo GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">GitHub</a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Contatto Email" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-sky-400 transition-colors">Contatti</a>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 dark:bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative space-y-4 text-stone-800 dark:text-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-slate-800">
              <div className="flex items-center gap-2 font-bold text-lg text-stone-900 dark:text-white">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-sky-400" />
                Privacy & Cookie Policy
              </div>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-slate-800 text-stone-500 dark:text-slate-400 transition-colors"
                aria-label="Chiudi"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3 text-sm leading-relaxed text-stone-600 dark:text-slate-300">
              <p>
                <strong>Informativa sulla Privacy e sui Cookie (GDPR):</strong>
              </p>
              <p>
                Questo sito web è un portfolio personale a scopo informativo e non commerciale.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-stone-600 dark:text-slate-400">
                <li><strong>Nessun Cookie di Tracciamento:</strong> Non vengono utilizzati cookie di profilazione, tracciamento o analitici di terze parti (es. Google Analytics).</li>
                <li><strong>Assenza di Dati Personali Raccoglibili:</strong> Il sito non raccoglie nè memorizza dati personali tramite form o database.</li>
                <li><strong>Contatti:</strong> Se invii un'email all'indirizzo indicato, i tuoi dati saranno trattati solo ed esclusivamente per rispondere alla richiesta.</li>
              </ul>
              <p className="text-xs text-stone-500 dark:text-slate-500 pt-2 border-t border-stone-100 dark:border-slate-800/80">
                In conformità con il Regolamento UE 2016/679 (GDPR) e le direttive ePrivacy.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-5 py-2 bg-stone-900 hover:bg-stone-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
              >
                Ho capito
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

