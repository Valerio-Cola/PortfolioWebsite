const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Add Sun, Moon to imports
code = code.replace(/BookOpen \} from 'lucide-react';/, "BookOpen, Sun, Moon } from 'lucide-react';");

// 2. Add State and Toggle
code = code.replace(/const \[isLoadingGithub, setIsLoadingGithub\] = useState\(true\);/, `const [isLoadingGithub, setIsLoadingGithub] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);`);

// 3. Add toggle button to header
code = code.replace(
/<\/nav>\s*<\/div>\s*<\/header>/,
`  <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors ml-4">
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-600 dark:text-slate-400" />}
            </button>
          </nav>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsDarkMode(!isDarkMode)} aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors">
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-stone-600 dark:text-slate-400" />}
            </button>
          </div>
        </div>
      </header>`
);

// 4. Update classes for Dark Mode
code = code.replace(/bg-stone-50/g, "bg-stone-50 dark:bg-slate-950");
code = code.replace(/text-stone-900/g, "text-stone-900 dark:text-white");
code = code.replace(/text-stone-800/g, "text-stone-800 dark:text-slate-200");
code = code.replace(/text-stone-700/g, "text-stone-700 dark:text-slate-300");
code = code.replace(/text-stone-600/g, "text-stone-600 dark:text-slate-400");
code = code.replace(/text-stone-500/g, "text-stone-500 dark:text-slate-400");
code = code.replace(/text-stone-400/g, "text-stone-400 dark:text-slate-500");

// backgrounds
code = code.replace(/bg-white\/80/g, "bg-white/80 dark:bg-slate-950/80");
code = code.replace(/(bg-white)([\s"])/g, "$1 dark:bg-slate-900/40$2");
code = code.replace(/bg-stone-900/g, "bg-stone-900 dark:bg-slate-800");
code = code.replace(/bg-stone-100/g, "bg-stone-100 dark:bg-slate-900/40");
code = code.replace(/hover:bg-stone-50/g, "hover:bg-stone-50 dark:hover:bg-slate-800/60");
code = code.replace(/hover:bg-stone-800/g, "hover:bg-stone-800 dark:hover:bg-slate-700");

// borders
code = code.replace(/border-stone-200/g, "border-stone-200 dark:border-slate-800/60");
code = code.replace(/border-stone-100/g, "border-stone-100 dark:border-slate-800/60");
code = code.replace(/border-white/g, "border-white dark:border-slate-800");
code = code.replace(/ring-stone-200/g, "ring-stone-200 dark:ring-slate-800");

// accents
code = code.replace(/hover:border-blue-200/g, "hover:border-blue-200 dark:hover:border-sky-500/30");
code = code.replace(/hover:border-blue-300/g, "hover:border-blue-300 dark:hover:border-sky-500/50");
code = code.replace(/text-blue-600/g, "text-blue-600 dark:text-sky-400");
code = code.replace(/text-blue-500/g, "text-blue-500 dark:text-sky-400");
code = code.replace(/hover:text-blue-600/g, "hover:text-blue-600 dark:hover:text-sky-400");
code = code.replace(/hover:text-blue-700/g, "hover:text-blue-700 dark:hover:text-sky-300");
code = code.replace(/from-blue-600 to-indigo-600/g, "from-blue-600 to-indigo-600 dark:from-sky-400 dark:to-blue-600");
code = code.replace(/bg-blue-50/g, "bg-blue-50 dark:bg-sky-500/10");
code = code.replace(/text-blue-700/g, "text-blue-700 dark:text-sky-300");
code = code.replace(/border-blue-100/g, "border-blue-100 dark:border-sky-500/20");

// Increase profile picture size
code = code.replace(/className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/g, 'className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white');

fs.writeFileSync('src/App.tsx', code);
