import React, { useState, useEffect, useMemo } from 'react';
import {
  Globe,
  Search,
  Star,
  Flame,
  Scale,
  Video,
  ShieldAlert,
  Send,
  MessageCircle,
  Folder,
  Layers,
  Sparkles,
  Zap,
  HelpCircle,
  Share2,
} from 'lucide-react';

import {
  DEFAULT_REPORTS,
  MODULE_FOLDERS,
  ReportItem,
  Platform,
} from './data/reportData';
import { MatrixRain } from './components/MatrixRain';
import { Header } from './components/Header';
import { TargetInjectorBar } from './components/TargetInjectorBar';
import { ReportCard } from './components/ReportCard';
import { CopyHistoryDrawer } from './components/CopyHistoryDrawer';
import { AuthModal, UserSession } from './components/AuthModal';
import { AdminModal } from './components/AdminModal';
import { SupportHubModal } from './components/SupportHubModal';
import { PWAInstallButton } from './components/PWAInstallButton';
import { CopyHistoryItem } from './utils/textEngine';
import { safeStorage } from './utils/safeStorage';
import {
  initAudio,
  playCyberSound,
  setSoundEnabled,
  isSoundEnabled,
} from './utils/sound';

export default function App() {
  // Authentication State
  const [user, setUser] = useState<UserSession | null>(() => {
    try {
      const stored = safeStorage.getItem('csb_user_session');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [isAuthOpen, setIsAuthOpen] = useState(() => !Boolean(safeStorage.getItem('csb_user_session')));

  // Variable Injection State
  const [targetUrl, setTargetUrl] = useState(() => {
    return safeStorage.getItem('csb_last_target') || '';
  });
  const [victimUrl, setVictimUrl] = useState(() => {
    return safeStorage.getItem('csb_last_victim') || '';
  });

  // Sound FX State
  const [soundOn, setSoundOn] = useState(true);

  // Matrix Rain FX State
  const [matrixActive, setMatrixActive] = useState(true);
  const [matrixColor, setMatrixColor] = useState('#10b981');

  // Filter & Search States
  const [activeTab, setActiveTab] = useState<'all' | 'facebook' | 'meta' | 'tiktok' | 'copyright' | 'pinned'>('all');
  const [selectedModule, setSelectedModule] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  // Pinned items
  const [pinnedIds, setPinnedIds] = useState<string[]>(() => {
    try {
      const saved = safeStorage.getItem('csb_pinned_reports');
      return saved ? JSON.parse(saved) : ['class_14', 'class_20', 'class_29', 'class_35'];
    } catch {
      return ['class_14', 'class_20', 'class_29', 'class_35'];
    }
  });

  // Custom Reports (added via Admin)
  const [customReports, setCustomReports] = useState<ReportItem[]>(() => {
    try {
      const saved = safeStorage.getItem('csb_custom_reports_v5');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Copy History
  const [copyHistory, setCopyHistory] = useState<CopyHistoryItem[]>(() => {
    try {
      const saved = safeStorage.getItem('csb_copy_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Keep targets in safeStorage
  useEffect(() => {
    safeStorage.setItem('csb_last_target', targetUrl);
  }, [targetUrl]);

  useEffect(() => {
    safeStorage.setItem('csb_last_victim', victimUrl);
  }, [victimUrl]);

  // Keep pinned reports in safeStorage
  useEffect(() => {
    safeStorage.setItem('csb_pinned_reports', JSON.stringify(pinnedIds));
  }, [pinnedIds]);

  // Keep custom reports in safeStorage
  useEffect(() => {
    safeStorage.setItem('csb_custom_reports_v5', JSON.stringify(customReports));
  }, [customReports]);

  // Keep copy history in safeStorage
  useEffect(() => {
    safeStorage.setItem('csb_copy_history', JSON.stringify(copyHistory));
  }, [copyHistory]);

  // Keyboard shortcut: Ctrl + Shift + A for Secret Admin
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        playCyberSound('matrix');
        setIsAdminOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // First interaction audio initialization
  useEffect(() => {
    const handleFirstClick = () => {
      initAudio();
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);
    return () => window.removeEventListener('click', handleFirstClick);
  }, []);

  const handleToggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
  };

  const handleTogglePin = (id: string) => {
    setPinnedIds((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleCopySuccess = (report: ReportItem) => {
    const historyEntry: CopyHistoryItem = {
      id: `copy_${Date.now()}`,
      reportId: report.id,
      title: report.title,
      targetInjected: targetUrl.trim() || '[TARGET]',
      victimInjected: victimUrl.trim() || '[VICTIM]',
      timestamp: Date.now(),
      timeFormatted: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setCopyHistory((prev) => [historyEntry, ...prev.slice(0, 19)]);
  };

  const handleClearHistory = () => {
    setCopyHistory([]);
  };

  const handleAddReport = (newReport: ReportItem) => {
    setCustomReports((prev) => [newReport, ...prev]);
  };

  const handleDeleteReport = (id: string) => {
    setCustomReports((prev) => prev.filter((r) => r.id !== id));
  };

  const handleResetToDefaults = () => {
    setCustomReports([]);
    setPinnedIds(['class_14', 'class_20', 'class_29', 'class_35']);
    safeStorage.removeItem('csb_custom_reports_v5');
  };

  const handleLogout = () => {
    safeStorage.removeItem('csb_user_session');
    setUser(null);
    setIsAuthOpen(true);
  };

  // Combine default and custom reports
  const allReports = useMemo(() => {
    return [...customReports, ...DEFAULT_REPORTS];
  }, [customReports]);

  // Filtered reports
  const filteredReports = useMemo(() => {
    return allReports.filter((rep) => {
      // Pinned tab filter
      if (activeTab === 'pinned') {
        if (!pinnedIds.includes(rep.id)) return false;
      }
      // Platform tab filter
      else if (activeTab === 'facebook') {
        if (rep.platform !== 'facebook') return false;
      } else if (activeTab === 'meta') {
        if (rep.platform !== 'meta' && rep.moduleId !== 'mod_meta_2026') return false;
      } else if (activeTab === 'tiktok') {
        if (rep.platform !== 'tiktok') return false;
      } else if (activeTab === 'copyright') {
        if (rep.platform !== 'copyright') return false;
      }

      // Specific module filter (if selected)
      if (selectedModule !== 'all' && rep.moduleId !== selectedModule) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = rep.title.toLowerCase().includes(q);
        const matchBangla = rep.banglaTitle.toLowerCase().includes(q);
        const matchDesc = rep.description.toLowerCase().includes(q);
        const matchTags = rep.tags?.some((t) => t.toLowerCase().includes(q));
        const matchModule = rep.moduleName.toLowerCase().includes(q);
        const matchClass = rep.classNumber?.toLowerCase().includes(q);
        if (!matchTitle && !matchBangla && !matchDesc && !matchTags && !matchModule && !matchClass) {
          return false;
        }
      }

      return true;
    });
  }, [allReports, activeTab, selectedModule, searchQuery, pinnedIds]);

  return (
    <div className="min-h-screen bg-[#05090e] text-slate-100 flex flex-col relative selection:bg-emerald-500 selection:text-black">
      {/* Background Matrix Rain Animation */}
      <MatrixRain
        active={matrixActive}
        color={matrixColor}
        opacity={matrixActive ? 0.14 : 0}
      />

      {/* Scanline CRT overlay */}
      <div className="fixed inset-0 scanline-overlay z-10 pointer-events-none" />

      {/* App Header */}
      <Header
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenSupport={() => setIsSupportOpen(true)}
        soundEnabled={soundOn}
        onToggleSound={handleToggleSound}
        matrixActive={matrixActive}
        onToggleMatrix={() => setMatrixActive(!matrixActive)}
        matrixColor={matrixColor}
        onChangeMatrixColor={(c) => setMatrixColor(c)}
        user={user}
        onLogout={handleLogout}
        totalModules={MODULE_FOLDERS.length}
        totalReports={allReports.length}
        pinnedCount={pinnedIds.length}
        copyCount={copyHistory.length}
      />

      {/* Main Content Area */}
      <main className="relative z-20 flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6 pb-28">
        {/* Hero Alert & Target Injector Section */}
        <section className="space-y-4">
          {/* Welcome Alert / Operational Banner */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gradient-to-r from-emerald-950/40 via-[#0a121d] to-[#0a1017] border border-emerald-500/30 rounded-2xl gap-3 shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-xl shadow-emerald-500/20 shrink-0 bg-black">
                <img
                  src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
                  alt="Signal Hackers CSB Official Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-sm md:text-base font-bold font-mono-cyber text-white flex flex-wrap items-center gap-2">
                  <span>SIGNAL HACKERS CSB COMMAND CENTER</span>
                  <span className="text-[10px] bg-emerald-500 text-black px-2 py-0.5 rounded font-bold">
                    OCTOBER 16, 2026
                  </span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded font-bold font-mono-cyber">
                    CLASS 14 — CLASS 39 ACTIVE
                  </span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  টার্গেটের লিংক ও ভিকটিমের তথ্য ইনপুট করুন। Module 04, 05, 06, ও 07-এর সব রিপোর্ট টেমপ্লেটে স্বয়ংক্রিয়ভাবে তথ্য ইনজেক্ট হয়ে যাবে।
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <PWAInstallButton />

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setIsSupportOpen(true);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 rounded-xl text-xs font-mono-cyber transition cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Helpline (@signalhackers)</span>
              </button>
            </div>
          </div>

          {/* DUAL VARIABLE TARGET INJECTOR ENGINE */}
          <TargetInjectorBar
            target={targetUrl}
            victim={victimUrl}
            onTargetChange={(val) => setTargetUrl(val)}
            onVictimChange={(val) => setVictimUrl(val)}
            onClear={() => {
              setTargetUrl('');
              setVictimUrl('');
            }}
          />
        </section>

        {/* Platform Quick Filter Tabs */}
        <section className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* 6 Platform Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('all');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-emerald-500 text-black border-emerald-400 shadow-lg shadow-emerald-500/20'
                    : 'bg-[#090e17] text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>[🌐 All Modules]</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-black/30">
                  {allReports.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('facebook');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'facebook'
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-[#090e17] text-blue-400 border-slate-800 hover:border-blue-500/40'
                }`}
              >
                <span>📘 Facebook Reports</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('meta');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'meta'
                    ? 'bg-rose-600 text-white border-rose-400 shadow-lg shadow-rose-500/20'
                    : 'bg-[#090e17] text-rose-400 border-slate-800 hover:border-rose-500/40'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>🔥 New Meta Updates</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('tiktok');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'tiktok'
                    ? 'bg-cyan-500 text-black border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-[#090e17] text-cyan-400 border-slate-800 hover:border-cyan-500/40'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>🎵 TikTok Reports</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('copyright');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'copyright'
                    ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-[#090e17] text-amber-400 border-slate-800 hover:border-amber-500/40'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>⚖️ Copyright Section</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('beep');
                  setActiveTab('pinned');
                }}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-mono-cyber font-bold rounded-xl border transition-all cursor-pointer ${
                  activeTab === 'pinned'
                    ? 'bg-amber-400 text-black border-amber-300 shadow-lg shadow-amber-400/20'
                    : 'bg-[#090e17] text-amber-300 border-slate-800 hover:border-amber-400/40'
                }`}
              >
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>⭐ Pinned ({pinnedIds.length})</span>
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative min-w-[280px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search report, title, keywords..."
                className="w-full bg-[#080d16] border border-slate-800 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2 text-xs font-mono-cyber text-slate-200 placeholder-slate-500 outline-none transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Module Folders Strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            <button
              onClick={() => {
                playCyberSound('click');
                setSelectedModule('all');
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono-cyber shrink-0 border transition cursor-pointer ${
                selectedModule === 'all'
                  ? 'bg-slate-800 border-slate-600 text-white'
                  : 'bg-[#090e17] border-slate-800/80 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Folder className="w-3.5 h-3.5" />
              <span>All Folders ({MODULE_FOLDERS.length})</span>
            </button>

            {MODULE_FOLDERS.map((mod) => (
              <button
                key={mod.id}
                onClick={() => {
                  playCyberSound('click');
                  setSelectedModule(mod.id);
                }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono-cyber shrink-0 border transition cursor-pointer ${
                  selectedModule === mod.id
                    ? 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                    : 'bg-[#090e17] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="font-bold text-slate-300">Mod {mod.number}</span>
                <span className="hidden sm:inline">• {mod.name.slice(0, 24)}...</span>
              </button>
            ))}
          </div>
        </section>

        {/* Results Counter and Status */}
        <div className="flex items-center justify-between text-xs font-mono-cyber text-slate-400 pt-1">
          <div>
            SHOWING <span className="text-emerald-400 font-bold">{filteredReports.length}</span> DISPATCH ITEMS
            {selectedModule !== 'all' && (
              <span className="text-cyan-400 ml-2">
                (Filtered by Folder: {selectedModule})
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span>PLATFORM: {activeTab.toUpperCase()}</span>
          </div>
        </div>

        {/* Report Cards Grid */}
        {filteredReports.length === 0 ? (
          <div className="p-12 text-center bg-[#090e17] border border-slate-800 rounded-2xl space-y-3">
            <ShieldAlert className="w-12 h-12 text-slate-600 mx-auto" />
            <h3 className="text-base font-bold font-mono-cyber text-slate-300">
              কোনো রিপোর্ট পাওয়া যায়নি
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              আপনার ফিল্টার অথবা সার্চ কুয়েরি পরিবর্তন করুন, অথবা অ্যাডমিন প্যানেল থেকে নতুন রিপোর্ট ক্লাস যোগ করুন।
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setSelectedModule('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-emerald-950 text-emerald-400 border border-emerald-500/40 rounded-xl text-xs font-mono-cyber cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {filteredReports.map((report) => (
              <ReportCard
                key={report.id}
                report={report}
                target={targetUrl}
                victim={victimUrl}
                isPinned={pinnedIds.includes(report.id)}
                onTogglePin={handleTogglePin}
                onCopySuccess={handleCopySuccess}
              />
            ))}
          </div>
        )}
      </main>

      {/* Floating Support Helpline Radar Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => {
            playCyberSound('click');
            setIsSupportOpen(true);
          }}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-black font-bold font-mono-cyber text-xs rounded-full shadow-2xl shadow-emerald-500/40 border border-emerald-400/50 cursor-pointer hover:scale-105 active:scale-95 transition-all"
        >
          {/* Radar pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

          <Send className="w-4 h-4 text-black" />
          <span className="hidden sm:inline tracking-wider">SUPPORT HELPLINE</span>
          <span className="px-1.5 py-0.2 bg-black text-emerald-400 rounded-full text-[10px]">
            @signalhackers
          </span>
        </button>
      </div>

      {/* Copy Session History Bottom Drawer */}
      <CopyHistoryDrawer
        history={copyHistory}
        onClearHistory={handleClearHistory}
        onReCopy={(txt) => {
          navigator.clipboard.writeText(txt);
          playCyberSound('success');
        }}
      />

      {/* Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        onLoginSuccess={(newSession) => {
          setUser(newSession);
          setIsAuthOpen(false);
        }}
      />

      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        reports={allReports}
        onAddReport={handleAddReport}
        onDeleteReport={handleDeleteReport}
        onResetToDefaults={handleResetToDefaults}
        copyCount={copyHistory.length}
      />

      <SupportHubModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />
    </div>
  );
}
