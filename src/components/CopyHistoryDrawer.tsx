import React, { useState } from 'react';
import { History, Trash2, Copy, Check, ChevronUp, ChevronDown, Clock, ShieldCheck } from 'lucide-react';
import { CopyHistoryItem } from '../utils/textEngine';
import { playCyberSound } from '../utils/sound';

interface CopyHistoryDrawerProps {
  history: CopyHistoryItem[];
  onClearHistory: () => void;
  onReCopy: (text: string) => void;
}

export const CopyHistoryDrawer: React.FC<CopyHistoryDrawerProps> = ({
  history,
  onClearHistory,
  onReCopy,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (history.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 md:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Toggle Bar */}
        <div
          onClick={() => {
            playCyberSound('click');
            setIsOpen(!isOpen);
          }}
          className="flex items-center justify-between px-4 py-2.5 bg-[#090e17]/95 hover:bg-[#0c1421] border-t border-x border-cyan-500/30 rounded-t-xl cursor-pointer shadow-2xl backdrop-blur-md transition-all"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <History className="w-3 h-3" />
            </div>
            <span className="text-xs font-mono-cyber font-bold text-cyan-400">
              SESSION COPY HISTORY ({history.length})
            </span>
            <span className="hidden sm:inline-block text-[11px] text-slate-400 font-mono-cyber">
              • Latest: {history[0]?.title.slice(0, 35)}...
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-400 font-mono-cyber">
              {isOpen ? 'Click to minimize' : 'Click to inspect history'}
            </span>
            {isOpen ? (
              <ChevronDown className="w-4 h-4 text-cyan-400" />
            ) : (
              <ChevronUp className="w-4 h-4 text-cyan-400" />
            )}
          </div>
        </div>

        {/* Expanded Panel */}
        {isOpen && (
          <div className="bg-[#060a10]/95 border-x border-b border-cyan-500/30 p-4 max-h-64 overflow-y-auto space-y-2 backdrop-blur-lg shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs font-mono-cyber">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Live Dispatched Incident Records in Current Session
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  playCyberSound('delete');
                  onClearHistory();
                }}
                className="flex items-center gap-1 px-2.5 py-1 bg-rose-950/60 hover:bg-rose-900/70 border border-rose-500/30 text-rose-300 rounded-lg cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Session History (মুছে ফেলুন)</span>
              </button>
            </div>

            <div className="space-y-2 pt-1">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-[#090e17] border border-slate-800 hover:border-cyan-500/40 rounded-xl text-xs font-mono-cyber"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">{item.title}</span>
                      <span className="text-[10px] text-slate-500">{item.timeFormatted}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex flex-wrap gap-2">
                      <span>
                        Target: <span className="text-rose-400">{item.targetInjected}</span>
                      </span>
                      <span>
                        Victim: <span className="text-cyan-400">{item.victimInjected}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        playCyberSound('click');
                        navigator.clipboard.writeText(`Target: ${item.targetInjected} | ${item.title}`);
                        setCopiedId(item.id);
                        setTimeout(() => setCopiedId(null), 1500);
                      }}
                      className="flex items-center gap-1 px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded-lg cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Re-Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
