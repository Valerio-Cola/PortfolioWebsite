import { Github, Mail, MapPin, Phone, Calendar } from "lucide-react";

export const personalInfo = {
  name: "Valerio Cola",
  role: "Junior Software Developer",
  email: "valeriocola2003@gmail.com",
  location: "Roma, Italia",
  github: "https://github.com/Valerio-Cola",
  birthDate: "02/07/2003",
  about: "Laureato in Informatica presso Sapienza Università di Roma con una solida preparazione in algoritmi, strutture dati e programmazione parallela. Ho maturato esperienza pratica nello sviluppo di progetti accademici utilizzando Java, C/C++ e Python, dimostrando una forte attitudine al problem solving, alla programmazione ad oggetti (OOP) e alla progettazione software.",
  socials: [
    { name: "LinkedIn", handle: "in/valerio-cola", url: "https://www.linkedin.com/in/valerio-cola" },
    { name: "X", handle: "@valerio_cl", url: "https://x.com/valerio_cl" },
    { name: "X", handle: "@Ethan_Algo", url: "https://x.com/Ethan_Algo" }
  ]
};

export const education = [
  {
    degree: "Laurea Triennale in Informatica",
    institution: "Università di Roma La Sapienza",
    period: "09/2022 – 07/2026",
    location: "Roma",
    grade: "Voto: 101/110",
  },
  {
    degree: "Liceo Scientifico",
    institution: "Istituto Paritario Piccole Ancelle del Sacro Cuore",
    period: "09/2017 – 07/2022",
    location: "Roma",
    grade: "Voto: 100/100",
  }
];

export const experience = [
  {
    title: "Tirocinio Curriculare di Ricerca | Lab HPC",
    company: "Sapienza Università di Roma",
    period: "02/2026 – 05/2026",
    location: "Roma",
    description: "Sotto la supervisione del Prof. Daniele De Sensi, ho progettato e sviluppato un simulatore trace driven per Proxy Applications. Il software, realizzato in C++, permette di modellare e analizzare il comportamento di carichi di lavoro complessi su architetture multicore mediante l'elaborazione di tracce di esecuzione.",
  }
];

export const projects = [
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
];

export const skills = [
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
];

export const certifications = [
  "Eipass 7 Moduli",
  "DELE Cervantes: Livello A2"
];
