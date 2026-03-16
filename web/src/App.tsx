import React, { useState } from 'react';
import { 
  Puzzle, 
  Microscope, 
  Wrench, 
  ExternalLink, 
  BookOpen, 
  Github, 
  Twitter, 
  Globe, 
  Search,
  ChevronRight,
  ChevronDown,
  Terminal,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { courseData, type Subsection } from './data';
import { courseDataZh } from './data.zh';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Language = 'zh' | 'en';

function resolveAssetPath(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalizedPath}`;
}

const uiText = {
  zh: {
    appTitle: 'LLM 课程',
    heroLead: '掌握',
    heroHighlight: '大语言模型',
    heroDescription: 'LLM 课程分为三部分：基础、科学家和工程师。',
    notebooksTitle: '笔记本与工具',
    notebooksDescription: '面向构建与优化 LLM 的实战指南与交互式笔记本。',
    searchPlaceholder: '搜索笔记本...',
    openInColab: '在 Colab 打开',
    learningResources: '学习资源',
    footerPrefix: '作者',
    footerSuffix: '。交互版由 AI Assistant 构建。',
    languageLabel: '语言',
  },
  en: {
    appTitle: 'LLM Course',
    heroLead: 'Mastering',
    heroHighlight: 'Large Language Models',
    heroDescription: 'The LLM course is divided into three parts: Fundamentals, Scientist, and Engineer.',
    notebooksTitle: 'Notebooks & Tools',
    notebooksDescription: 'Practical guides and interactive notebooks to build and optimize LLMs.',
    searchPlaceholder: 'Search notebooks...',
    openInColab: 'Open in Colab',
    learningResources: 'Learning Resources',
    footerPrefix: 'Created by',
    footerSuffix: '. Interactive version by AI Assistant.',
    languageLabel: 'Language',
  },
} as const;

const IconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle className="w-6 h-6" />,
  Microscope: <Microscope className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('zh');
  const [activeSection, setActiveSection] = useState<string>(courseData.sections[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const text = uiText[language];
  const localizedCourseData = language === 'zh' ? courseDataZh : courseData;

  const filteredNotebooks = localizedCourseData.notebooks.flatMap(cat => cat.items).filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-sky-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold">L</div>
            <span className="font-bold text-xl tracking-tight text-white">{text.appTitle}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {localizedCourseData.sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-sky-400",
                  activeSection === section.id ? "text-sky-400" : "text-slate-400"
                )}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-700 p-1">
              <span className="px-2 text-xs text-slate-400">{text.languageLabel}</span>
              <button
                onClick={() => setLanguage('zh')}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-full transition-colors",
                  language === 'zh' ? "bg-sky-500 text-white" : "text-slate-300 hover:bg-slate-800"
                )}
              >
                中文
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={cn(
                  "px-2.5 py-1 text-xs rounded-full transition-colors",
                  language === 'en' ? "bg-sky-500 text-white" : "text-slate-300 hover:bg-slate-800"
                )}
              >
                EN
              </button>
            </div>
            <a href="https://github.com/a-persimmons/llm-course" target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-800 rounded-full transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              {text.heroLead} <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">{text.heroHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              {localizedCourseData.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {localizedCourseData.hero.social.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all flex items-center gap-2 text-sm font-medium"
                >
                  {link.url.includes('twitter.com') && <Twitter className="w-4 h-4" />}
                  {link.url.includes('mlabonne.github.io/blog') && <Globe className="w-4 h-4" />}
                  {link.url.includes('packt.link') && <BookOpen className="w-4 h-4" />}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-32">
        {/* Section Tabs */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-2">
              {localizedCourseData.sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left border",
                    activeSection === section.id 
                      ? "bg-sky-500/10 border-sky-500/50 text-sky-400" 
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                  )}
                >
                  {IconMap[section.icon]}
                  <span className="font-semibold">{section.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <AnimatePresence mode="wait">
              {localizedCourseData.sections.filter(s => s.id === activeSection).map(section => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-12"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{section.title}</h2>
                    <p className="text-slate-400 max-w-3xl leading-relaxed">{section.description}</p>
                  </div>

                  {section.image && (
                    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 p-4">
                      <img src={resolveAssetPath(section.image)} alt={section.title} className="w-full h-auto rounded-xl" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-6">
                    {section.subsections.map((sub, idx) => (
                      <SubsectionCard key={sub.id} subsection={sub} index={idx} language={language} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Notebooks Section */}
        <section className="mt-32">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{text.notebooksTitle}</h2>
              <p className="text-slate-400">{text.notebooksDescription}</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder={text.searchPlaceholder} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotebooks.map((notebook, i) => (
              <motion.div
                key={notebook.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-sky-500/50 transition-all hover:shadow-2xl hover:shadow-sky-500/10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div className="flex gap-2">
                    {notebook.articleUrl && (
                      <a href={notebook.articleUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-500 hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    <a href={notebook.notebookUrl} target="_blank" rel="noreferrer" className="p-1.5 text-slate-500 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{notebook.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{notebook.description}</p>
                <a 
                  href={notebook.notebookUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {text.openInColab} <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white font-bold">L</div>
            <span className="font-bold text-xl tracking-tight text-white">{text.appTitle}</span>
          </div>
          <p className="text-slate-500 text-sm">
            {text.footerPrefix} <a href="https://twitter.com/maximelabonne" className="text-slate-400 hover:text-sky-400">Maxime Labonne</a>{text.footerSuffix}
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/a-persimmons/llm-course" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://twitter.com/maximelabonne" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SubsectionCard: React.FC<{ subsection: Subsection; index: number; language: Language }> = ({ subsection, index, language }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-colors">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 flex items-center justify-between text-left group"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-slate-800 rounded-lg text-slate-400 font-mono text-sm group-hover:bg-sky-500/20 group-hover:text-sky-400 transition-colors">
            {index + 1}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">{subsection.title}</h3>
        </div>
        <div className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "rotate-0")}>
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-8 pt-2 space-y-6 border-t border-slate-800">
              <ul className="space-y-3">
                {subsection.content.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                    <div className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                  <BookOpen className="w-3 h-3" /> {uiText[language].learningResources}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {subsection.resources.map(res => (
                    <a
                      key={res.title}
                      href={res.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-950 border border-slate-800 rounded-xl hover:border-sky-500/50 hover:bg-slate-900 transition-all flex items-center justify-between group/link"
                    >
                      <span className="text-sm font-medium text-slate-300 group-hover/link:text-sky-400 transition-colors truncate pr-4">{res.title}</span>
                      <ExternalLink className="w-4 h-4 text-slate-600 group-hover/link:text-sky-400 transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
