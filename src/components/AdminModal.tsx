import React, { useState } from 'react';
import {
  ShieldAlert,
  X,
  PlusCircle,
  Trash2,
  RotateCcw,
  Key,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { ReportItem, Platform, MODULE_FOLDERS } from '../data/reportData';
import { playCyberSound } from '../utils/sound';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  reports: ReportItem[];
  onAddReport: (newReport: ReportItem) => void;
  onDeleteReport: (id: string) => void;
  onResetToDefaults: () => void;
  copyCount: number;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  reports,
  onAddReport,
  onDeleteReport,
  onResetToDefaults,
  copyCount,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Form states for adding report
  const [title, setTitle] = useState('');
  const [banglaTitle, setBanglaTitle] = useState('');
  const [moduleId, setModuleId] = useState('mod_meta_2026');
  const [platform, setPlatform] = useState<Platform>('meta');
  const [severity, setSeverity] = useState<'CRITICAL' | 'HIGH' | 'MEDIUM'>('HIGH');
  const [officialFormUrl, setOfficialFormUrl] = useState('');
  const [formName, setFormName] = useState('');
  const [description, setDescription] = useState('');
  const [appealTemplate, setAppealTemplate] = useState(`URGENT CYBER INCIDENT NOTICE:
TARGET URL: [TARGET]
VICTIM / REPUTATIONAL ASSET: [VICTIM]

Details: The operator of [TARGET] has breached safety directives against [VICTIM]. We demand immediate account review and deactivation.`);
  const [instructions, setInstructions] = useState('অফিসিয়াল লিংকে প্রবেশ করুন।\n[TARGET] ও [VICTIM] লিংক চেক করে সাবমিট করুন।');
  const [activeTab, setActiveTab] = useState<'add' | 'manage' | 'stats'>('add');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'admin123') {
      playCyberSound('success');
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      playCyberSound('alert');
      setAuthError('ভুল পাসওয়ার্ড! অ্যাডমিন পাসওয়ার্ড হলো: admin123');
    }
  };

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !appealTemplate.trim()) {
      alert('Title এবং Appeal Template পূরণ করা আবশ্যক।');
      return;
    }

    const selectedMod = MODULE_FOLDERS.find((m) => m.id === moduleId);
    const newReport: ReportItem = {
      id: `custom_${Date.now()}`,
      classNumber: `Class Custom`,
      moduleId,
      moduleName: selectedMod ? `${selectedMod.number} — ${selectedMod.name}` : 'Custom Module',
      title: title.trim(),
      banglaTitle: banglaTitle.trim() || title.trim(),
      platform,
      severity,
      officialFormUrl: officialFormUrl.trim() || undefined,
      formName: formName.trim() || 'Custom Direct Escalation Desk',
      description: description.trim() || 'কাস্টম ইউজার-ডিফাইন্ড রিপোর্ট ক্লাস।',
      appealTemplate: appealTemplate.trim(),
      instructions: instructions
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      tags: ['Custom Class', platform.toUpperCase(), 'Admin Added'],
      isCustom: true,
    };

    onAddReport(newReport);
    playCyberSound('success');
    setSuccessMessage('নতুন রিপোর্ট ক্লাস সফলভাবে যোগ করা হয়েছে!');
    setTitle('');
    setBanglaTitle('');
    setDescription('');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090e17] border border-cyan-500/40 rounded-2xl flex flex-col shadow-2xl cyber-glow-cyan overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/30 bg-[#0c1421]">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl overflow-hidden border border-cyan-500/50 flex items-center justify-center shrink-0 bg-black shadow-md shadow-cyan-500/20">
              <img
                src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
                alt="Signal Hackers CSB Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-mono-cyber text-white tracking-wide">
                  SECRET ADMIN CONTROL PANEL
                </h3>
                <span className="px-2 py-0.5 text-[10px] bg-cyan-950 text-cyan-400 border border-cyan-500/40 rounded">
                  ROOT PRIVILEGES
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono-cyber">
                Signal Hackers CSB Enterprise v5.0 Admin Core
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playCyberSound('click');
              onClose();
            }}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate if not authenticated */}
        {!isAuthenticated ? (
          <div className="p-8 flex flex-col items-center justify-center min-h-[360px]">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/50 flex items-center justify-center mb-4 shadow-xl shadow-cyan-500/20 bg-black">
              <img
                src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
                alt="Signal Hackers CSB Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-bold font-mono-cyber text-white mb-1">
              ENTER SYSTEM ADMIN PASSWORD
            </h4>
            <p className="text-xs text-slate-400 mb-6 text-center max-w-sm">
              অ্যাডমিন মোডে প্রবেশ করতে সিক্রেট পাসওয়ার্ড প্রদান করুন। (ডিফল্ট অ্যাডমিন পাসওয়ার্ড:{' '}
              <span className="text-cyan-400 font-mono-cyber font-bold">admin123</span>)
            </p>

            <form onSubmit={handleAuthSubmit} className="w-full max-w-sm space-y-4">
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter admin password..."
                className="w-full bg-[#05090e] border border-cyan-500/50 focus:border-cyan-400 rounded-xl px-4 py-3 text-center font-mono-cyber text-lg tracking-widest text-cyan-300 outline-none"
                autoFocus
              />

              {authError && (
                <p className="text-xs text-rose-400 font-mono-cyber text-center">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono-cyber font-bold rounded-xl transition shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                UNLOCK ROOT CONTROLS
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Admin Tabs */}
            <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-[#080d14]">
              <button
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('add');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono-cyber font-semibold border-b-2 transition cursor-pointer ${
                  activeTab === 'add'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <PlusCircle className="w-4 h-4" />
                ADD REPORT CLASS (নতুন রিপোর্ট যোগ)
              </button>

              <button
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('manage');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono-cyber font-semibold border-b-2 transition cursor-pointer ${
                  activeTab === 'manage'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                MANAGE CLASSES ({reports.length})
              </button>

              <button
                onClick={() => {
                  playCyberSound('click');
                  setActiveTab('stats');
                }}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono-cyber font-semibold border-b-2 transition cursor-pointer ${
                  activeTab === 'stats'
                    ? 'border-cyan-400 text-cyan-300 bg-cyan-950/20'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Terminal className="w-4 h-4" />
                SYSTEM DIAGNOSTICS
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {successMessage && (
                <div className="flex items-center gap-2 p-3 bg-emerald-950/60 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs font-mono-cyber">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* TAB 1: ADD REPORT CLASS */}
              {activeTab === 'add' && (
                <form onSubmit={handleCreateReport} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        REPORT TITLE (ENGLISH) *
                      </label>
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Meta Severe Threat Emergency Notice"
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-slate-100 outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        BANGLA TITLE (বাংলা শিরোনাম)
                      </label>
                      <input
                        type="text"
                        value={banglaTitle}
                        onChange={(e) => setBanglaTitle(e.target.value)}
                        placeholder="e.g. মেটা জরুরি থ্রেট নোটিশ"
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-sm text-slate-100 outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        TARGET MODULE FOLDER
                      </label>
                      <select
                        value={moduleId}
                        onChange={(e) => setModuleId(e.target.value)}
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs font-mono-cyber text-slate-100 outline-none"
                      >
                        {MODULE_FOLDERS.map((m) => (
                          <option key={m.id} value={m.id}>
                            Module {m.number} — {m.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        PLATFORM FILTER
                      </label>
                      <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value as Platform)}
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs font-mono-cyber text-slate-100 outline-none"
                      >
                        <option value="meta">Meta / General</option>
                        <option value="facebook">Facebook Reports</option>
                        <option value="tiktok">TikTok Reports</option>
                        <option value="copyright">Copyright / DMCA</option>
                        <option value="legal">Legal & Grievance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        SEVERITY LEVEL
                      </label>
                      <select
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value as 'CRITICAL' | 'HIGH' | 'MEDIUM')}
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs font-mono-cyber text-slate-100 outline-none"
                      >
                        <option value="CRITICAL">CRITICAL (Red Alert)</option>
                        <option value="HIGH">HIGH (High Priority)</option>
                        <option value="MEDIUM">MEDIUM (Standard)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        OFFICIAL FORM URL (OPTIONAL)
                      </label>
                      <input
                        type="url"
                        value={officialFormUrl}
                        onChange={(e) => setOfficialFormUrl(e.target.value)}
                        placeholder="https://www.facebook.com/help/contact/..."
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs font-mono-cyber text-slate-100 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                        FORM / DESK NAME
                      </label>
                      <input
                        type="text"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Meta Official Security Portal"
                        className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl px-3.5 py-2 text-xs text-slate-100 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-cyber text-slate-300 mb-1 flex items-center justify-between">
                      <span>APPEAL TEMPLATE (USE [TARGET] & [VICTIM] VARIABLES) *</span>
                      <span className="text-cyan-400 text-[11px]">Auto-Injected on Live Engine</span>
                    </label>
                    <textarea
                      rows={5}
                      value={appealTemplate}
                      onChange={(e) => setAppealTemplate(e.target.value)}
                      className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl p-3 text-xs font-mono-cyber text-slate-100 outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-cyber text-slate-300 mb-1">
                      STEP-BY-STEP INSTRUCTIONS (প্রতি লাইনে একটি নির্দেশিকা)
                    </label>
                    <textarea
                      rows={2}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                      className="w-full bg-[#05090e] border border-slate-700 focus:border-cyan-400 rounded-xl p-2.5 text-xs text-slate-100 outline-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-black font-mono-cyber font-bold rounded-xl shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    + PUBLISH NEW REPORT CLASS TO COMMAND CENTER
                  </button>
                </form>
              )}

              {/* TAB 2: MANAGE CLASSES */}
              {activeTab === 'manage' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-slate-400 font-mono-cyber">
                      Total Classes Registered: <span className="text-cyan-400">{reports.length}</span>
                    </p>
                    <button
                      onClick={() => {
                        if (confirm('আপনি কি সব কাস্টম রিপোর্ট মুছে ডিফল্ট সেটিংসে ফিরে যেতে চান?')) {
                          onResetToDefaults();
                          playCyberSound('delete');
                        }
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-500/40 text-rose-300 text-xs font-mono-cyber rounded-lg transition cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      RESET TO FACTORY DEFAULTS
                    </button>
                  </div>

                  <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
                    {reports.map((rep) => (
                      <div
                        key={rep.id}
                        className="flex items-center justify-between p-3.5 bg-[#05090e] border border-slate-800 hover:border-slate-700 rounded-xl"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-[9px] px-1.5 py-0.5 rounded font-mono-cyber uppercase ${
                                rep.severity === 'CRITICAL'
                                  ? 'bg-rose-950 text-rose-400 border border-rose-500/30'
                                  : 'bg-amber-950 text-amber-400 border border-amber-500/30'
                              }`}
                            >
                              {rep.severity}
                            </span>
                            <span className="text-xs font-bold text-slate-200">
                              {rep.title}
                            </span>
                            {rep.isCustom && (
                              <span className="text-[10px] bg-cyan-950 text-cyan-400 px-1.5 py-0.2 rounded border border-cyan-500/30">
                                CUSTOM
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400">{rep.banglaTitle}</p>
                          <p className="text-[10px] text-slate-500 font-mono-cyber">
                            Module: {rep.moduleName} | Platform: {rep.platform}
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          {rep.officialFormUrl && (
                            <a
                              href={rep.officialFormUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-slate-400 hover:text-cyan-400 bg-slate-900 border border-slate-800 rounded-lg"
                              title="Visit Form"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {rep.isCustom ? (
                            <button
                              onClick={() => {
                                onDeleteReport(rep.id);
                                playCyberSound('delete');
                              }}
                              className="p-1.5 text-rose-400 hover:bg-rose-950/60 border border-rose-500/30 rounded-lg cursor-pointer"
                              title="Delete Class"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          ) : (
                            <span className="text-[10px] text-slate-600 font-mono-cyber px-2 py-1">
                              CORE SYSTEM
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: SYSTEM DIAGNOSTICS */}
              {activeTab === 'stats' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-[#05090e] border border-cyan-500/30 rounded-xl">
                      <p className="text-xs text-slate-400 font-mono-cyber mb-1">TOTAL MODULES</p>
                      <p className="text-3xl font-bold font-mono-cyber text-cyan-400">
                        {MODULE_FOLDERS.length} FOLDERS
                      </p>
                    </div>
                    <div className="p-4 bg-[#05090e] border border-emerald-500/30 rounded-xl">
                      <p className="text-xs text-slate-400 font-mono-cyber mb-1">TOTAL REPORT CLASSES</p>
                      <p className="text-3xl font-bold font-mono-cyber text-emerald-400">
                        {reports.length} ITEMS
                      </p>
                    </div>
                    <div className="p-4 bg-[#05090e] border border-amber-500/30 rounded-xl">
                      <p className="text-xs text-slate-400 font-mono-cyber mb-1">SESSION DISPATCHES / COPIES</p>
                      <p className="text-3xl font-bold font-mono-cyber text-amber-400">
                        {copyCount} OPERATIONS
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#05090e] border border-slate-800 rounded-xl font-mono-cyber text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold border-b border-slate-800 pb-2">
                      <ShieldAlert className="w-4 h-4" />
                      <span>ENTERPRISE INTEGRITY PROTOCOL 2026</span>
                    </div>
                    <p>• Root Admin Key: Active (Session Verified)</p>
                    <p>• Variable Injector Engine: [TARGET] & [VICTIM] Synchronized</p>
                    <p>• Direct Download Engine: Multi-format .txt Serializer Ready</p>
                    <p>• Telegram Direct Signal: @signalhackers Bridge Ready</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
