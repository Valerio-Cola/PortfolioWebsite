export type Language = 'it' | 'en';

export interface TranslationData {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    institution: string;
    role: string;
    bioStrong: string;
    bioFocus: string;
    bioRest: string;
    downloadCv: string;
    contactMe: string;
    viewProjects: string;
    statsYears: string;
    statsDegree: string;
    statsParallel: string;
    statsProjects: string;
    systemsDev: string;
  };
  terminal: {
    specsTitle: string;
    osLabel: string;
    degreeLabel: string;
    degreeValue: string;
    coreStackLabel: string;
    toolsLabel: string;
    contactTitle: string;
    followers: string;
    repositories: string;
    copied: string;
    copy: string;
  };
  about: {
    title: string;
    subtitle: string;
    text: string;
    keyValuesTitle: string;
    strengthsTitle: string;
    keyPoints: {
      title: string;
      desc: string;
    }[];
  };
  skills: {
    title: string;
    groups: {
      category: string;
      icon: string;
      description: string;
      items: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    viewDemo: string;
    githubActive: string;
    items: {
      title: string;
      subtitle: string;
      period: string;
      description: string;
      tags: string[];
      githubUrl: string;
      demoUrl?: string;
      highlights: string[];
    }[];
  };
  experience: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      company: string;
      period: string;
      location: string;
      description: string;
    }[];
  };
  education: {
    title: string;
    subtitle: string;
    items: {
      degree: string;
      institution: string;
      period: string;
      location: string;
      grade: string;
    }[];
    certificationsTitle: string;
    certifications: string[];
  };
  contactModal: {
    title: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    writeDirectly: string;
    copy: string;
    copied: string;
    close: string;
  };
  privacyModal: {
    title: string;
    subtitle: string;
    close: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
  footer: {
    allRightsReserved: string;
    developedWith: string;
    privacyPolicy: string;
  };
}

export const translations: Record<Language, TranslationData> = {
  it: {
    nav: {
      about: "Profilo",
      skills: "Competenze",
      projects: "Progetti",
      experience: "Esperienza",
      education: "Formazione",
      contact: "Contattami"
    },
    hero: {
      institution: "Sapienza Università di Roma",
      role: "Junior Software Developer",
      bioStrong: "Informatica",
      bioFocus: "programmazione di sistema, C/C++ e High Performance Computing",
      bioRest: "Esperienza pratica su architetture parallele (MPI, OpenMP, CUDA, HIP), algoritmi e sviluppo distribuito.",
      downloadCv: "Scarica CV (PDF)",
      contactMe: "Contattami",
      viewProjects: "Vedi Progetti",
      statsYears: "Anni di Studio Accademico",
      statsDegree: "Laurea in Informatica",
      statsParallel: "Parallelo (CUDA, MPI)",
      statsProjects: "Progetti Chiave",
      systemsDev: "Sviluppatore Software"
    },
    terminal: {
      specsTitle: "# System Specs & Stack",
      osLabel: "OS / Env:",
      degreeLabel: "Degree:",
      degreeValue: "Laurea in Informatica (101/110)",
      coreStackLabel: "Core Stack:",
      toolsLabel: "Tools:",
      contactTitle: "# Quick Reach & Coordinates",
      followers: "Follower",
      repositories: "Repositories",
      copied: "Copiato",
      copy: "Copia"
    },
    about: {
      title: "Profilo & Visione Tecnica",
      subtitle: "Background accademico",
      text: "Laureato in Informatica presso Sapienza Università di Roma con una solida preparazione in algoritmi, strutture dati e programmazione parallela. Ho maturato esperienza pratica nello sviluppo di progetti accademici utilizzando Java, C/C++ e Python, dimostrando una forte attitudine al problem solving, alla programmazione ad oggetti (OOP) e alla progettazione software.",
      keyValuesTitle: "Aree di Competenza & Approccio",
      strengthsTitle: "Punti di Forza",
      keyPoints: [
        {
          title: "Sviluppo di Sistema & Ottimizzazione",
          desc: "Forte orientamento alle prestazioni, gestione puntuale della memoria e programmazione vicina all'hardware."
        },
        {
          title: "Calcolo Parallelo & Concorrente",
          desc: "Esperienza con paradigmi a memoria condivisa (OpenMP) e distribuita (MPI), accelerazione GPU con CUDA."
        },
        {
          title: "Metodologia & Ingegneria Software",
          desc: "Progettazione orientata agli oggetti, design pattern, complessità algoritmica e testing rigoroso."
        }
      ]
    },
    skills: {
      title: "Competenze Tecniche",
      groups: [
        {
          category: "Programmazione di Sistema & HPC",
          icon: "cpu",
          description: "Sviluppo a basso livello, concorrenza e calcolo ad alte prestazioni",
          items: ["C", "C++", "OpenMP", "MPI", "CUDA (NVIDIA)", "HIP (AMD)", "Gestione Memoria", "POSIX / Linux API"]
        },
        {
          category: "Sviluppo Software & Paradigmi",
          icon: "layers",
          description: "Ingegneria del software, programmazione orientata agli oggetti e algoritmi",
          items: ["Java", "Python", "OOP", "Design Pattern", "DB Relazionali (SQL)", "Complessità Algoritmica"]
        },
        {
          category: "Ambiente di Sviluppo & Profiling",
          icon: "terminal",
          description: "Toolchain di compilazione, analisi prestazionale e debugging",
          items: ["Linux", "Git", "Bash", "Valgrind", "GDB", "Make / CMake", "Profiling Tools"]
        },
        {
          category: "Lingue & Comunicazione",
          icon: "globe",
          description: "Competenze linguistiche per contesti internazionali",
          items: ["Italiano (Madrelingua)", "Inglese (Competente)", "Spagnolo (Conversazionale)"]
        }
      ]
    },
    projects: {
      title: "Progetti in Evidenza",
      subtitle: "Sistemi distribuiti, HPC, e Web App",
      viewCode: "Codice",
      viewDemo: "Demo Live",
      githubActive: "Visualizza su GitHub",
      items: [
        {
          title: "RACER",
          subtitle: "Raspberry & Arduino Car for Environmental Recognition",
          period: "02/2024 – 06/2025",
          description: "Sistema di guida autonoma basato su un'architettura distribuita che integra un Raspberry Pi Zero 2W per la visione artificiale e un Arduino Mega 2560 per il controllo dei motori. Il progetto utilizza un modello YOLOv5s addestrato per il riconoscimento in tempo reale di segnaletica stradale e pedoni combinato con algoritmi di lane detection e stima della distanza tramite Triangle Similarity. L'ecosistema è basato su Python e ottimizzato tramite multithreading per gestire simultaneamente l'inferenza della rete neurale, l'elaborazione dei frame via OpenCV e la comunicazione tra i moduli tramite protocolli UART e TCP/IP.",
          tags: ["Python", "C/C++", "OpenCV", "YOLOv5s", "Raspberry Pi", "Arduino", "Multithreading", "TCP/IP"],
          githubUrl: "https://github.com/Valerio-Cola/RACER",
          highlights: ["Architettura Distribuita", "Real-Time Inference", "Multithreading"]
        },
        {
          title: "Salary Tracker",
          subtitle: "Web App per la Gestione Finanziaria & Simulazione Fiscale",
          period: "2026",
          description: "Un'applicazione web moderna per il monitoraggio e la gestione dei salari, imposte e spese. Consente agli utenti di visualizzare grafici dettagliati, tracciare le entrate nel tempo e avere un resoconto chiaro delle proprie finanze personali in un'interfaccia intuitiva e reattiva.",
          tags: ["TypeScript", "React", "Cloudflare Workers", "Data Visualization", "Tailwind CSS"],
          githubUrl: "https://github.com/Valerio-Cola/SalaryTracker",
          demoUrl: "https://salarytracker.valeriocola.it/",
          highlights: ["Live Application", "Cloudflare Workers", "Analytics"]
        },
        {
          title: "HPC Trace-Driven Simulator",
          subtitle: "Simulatore di Proxy Applications per Architetture Multicore",
          period: "02/2026 – 05/2026",
          description: "Progetto di ricerca sviluppato nel Lab HPC della Sapienza sotto la supervisione del Prof. Daniele De Sensi. Il simulatore, sviluppato in C++, modella e analizza il comportamento di carichi di lavoro complessi e proxy applications su architetture multicore mediante l'elaborazione e il replay di tracce di esecuzione.",
          tags: ["C++", "HPC", "Multicore", "Proxy Apps", "Performance Modeling", "Linux"],
          githubUrl: "https://github.com/Valerio-Cola",
          highlights: ["Lab HPC Sapienza", "C++ Systems", "Performance Modeling"]
        }
      ]
    },
    experience: {
      title: "Esperienza",
      subtitle: "Ricerca e percorsi pratici sul campo",
      items: [
        {
          title: "Tirocinio Curriculare di Ricerca | Lab HPC",
          company: "Sapienza Università di Roma",
          period: "02/2026 – 05/2026",
          location: "Roma",
          description: "Sotto la supervisione del Prof. Daniele De Sensi, ho progettato e sviluppato un simulatore trace driven per Proxy Applications. Il software, realizzato in C++, permette di modellare e analizzare il comportamento di carichi di lavoro complessi su architetture multicore mediante l'elaborazione di tracce di esecuzione."
        }
      ]
    },
    education: {
      title: "Formazione & Certificazioni",
      subtitle: "Percorso accademico e qualifiche formali",
      items: [
        {
          degree: "Laurea Triennale in Informatica",
          institution: "Università di Roma La Sapienza",
          period: "09/2022 – 07/2026",
          location: "Roma",
          grade: "Voto: 101/110"
        },
        {
          degree: "Liceo Scientifico",
          institution: "Istituto Paritario Piccole Ancelle del Sacro Cuore",
          period: "09/2017 – 07/2022",
          location: "Roma",
          grade: "Voto: 100/100"
        }
      ],
      certificationsTitle: "Certificazioni",
      certifications: [
        "Eipass 7 Moduli",
        "DELE Cervantes: Livello A2"
      ]
    },
    contactModal: {
      title: "Contatta Valerio",
      subtitle: "Per opportunità professionali, collaborazioni o richieste tecniche",
      emailLabel: "Indirizzo Email",
      locationLabel: "Posizione",
      writeDirectly: "Scrivi un'email diretta",
      copy: "Copia",
      copied: "Copiato",
      close: "Chiudi"
    },
    privacyModal: {
      title: "Informativa sulla Privacy",
      subtitle: "Trasparenza e rispetto per i dati di navigazione",
      close: "Chiudi",
      sections: [
        {
          title: "1. Nessuna Raccolta di Dati Personali",
          content: "Questo sito web è un portfolio professionale statico. Non raccoglie, archivia o elabora alcun dato personale dei visitatori, né attraverso cookie di profilazione né tramite moduli di contatto proprietari."
        },
        {
          title: "2. Servizi Terzi & API GitHub",
          content: "Il sito interagisce unicamente con l'API pubblica di GitHub per visualizzare statistiche in tempo reale (numero di repository, follower). Nessuna informazione dell'utente viene inviata a terze parti."
        },
        {
          title: "3. Contatti",
          content: "Tutti i link di contatto (Email, LinkedIn, X) rimandano direttamente a piattaforme esterne gestite secondo le rispettive privacy policy."
        }
      ]
    },
    footer: {
      allRightsReserved: "Tutti i diritti riservati.",
      developedWith: "Sviluppato con TypeScript, React & Tailwind CSS",
      privacyPolicy: "Informativa Privacy"
    }
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      institution: "Sapienza University of Rome",
      role: "Junior Software Developer",
      bioStrong: "Computer Science",
      bioFocus: "systems programming, C/C++, and High Performance Computing",
      bioRest: "Hands-on experience with parallel architectures (MPI, OpenMP, CUDA, HIP), algorithms, and distributed computing.",
      downloadCv: "Download CV (PDF)",
      contactMe: "Contact Me",
      viewProjects: "View Projects",
      statsYears: "Years Academic Study",
      statsDegree: "B.Sc. in Computer Science",
      statsParallel: "Parallel (CUDA, MPI)",
      statsProjects: "Featured Projects",
      systemsDev: "Software Developer"
    },
    terminal: {
      specsTitle: "# System Specs & Stack",
      osLabel: "OS / Env:",
      degreeLabel: "Degree:",
      degreeValue: "B.Sc. in Computer Science (101/110)",
      coreStackLabel: "Core Stack:",
      toolsLabel: "Tools:",
      contactTitle: "# Quick Reach & Coordinates",
      followers: "Followers",
      repositories: "Repositories",
      copied: "Copied",
      copy: "Copy"
    },
    about: {
      title: "Profile & Technical Vision",
      subtitle: "Academic Background",
      text: "Graduated in Computer Science from Sapienza University of Rome with solid preparation in algorithms, data structures, and parallel programming. I have acquired practical experience in academic and research projects using Java, C/C++, and Python, demonstrating strong problem-solving skills, object-oriented programming (OOP), and software design.",
      keyValuesTitle: "Core Competencies & Methodology",
      strengthsTitle: "Key Strengths",
      keyPoints: [
        {
          title: "Systems Development & Optimization",
          desc: "Strong focus on execution performance, explicit memory management, and hardware-close programming."
        },
        {
          title: "Parallel & Concurrent Computing",
          desc: "Experience with shared-memory (OpenMP) and distributed-memory (MPI) paradigms, plus GPU acceleration with CUDA."
        },
        {
          title: "Methodology & Software Engineering",
          desc: "Object-oriented design, architectural patterns, computational complexity analysis, and disciplined testing."
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      groups: [
        {
          category: "Systems Programming & HPC",
          icon: "cpu",
          description: "Low-level development, concurrency, and high-performance computing",
          items: ["C", "C++", "OpenMP", "MPI", "CUDA (NVIDIA)", "HIP (AMD)", "Memory Management", "POSIX / Linux API"]
        },
        {
          category: "Software Engineering & Paradigms",
          icon: "layers",
          description: "Software engineering, object-oriented programming, and algorithms",
          items: ["Java", "Python", "OOP", "Design Patterns", "Relational DBs (SQL)", "Algorithmic Complexity"]
        },
        {
          category: "Development Environment & Profiling",
          icon: "terminal",
          description: "Compilation toolchains, performance analysis, and debugging",
          items: ["Linux", "Git", "Bash", "Valgrind", "GDB", "Make / CMake", "Profiling Tools"]
        },
        {
          category: "Languages & Communication",
          icon: "globe",
          description: "Language proficiency for international environments",
          items: ["Italian (Native)", "English (Professional Working)", "Spanish (Conversational)"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Distributed systems, HPC, and Web Apps",
      viewCode: "Source Code",
      viewDemo: "Live Demo",
      githubActive: "View on GitHub",
      items: [
        {
          title: "RACER",
          subtitle: "Raspberry & Arduino Car for Environmental Recognition",
          period: "02/2024 – 06/2025",
          description: "Autonomous driving system based on a distributed architecture integrating a Raspberry Pi Zero 2W for computer vision and an Arduino Mega 2560 for motor control. Features a trained YOLOv5s model for real-time traffic sign and pedestrian detection, combined with lane detection and Triangle Similarity distance estimation. Built with Python and multithreaded optimization to handle simultaneous neural net inference, OpenCV frame processing, and inter-module UART/TCP communication.",
          tags: ["Python", "C/C++", "OpenCV", "YOLOv5s", "Raspberry Pi", "Arduino", "Multithreading", "TCP/IP"],
          githubUrl: "https://github.com/Valerio-Cola/RACER",
          highlights: ["Distributed Architecture", "Real-Time Inference", "Multithreading"]
        },
        {
          title: "Salary Tracker",
          subtitle: "Web Application for Financial Management & Tax Simulation",
          period: "2026",
          description: "A modern web application for tracking and simulating salaries, taxes, and personal expenses. Allows users to view detailed interactive charts, track earnings over time, and gain clear financial insights through an intuitive, responsive interface.",
          tags: ["TypeScript", "React", "Cloudflare Workers", "Data Visualization", "Tailwind CSS"],
          githubUrl: "https://github.com/Valerio-Cola/SalaryTracker",
          demoUrl: "https://salarytracker.valeriocola.it/",
          highlights: ["Live Application", "Cloudflare Workers", "Analytics"]
        },
        {
          title: "HPC Trace-Driven Simulator",
          subtitle: "Proxy Application Simulator for Multicore Architectures",
          period: "02/2026 – 05/2026",
          description: "Research project developed in the Sapienza HPC Lab under the supervision of Prof. Daniele De Sensi. The C++ simulator models and evaluates complex workloads and proxy applications on multicore systems via execution trace processing and replay.",
          tags: ["C++", "HPC", "Multicore", "Proxy Apps", "Performance Modeling", "Linux"],
          githubUrl: "https://github.com/Valerio-Cola",
          highlights: ["Sapienza HPC Lab", "C++ Systems", "Performance Modeling"]
        }
      ]
    },
    experience: {
      title: "Experience",
      subtitle: "Research and hands-on academic projects",
      items: [
        {
          title: "Curricular Research Internship | HPC Lab",
          company: "Sapienza University of Rome",
          period: "02/2026 – 05/2026",
          location: "Rome, Italy",
          description: "Under the supervision of Prof. Daniele De Sensi, designed and developed a trace-driven simulator for Proxy Applications. The C++ software models and analyzes the behavior of complex workloads on multicore architectures through execution trace evaluation."
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic degrees and formal qualifications",
      items: [
        {
          degree: "Bachelor's Degree in Computer Science",
          institution: "Sapienza University of Rome",
          period: "09/2022 – 07/2026",
          location: "Rome, Italy",
          grade: "Grade: 101/110"
        },
        {
          degree: "High School Diploma (Scientific Lyceum)",
          institution: "Istituto Paritario Piccole Ancelle del Sacro Cuore",
          period: "09/2017 – 07/2022",
          location: "Rome, Italy",
          grade: "Grade: 100/100"
        }
      ],
      certificationsTitle: "Certifications",
      certifications: [
        "Eipass 7 Modules",
        "DELE Cervantes: Level A2"
      ]
    },
    contactModal: {
      title: "Contact Valerio",
      subtitle: "For career opportunities, collaborations, or technical inquiries",
      emailLabel: "Email Address",
      locationLabel: "Location",
      writeDirectly: "Send direct email",
      copy: "Copy",
      copied: "Copied",
      close: "Close"
    },
    privacyModal: {
      title: "Privacy Policy",
      subtitle: "Transparency and respect for your privacy",
      close: "Close",
      sections: [
        {
          title: "1. No Personal Data Collection",
          content: "This website is a static professional portfolio. It does not collect, store, or process any personal data from visitors, nor does it use tracking cookies or proprietary contact forms."
        },
        {
          title: "2. Third-Party Services & GitHub API",
          content: "The site interacts solely with the public GitHub API to display real-time profile metrics (repositories, followers). No visitor information is sent to third parties."
        },
        {
          title: "3. External Links",
          content: "All contact links (Email, LinkedIn, X) redirect directly to external platforms managed in accordance with their respective privacy policies."
        }
      ]
    },
    footer: {
      allRightsReserved: "All rights reserved.",
      developedWith: "Built with TypeScript, React & Tailwind CSS",
      privacyPolicy: "Privacy Policy"
    }
  }
};
