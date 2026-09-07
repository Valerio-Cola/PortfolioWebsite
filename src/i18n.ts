export type Language = 'it' | 'en';

export interface TranslationData {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    thesis: string;
    contact: string;
  };
  hero: {
    institution: string;
    role: string;
    bioStrong: string;
    bioFocus: string;
    bioRest: string;
    downloadCv: string;
    viewThesis: string;
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
    competenciesTitle: string;
    competencies: {
      skill: string;
      level: string;
      description: string;
    }[];
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
    viewThesis: string;
    githubActive: string;
    items: {
      title: string;
      subtitle: string;
      period: string;
      description: string;
      tags: string[];
      githubUrl: string;
      demoUrl?: string;
      thesisUrl?: string;
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
      thesis: "Tesi di Laurea",
      contact: "Contattami"
    },
    hero: {
      institution: "Sapienza Università di Roma",
      role: "Junior Software Developer",
      bioStrong: "Informatica",
      bioFocus: "Sviluppo software a basso livello, C/C++ e High Performance Computing",
      bioRest: "Esperienza pratica su architetture parallele (MPI, OpenMP, CUDA, HIP), algoritmi e sviluppo distribuito.",
      downloadCv: "CV (PDF)",
      viewThesis: "Tesi (PDF)",
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
      title: "Profilo",
      subtitle: "Background accademico & competenze chiave",
      text: "Laureato in Informatica presso Sapienza Università di Roma con una solida preparazione in algoritmi, strutture dati e programmazione parallela. Ho maturato esperienza pratica nello sviluppo di progetti accademici utilizzando Java, C/C++ e Python, dimostrando una forte attitudine al problem solving, alla programmazione ad oggetti (OOP) e alla progettazione software.",
      keyValuesTitle: "Aree di Competenza & Approccio",
      strengthsTitle: "Punti di Forza",
      competenciesTitle: "Competenze Chiave & Strumenti",
      competencies: [
        {
          skill: "C / C++ & HPC",
          level: "Specializzazione",
          description: "Calcolo parallelo (MPI, OpenMP), accelerazione GPU (CUDA, HIP) e gestione manuale della memoria."
        },
        {
          skill: "Java & Python",
          level: "Buona conoscenza",
          description: "Programmazione ad oggetti (OOP), algoritmi, strutture dati e progettazione software modulare."
        },
        {
          skill: "Database & SQL",
          level: "Buona conoscenza",
          description: "Progettazione di schemi, modellazione dati relazionali, vincoli di integrità e query SQL."
        },
        {
          skill: "API REST (Python)",
          level: "Buona conoscenza",
          description: "Progettazione e consumo di servizi web RESTful con Python, payload JSON e architettura client-server."
        },
        {
          skill: "Docker & Git",
          level: "Strumenti",
          description: "Containerizzazione con Dockerfile e ambienti isolati; versionamento distribuito e branching con Git."
        },
        {
          skill: "Networking & Bash",
          level: "Fondamenti & Scripting",
          description: "Concetti base di rete (stack TCP/IP, UDP, MAC/IP) e scripting in shell Bash per ambienti Linux/Unix."
        }
      ],
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
          category: "Programmazione & HPC",
          icon: "cpu",
          description: "Sviluppo a basso livello, calcolo parallelo, architetture distribuite e acceleratori hardware",
          items: ["C", "C++", "MPI", "OpenMP", "CUDA (NVIDIA)", "HIP (AMD)", "Gestione Memoria", "POSIX / Linux API"]
        },
        {
          category: "Database, API & Linguaggi",
          icon: "database",
          description: "Basi di dati relazionali, servizi web REST, linguaggi ad alto livello e paradigmi OOP",
          items: ["Java", "Python", "DB Relazionali (SQL)", "API REST (Python)", "OOP", "Design Pattern", "Complessità Algoritmica"]
        },
        {
          category: "DevOps, Toolchain & Reti",
          icon: "terminal",
          description: "Containerizzazione, versionamento distribuito, scripting e protocolli di rete",
          items: ["Docker (Competenze base)", "Git (Versionamento)", "Bash & Scripting", "Networking (TCP/IP, UDP, MAC)", "Linux / Unix", "Make / CMake", "GDB"]
        },
        {
          category: "Lingue & Comunicazione",
          icon: "globe",
          description: "Competenze linguistiche e documentazione tecnica per contesti professionali",
          items: ["Italiano (Madrelingua)", "Inglese (Competente)", "Spagnolo (Conversazionale)", "Documentazione Tecnica", "Lavoro in Team"]
        }
      ]
    },
    projects: {
      title: "Progetti in Evidenza",
      subtitle: "Sistemi distribuiti, HPC, e Web App",
      viewCode: "Codice",
      viewDemo: "Demo Live",
      viewThesis: "Tesi (PDF)",
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
          title: "GRIT - HPC Trace-Driven Simulator",
          subtitle: "Convertitore di Tracce GOAL in Proxy Application MPI per Sistemi HPC",
          period: "02/2026 – 05/2026",
          description: "Progetto di ricerca sviluppato nel Lab HPC della Sapienza sotto la supervisione del Prof. Daniele De Sensi. Il simulatore GRIT, sviluppato in C++, è progettato per convertire tracce GOAL in Proxy Application MPI funzionali. Il suo obiettivo primario è analizzare il grafo delle dipendenze delle istruzioni e gestire l'esecuzione delle operazioni replicando fedelmente il comportamento temporale e comunicativo dell'applicazione HPC originale. La pipeline di esecuzione è efficiente e scalabile: legge la traccia di input, costruisce il grafo interno delle dipendenze tramite un Parser dedicato e alloca i dati necessari nella memoria locale di ciascun processo MPI; completato il setup, avvia la simulazione guidata dinamicamente dallo Scheduler.",
          tags: ["C++", "MPI", "HPC", "GOAL Traces", "Dependency Graph", "Linux"],
          githubUrl: "https://github.com/Valerio-Cola",
          thesisUrl: "/INFORMATICA.COLA.TESI.pdf",
          highlights: ["Lab HPC Sapienza", "MPI Proxy Apps", "GOAL Simulation"]
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
          description: "Sotto la supervisione del Prof. Daniele De Sensi, ho progettato e sviluppato GRIT, un simulatore trace-driven in C++ che converte tracce GOAL in Proxy Application MPI funzionali. Il software analizza il grafo delle dipendenze delle istruzioni e gestisce l'esecuzione replicando fedelmente il comportamento temporale e comunicativo di applicazioni HPC ad alte prestazioni."
        }
      ]
    },
    education: {
      title: "Formazione",
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
      thesis: "Thesis",
      contact: "Contact"
    },
    hero: {
      institution: "Sapienza University of Rome",
      role: "Junior Software Developer",
      bioStrong: "Computer Science",
      bioFocus: "low-level software development, C/C++, and High Performance Computing",
      bioRest: "Hands-on experience with parallel architectures (MPI, OpenMP, CUDA, HIP), algorithms, and distributed computing.",
      downloadCv: "CV (PDF)",
      viewThesis: "Thesis (PDF)",
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
      title: "Profile",
      subtitle: "Academic background & core competencies",
      text: "Graduated in Computer Science from Sapienza University of Rome with solid preparation in algorithms, data structures, and parallel programming. I have acquired practical experience in academic and research projects using Java, C/C++, and Python, demonstrating strong problem-solving skills, object-oriented programming (OOP), and software design.",
      keyValuesTitle: "Core Competencies & Methodology",
      strengthsTitle: "Key Strengths",
      competenciesTitle: "Core Competencies & Tools",
      competencies: [
        {
          skill: "C / C++ & HPC",
          level: "Specialization",
          description: "Parallel computing (MPI, OpenMP), GPU acceleration (CUDA, HIP), and manual memory management."
        },
        {
          skill: "Java & Python",
          level: "Strong proficiency",
          description: "Object-oriented programming (OOP), algorithms, data structures, and modular software design."
        },
        {
          skill: "Databases & SQL",
          level: "Strong proficiency",
          description: "Schema design, relational data modeling, integrity constraints, and query optimization."
        },
        {
          skill: "REST APIs (Python)",
          level: "Proficient",
          description: "Designing and consuming RESTful web services with Python, JSON payloads, and client-server architecture."
        },
        {
          skill: "Docker & Git",
          level: "Tools & DevOps",
          description: "Containerization with Dockerfiles and isolated environments; distributed version control and branching with Git."
        },
        {
          skill: "Networking & Bash",
          level: "Fundamentals & Scripting",
          description: "Network fundamentals (TCP/IP stack, UDP, MAC/IP addressing) and Bash shell scripting for Linux/Unix."
        }
      ],
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
          category: "Programming & HPC",
          icon: "cpu",
          description: "Low-level development, parallel computing, distributed architectures, and hardware accelerators",
          items: ["C", "C++", "MPI", "OpenMP", "CUDA (NVIDIA)", "HIP (AMD)", "Memory Management", "POSIX / Linux API"]
        },
        {
          category: "Databases, APIs & Languages",
          icon: "database",
          description: "Relational databases, REST web services, high-level languages, and OOP paradigms",
          items: ["Java", "Python", "Relational DBs (SQL)", "REST APIs (Python)", "OOP", "Design Patterns", "Algorithmic Complexity"]
        },
        {
          category: "DevOps, Toolchain & Networking",
          icon: "terminal",
          description: "Containerization, distributed version control, scripting, and network protocols",
          items: ["Docker (Basic skills)", "Git (Version Control)", "Bash & Scripting", "Networking (TCP/IP, UDP, MAC)", "Linux / Unix", "Make / CMake", "GDB"]
        },
        {
          category: "Languages & Communication",
          icon: "globe",
          description: "Language proficiency and technical documentation for professional contexts",
          items: ["Italian (Native)", "English (Proficient)", "Spanish (Conversational)", "Technical Documentation", "Team Collaboration"]
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Distributed systems, HPC, and Web Apps",
      viewCode: "Source Code",
      viewDemo: "Live Demo",
      viewThesis: "Thesis (PDF)",
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
          title: "GRIT - HPC Trace-Driven Simulator",
          subtitle: "GOAL Trace Converter & Proxy MPI Simulator for HPC Systems",
          period: "02/2026 – 05/2026",
          description: "Research project developed in the Sapienza HPC Lab under the supervision of Prof. Daniele De Sensi. The GRIT simulator, developed in C++, is designed to convert GOAL traces into functional C++ Proxy MPI applications. Its primary objective is to analyze the instruction dependencies graph and manage the execution of operations in a way that replicates the temporal and communicative behavior of the original HPC application. The execution pipeline is efficient and scalable: it reads the input trace, constructs an internal dependency graph utilizing the Parser, and allocates the necessary data in the local memory of each MPI process. Once setup is complete, it starts the simulation, which is dynamically driven by the Scheduler.",
          tags: ["C++", "MPI", "HPC", "GOAL Traces", "Dependency Graph", "Linux"],
          githubUrl: "https://github.com/Valerio-Cola",
          thesisUrl: "/INFORMATICA.COLA.TESI.pdf",
          highlights: ["Sapienza HPC Lab", "MPI Proxy Apps", "GOAL Simulation"]
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
          description: "Under the supervision of Prof. Daniele De Sensi, designed and developed GRIT, a trace-driven simulator in C++ that converts GOAL traces into functional MPI Proxy applications. Analyzed instruction dependency graphs to accurately manage and replicate temporal and communication dynamics in HPC workloads."
        }
      ]
    },
    education: {
      title: "Education",
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
