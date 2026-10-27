import React, { useState } from 'react';
import {
  Download,
  Smartphone,
  Monitor,
  CheckCircle2,
  X,
  Share,
  PlusSquare,
  Sparkles,
} from 'lucide-react';
import { usePWAInstall } from '../utils/usePWAInstall';
import { playCyberSound } from '../utils/sound';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  const handleClick = async () => {
    playCyberSound('click');
    if (isInstallable) {
      const success = await install();
      if (!success) {
        setShowGuide(true);
      }
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      {/* Install Button in Header / Navigation */}
      {isInstalled ? (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-mono-cyber">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>APP INSTALLED</span>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleClick}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-black font-bold font-mono-cyber text-xs rounded-xl shadow-lg shadow-emerald-500/20 transition cursor-pointer active:scale-95 animate-pulse hover:animate-none"
          title="Install Signal Hackers CSB App on Phone or PC"
        >
          <Download className="w-3.5 h-3.5" />
          <span>INSTALL APP</span>
        </button>
      )}

      {/* Installation Guide & Help Modal */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#090e17] border border-emerald-500/40 rounded-2xl flex flex-col shadow-2xl cyber-glow-emerald overflow-hidden max-h-[90vh]">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500/30 bg-[#0c1421]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl overflow-hidden border border-emerald-500/50 flex items-center justify-center shrink-0 bg-black shadow-md">
                  <img
                    src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
                    alt="Signal Hackers Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono-cyber text-white tracking-wide">
                    INSTALL CSB TOOLKIT APP
                  </h3>
                  <p className="text-xs text-slate-400 font-mono-cyber">
                    মোবাইল ও পিসিতে সরাসরি ইনস্টল করার নিয়মাবলী
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  playCyberSound('click');
                  setShowGuide(false);
                }}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {/* Direct Native Install Button if browser supports it */}
              {isInstallable && (
                <div className="p-4 bg-emerald-950/60 border border-emerald-500/50 rounded-xl space-y-2 text-center">
                  <p className="text-xs text-emerald-300 font-mono-cyber">
                    আপনার ব্রাউজারে ওয়ান-ট্যাপ ইনস্টলেশন সাপোর্ট করে!
                  </p>
                  <button
                    type="button"
                    onClick={async () => {
                      playCyberSound('success');
                      await install();
                      setShowGuide(false);
                    }}
                    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold font-mono-cyber text-xs rounded-lg transition shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>এক ক্লিকেই ইনস্টল করুন (One-Tap Install)</span>
                  </button>
                </div>
              )}

              {/* Instructions by Device */}
              <div className="space-y-4">
                {/* Android / Chrome */}
                <div className="p-4 bg-[#05090e] border border-slate-800 hover:border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono-cyber text-xs font-bold">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>১. Android (Chrome ব্রাউজার) দিয়ে ইনস্টল:</span>
                  </div>
                  <ol className="text-xs text-slate-300 space-y-1.5 pl-5 list-decimal">
                    <li>
                      ব্রাউজারের ওপরে ডানে থাকা <strong>৩টি ডট (⋮) মেনুতে</strong> ট্যাপ করুন।
                    </li>
                    <li>
                      মেনু থেকে <strong>"Install app"</strong> অথবা <strong>"Add to Home screen" (হোম স্ক্রিনে যোগ করুন)</strong> অপশনটিতে চাপুন।
                    </li>
                    <li>
                      কনফার্মেশন আসলে <strong>"Install"</strong> বাটনে ট্যাপ করলেই অ্যাপটি হোম স্ক্রিনে অ্যাপ আকারে সেভ হয়ে যাবে।
                    </li>
                  </ol>
                </div>

                {/* iPhone / iPad (Safari) */}
                <div className="p-4 bg-[#05090e] border border-slate-800 hover:border-cyan-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono-cyber text-xs font-bold">
                    <Share className="w-4 h-4 text-cyan-400" />
                    <span>২. iPhone / iPad (Safari ব্রাউজার) দিয়ে ইনস্টল:</span>
                  </div>
                  <ol className="text-xs text-slate-300 space-y-1.5 pl-5 list-decimal">
                    <li>
                      সাফারি ব্রাউজারের নিচে থাকা <strong>Share (শেয়ার) আইকনে</strong> ট্যাপ করুন।
                    </li>
                    <li>
                      একটু নিচে স্ক্রল করে <strong>"Add to Home Screen" (+)</strong> অপশনে চাপুন।
                    </li>
                    <li>
                      উপরে ডানপাশে থাকা <strong>"Add"</strong> বাটনে ক্লিক করলেই আইফোনের হোমস্ক্রিনে অ্যাপ আইকন চলে আসবে।
                    </li>
                  </ol>
                </div>

                {/* PC / Laptop */}
                <div className="p-4 bg-[#05090e] border border-slate-800 hover:border-blue-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-mono-cyber text-xs font-bold">
                    <Monitor className="w-4 h-4 text-blue-400" />
                    <span>৩. কম্পিউটার / ল্যাপটপ (Chrome / Edge ব্রাউজার):</span>
                  </div>
                  <ol className="text-xs text-slate-300 space-y-1.5 pl-5 list-decimal">
                    <li>
                      ব্রাউজারের অ্যাড্রেস বারের ডানপাশে থাকা <strong>"Install App" (কম্পিউটার বা ডাউন-অ্যারো আইকন)</strong>-এ ক্লিক করুন।
                    </li>
                    <li>
                      পপ-আপে <strong>"Install"</strong> নির্বাচন করলেই ফুলস্ক্রিন অ্যাপ আকারে ডেস্কটপে ওপেন হবে।
                    </li>
                  </ol>
                </div>
              </div>

              {/* PWA Benefits */}
              <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-[11px] font-mono-cyber text-slate-400 space-y-1">
                <p className="text-slate-200 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  ইনস্টল করার সুবিধা:
                </p>
                <p>• প্লে স্টোর বা অ্যাপ স্টোর ছাড়াই রিয়েল অ্যাপের মতো চলে।</p>
                <p>• ব্রাউজারের সার্চ বার ছাড়া সম্পূর্ণ ফুলস্ক্রিন ফাস্ট স্পিড এক্সপেরিয়েন্স।</p>
                <p>• হোমস্ক্রিনে ট্যাপ করলেই সরাসরি কমান্ড সেন্টার ওপেন হবে।</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
