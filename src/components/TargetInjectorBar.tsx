import React from 'react';
import { Target, UserCheck, Sparkles, X, Activity, Shield } from 'lucide-react';
import { playCyberSound } from '../utils/sound';

interface TargetInjectorBarProps {
  target: string;
  victim: string;
  onTargetChange: (val: string) => void;
  onVictimChange: (val: string) => void;
  onClear: () => void;
}

export const TargetInjectorBar: React.FC<TargetInjectorBarProps> = ({
  target,
  victim,
  onTargetChange,
  onVictimChange,
  onClear,
}) => {
  const handleSampleFill = () => {
    playCyberSound('inject');
    onTargetChange('https://facebook.com/profile.php?id=6155982736412');
    onVictimChange('https://facebook.com/official.authentic.creator');
  };

  const hasValues = Boolean(target.trim() || victim.trim());

  return (
    <div className="relative w-full bg-[#080d16] border border-emerald-500/30 rounded-2xl p-4 md:p-5 shadow-xl cyber-glow-emerald backdrop-blur-sm transition-all">
      {/* Top indicator tag */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
          </div>
          <span className="text-xs font-mono-cyber font-bold tracking-wider text-emerald-400">
            SMART TARGET INJECTOR ENGINE [DUAL VARIABLE]
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono-cyber bg-emerald-950 text-emerald-300 border border-emerald-500/30 rounded">
            REAL-TIME SYNC
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleSampleFill}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-cyber bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 rounded-lg transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Load Sample Target</span>
          </button>

          {hasValues && (
            <button
              type="button"
              onClick={() => {
                playCyberSound('delete');
                onClear();
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono-cyber bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 rounded-lg transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* Two Injections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Variable 1: TARGET */}
        <div className="space-y-1.5">
          <label className="flex items-center justify-between text-xs font-mono-cyber text-slate-300">
            <span className="flex items-center gap-1.5 text-rose-400 font-bold">
              <Target className="w-4 h-4 text-rose-400" />
              [TARGET] — টার্গেট একাউন্ট / পোস্ট লিংক বা আইডি
            </span>
            <span className="text-[10px] text-slate-400 font-mono-cyber">
              {target.trim() ? (
                <span className="text-emerald-400 font-bold">✓ INJECTED</span>
              ) : (
                <span className="text-amber-400">WAITING INPUT</span>
              )}
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={target}
              onChange={(e) => {
                onTargetChange(e.target.value);
              }}
              placeholder="e.g. https://facebook.com/fake.imposter.profile or @bad_user"
              className="w-full bg-[#04070c] border border-rose-500/40 focus:border-rose-400 rounded-xl px-4 py-2.5 text-sm font-mono-cyber text-rose-200 placeholder-slate-600 outline-none transition shadow-inner"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            এখানে লিংক দিলে নিচের সকল রিপোর্টের <code className="text-rose-300 bg-rose-950/80 px-1 py-0.5 rounded font-mono-cyber">[TARGET]</code> এর জায়গায় অটো রিপ্লেস হয়ে যাবে।
          </p>
        </div>

        {/* Variable 2: VICTIM */}
        <div className="space-y-1.5">
          <label className="flex items-center justify-between text-xs font-mono-cyber text-slate-300">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <UserCheck className="w-4 h-4 text-cyan-400" />
              [VICTIM] — আসল ভিকটিম / অরিজিনাল প্রোফাইল বা ওনার
            </span>
            <span className="text-[10px] text-slate-400 font-mono-cyber">
              {victim.trim() ? (
                <span className="text-emerald-400 font-bold">✓ INJECTED</span>
              ) : (
                <span className="text-amber-400">WAITING INPUT</span>
              )}
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={victim}
              onChange={(e) => {
                onVictimChange(e.target.value);
              }}
              placeholder="e.g. https://facebook.com/original.real.victim or My Legal Identity"
              className="w-full bg-[#04070c] border border-cyan-500/40 focus:border-cyan-400 rounded-xl px-4 py-2.5 text-sm font-mono-cyber text-cyan-200 placeholder-slate-600 outline-none transition shadow-inner"
            />
          </div>
          <p className="text-[11px] text-slate-400">
            আসল ওনার বা ভিকটিমের তথ্য দিলে <code className="text-cyan-300 bg-cyan-950/80 px-1 py-0.5 rounded font-mono-cyber">[VICTIM]</code> ট্যাগে সরাসরি বসে যাবে।
          </p>
        </div>
      </div>

      {/* Live Status Bar */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] font-mono-cyber text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>INJECTION STATUS:</span>
          <span className="text-emerald-400">
            {target.trim() ? `ACTIVE TARGET: ${target.slice(0, 32)}...` : 'TARGET STANDBY'}
          </span>
        </div>
        <div className="text-slate-400">
          VARIABLES BOUND: <span className="text-rose-400 font-bold">[TARGET]</span> & <span className="text-cyan-400 font-bold">[VICTIM]</span>
        </div>
      </div>
    </div>
  );
};
