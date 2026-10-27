import React, { useState } from 'react';
import {
  Star,
  Copy,
  Check,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  AlertOctagon,
  ShieldAlert,
  Info,
  Languages,
  Link2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReportItem } from '../data/reportData';
import { injectVariables, downloadAsTxtFile } from '../utils/textEngine';
import { playCyberSound } from '../utils/sound';

interface ReportCardProps {
  report: ReportItem;
  target: string;
  victim: string;
  isPinned: boolean;
  onTogglePin: (id: string) => void;
  onCopySuccess: (report: ReportItem) => void;
}

export const ReportCard: React.FC<ReportCardProps> = ({
  report,
  target,
  victim,
  isPinned,
  onTogglePin,
  onCopySuccess,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [activeLang, setActiveLang] = useState<'default' | 'arabic' | 'bangla'>('default');

  const handleCopyFormLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!report.officialFormUrl) return;
    navigator.clipboard.writeText(report.officialFormUrl);
    playCyberSound('success');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const resolvedTemplate = () => {
    if (activeLang === 'arabic' && report.appealTemplateAr) {
      return injectVariables(report.appealTemplateAr, target, victim);
    }
    if (activeLang === 'bangla' && report.appealTemplateBn) {
      return injectVariables(report.appealTemplateBn, target, victim);
    }
    return injectVariables(report.appealTemplate, target, victim);
  };

  const currentText = resolvedTemplate();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    playCyberSound('success');
    setCopied(true);
    onCopySuccess(report);

    // Subtle cyberpunk confetti burst
    confetti({
      particleCount: 28,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#06b6d4', '#3b82f6'],
    });

    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownload = () => {
    playCyberSound('inject');
    downloadAsTxtFile(report, target, victim);
  };

  const getSeverityStyle = (sev: string) => {
    switch (sev) {
      case 'CRITICAL':
        return 'border-rose-500/40 text-rose-400 bg-rose-950/60 shadow-rose-950/50';
      case 'HIGH':
        return 'border-amber-500/40 text-amber-400 bg-amber-950/60 shadow-amber-950/50';
      default:
        return 'border-emerald-500/40 text-emerald-400 bg-emerald-950/60 shadow-emerald-950/50';
    }
  };

  const getPlatformBadge = (plat: string) => {
    switch (plat) {
      case 'facebook':
        return { label: 'FACEBOOK', color: 'bg-blue-950 text-blue-400 border-blue-500/30' };
      case 'meta':
        return { label: 'META 2026', color: 'bg-indigo-950 text-indigo-400 border-indigo-500/30' };
      case 'tiktok':
        return { label: 'TIKTOK', color: 'bg-pink-950 text-pink-400 border-pink-500/30' };
      case 'copyright':
        return { label: 'DMCA / IP', color: 'bg-amber-950 text-amber-400 border-amber-500/30' };
      case 'legal':
        return { label: 'LEGAL STATUTORY', color: 'bg-cyan-950 text-cyan-400 border-cyan-500/30' };
      default:
        return { label: 'CYBER CORE', color: 'bg-slate-900 text-slate-300 border-slate-700' };
    }
  };

  const platBadge = getPlatformBadge(report.platform);

  return (
    <div className="group relative bg-[#090e17] border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-emerald-950/20">
      {/* Top Header */}
      <div className="p-4 md:p-5 border-b border-slate-800/80 bg-[#070b12]">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              {report.classNumber && (
                <span className="px-2 py-0.5 text-[10px] font-mono-cyber font-bold rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {report.classNumber}
                </span>
              )}
              <span className={`px-2 py-0.5 text-[10px] font-mono-cyber font-bold rounded border ${platBadge.color}`}>
                {platBadge.label}
              </span>
              <span className={`px-2 py-0.5 text-[10px] font-mono-cyber font-bold rounded border ${getSeverityStyle(report.severity)}`}>
                {report.severity} PRIORITY
              </span>
              <span className="text-[11px] text-slate-400 font-mono-cyber">
                {report.moduleName}
              </span>
            </div>

            <h3 className="text-base md:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
              {report.title}
            </h3>
            <p className="text-xs text-slate-300 font-medium">
              {report.banglaTitle}
            </p>
          </div>

          {/* Star Pin Button */}
          <button
            type="button"
            onClick={() => {
              playCyberSound('beep');
              onTogglePin(report.id);
            }}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              isPinned
                ? 'bg-amber-500/20 border-amber-500 text-amber-400 scale-105 shadow-md shadow-amber-500/20'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-amber-400 hover:border-slate-700'
            }`}
            title={isPinned ? 'Remove from Pinned' : 'Pin to Favorites'}
          >
            <Star className={`w-4 h-4 ${isPinned ? 'fill-amber-400' : ''}`} />
          </button>
        </div>

        {/* Short Description */}
        <p className="mt-3 text-xs text-slate-400 leading-relaxed">
          {report.description}
        </p>

        {/* Multi-language switch if available */}
        {(report.appealTemplateAr || report.appealTemplateBn) && (
          <div className="mt-3 flex items-center gap-1.5">
            <span className="text-[10px] font-mono-cyber text-slate-400 flex items-center gap-1">
              <Languages className="w-3 h-3 text-cyan-400" />
              LANGUAGE:
            </span>
            <button
              onClick={() => setActiveLang('default')}
              className={`px-2 py-0.5 text-[10px] font-mono-cyber rounded border transition cursor-pointer ${
                activeLang === 'default'
                  ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Default (Full)
            </button>
            {report.appealTemplateAr && (
              <button
                onClick={() => setActiveLang('arabic')}
                className={`px-2 py-0.5 text-[10px] font-mono-cyber rounded border transition cursor-pointer ${
                  activeLang === 'arabic'
                    ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                العربية (Arabic)
              </button>
            )}
            {report.appealTemplateBn && (
              <button
                onClick={() => setActiveLang('bangla')}
                className={`px-2 py-0.5 text-[10px] font-mono-cyber rounded border transition cursor-pointer ${
                  activeLang === 'bangla'
                    ? 'bg-cyan-950 text-cyan-300 border-cyan-500/50'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                বাংলা (Bengali)
              </button>
            )}
          </div>
        )}
      </div>

      {/* Appeal Text Terminal Box with Live Highlight */}
      <div className="p-4 md:p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono-cyber text-slate-400 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
            INJECTED DISPATCH APPEAL TEXT:
          </span>
          <span className="text-[10px] font-mono-cyber text-slate-400">
            {target.trim() ? (
              <span className="text-emerald-400">Target Bound</span>
            ) : (
              <span className="text-amber-400">Using [TARGET] Placeholder</span>
            )}
          </span>
        </div>

        <div className="relative bg-[#04070c] border border-slate-800 rounded-xl p-3.5 font-mono-cyber text-xs text-slate-300 leading-relaxed max-h-48 overflow-y-auto whitespace-pre-wrap select-all">
          {currentText}
        </div>

        {/* Visible Official Form Link Section with One-Click Copy */}
        <div className="mt-3 p-3 bg-[#05090e] border border-blue-500/30 rounded-xl space-y-1.5 shadow-inner">
          <div className="flex items-center justify-between text-[11px] font-mono-cyber">
            <span className="text-blue-400 font-bold flex items-center gap-1.5">
              <Link2 className="w-3.5 h-3.5" />
              OFFICIAL FORM LINK (ফর্ম লিংক):
            </span>
            <span className="text-[10px] text-slate-400">
              {report.formName || 'Direct Official Portal'}
            </span>
          </div>

          {report.officialFormUrl ? (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
              <div 
                onClick={handleCopyFormLink}
                title="Click to copy link"
                className="flex-1 bg-[#090e17] border border-slate-800 hover:border-blue-500/50 rounded-lg px-2.5 py-1.5 text-xs font-mono-cyber text-cyan-300 truncate select-all cursor-pointer transition"
              >
                {report.officialFormUrl}
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyFormLink}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-mono-cyber font-bold rounded-lg border transition cursor-pointer ${
                    copiedLink
                      ? 'bg-emerald-500 text-black border-emerald-400 shadow-md shadow-emerald-500/20'
                      : 'bg-blue-950/80 hover:bg-blue-900 border-blue-500/50 text-blue-300 hover:text-white active:scale-95'
                  }`}
                  title="ফর্ম লিংক কপি করুন"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>LINK COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY LINK</span>
                    </>
                  )}
                </button>

                <a
                  href={report.officialFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberSound('click')}
                  className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono-cyber bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition"
                  title="ফর্ম ওপেন করুন"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>OPEN</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="p-2 bg-[#090e17] border border-slate-800 rounded-lg text-xs font-mono-cyber text-slate-400 flex items-center justify-between">
              <span>📌 ইন-অ্যাপ সাপোর্ট ও প্রোফাইল রিপোর্ট মেনু (In-App Direct Reporting)</span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                IN-APP ACTION
              </span>
            </div>
          )}
        </div>

        {/* Step-by-Step Instructions Toggle */}
        {report.instructions && report.instructions.length > 0 && (
          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                playCyberSound('click');
                setShowInstructions(!showInstructions);
              }}
              className="flex items-center justify-between w-full px-3 py-1.5 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 rounded-lg text-xs font-mono-cyber text-slate-400 hover:text-slate-200 transition cursor-pointer"
            >
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-cyan-400" />
                রিপোর্ট সাবমিট নির্দেশিকা (Step-by-Step Guide)
              </span>
              {showInstructions ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {showInstructions && (
              <div className="mt-2 p-3 bg-slate-900/90 border border-slate-800 rounded-lg space-y-1.5 text-xs text-slate-300">
                {report.instructions.map((inst, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 font-mono-cyber text-[10px]">
                      0{idx + 1}
                    </span>
                    <span className="flex-1">{inst}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Action Footer Bar */}
      <div className="px-4 py-3 bg-[#060a10] border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {report.officialFormUrl && (
            <>
              <button
                type="button"
                onClick={handleCopyFormLink}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-cyber rounded-xl border transition cursor-pointer ${
                  copiedLink
                    ? 'bg-emerald-500 text-black border-emerald-400 font-bold'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-cyan-300'
                }`}
                title="ফর্মের লিংক কপি করুন"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5 text-blue-400" />}
                <span>{copiedLink ? 'Link Copied!' : 'Copy Form Link'}</span>
              </button>

              <a
                href={report.officialFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playCyberSound('click')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-950/70 hover:bg-blue-900/80 border border-blue-500/40 text-blue-300 text-xs font-mono-cyber rounded-xl transition cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open Form</span>
              </a>
            </>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Direct Download .txt File */}
          <button
            type="button"
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-mono-cyber rounded-xl transition cursor-pointer"
            title="Download full report as .txt file"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>.TXT</span>
          </button>

          {/* Copy Button */}
          <button
            type="button"
            onClick={handleCopy}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono-cyber font-bold rounded-xl transition shadow-md cursor-pointer ${
              copied
                ? 'bg-emerald-500 text-black shadow-emerald-500/30'
                : 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-black shadow-emerald-600/20 active:scale-95'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                <span>COPIED!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>COPY APPEAL</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
