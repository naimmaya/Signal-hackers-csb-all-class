import React, { useState } from 'react';
import { ShieldCheck, Lock, Mail, Phone, ArrowRight, UserCheck, KeyRound, AlertTriangle } from 'lucide-react';
import { playCyberSound } from '../utils/sound';
import { safeStorage } from '../utils/safeStorage';

export interface UserSession {
  emailOrPhone: string;
  name: string;
  rank: string;
  loginTime: string;
}

interface AuthModalProps {
  isOpen: boolean;
  onLoginSuccess: (session: UserSession) => void;
  defaultEmail?: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onLoginSuccess,
  defaultEmail = 'naimmaya109@gmail.com',
}) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [identifier, setIdentifier] = useState(defaultEmail);
  const [password, setPassword] = useState('csb2026pro');
  const [fullName, setFullName] = useState('Cyber Tactical Operator');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const cleanId = identifier.trim();
    if (!cleanId) {
      setError('দয়া করে আপনার ভ্যালিড জিমেইল বা ফোন নম্বর প্রবেশ করান।');
      playCyberSound('alert');
      return;
    }

    if (password.length < 6) {
      setError('পাসওয়ার্ড ন্যূনতম ৬ অক্ষরের হতে হবে।');
      playCyberSound('alert');
      return;
    }

    // Validated
    playCyberSound('success');
    const session: UserSession = {
      emailOrPhone: cleanId,
      name: isSignUp ? fullName : (cleanId.split('@')[0] || 'Operator'),
      rank: 'CSB Command Operator (v5.0)',
      loginTime: new Date().toLocaleTimeString(),
    };

    safeStorage.setItem('csb_user_session', JSON.stringify(session));
    onLoginSuccess(session);
  };

  const handleQuickDemo = () => {
    playCyberSound('beep');
    setIdentifier(defaultEmail);
    setPassword('csb2026pro');
    setFullName('Tactical Admin Operator');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0a1017] border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-2xl cyber-glow-emerald">
        {/* Glow header bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-500 rounded-t-2xl animate-pulse" />

        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-emerald-500/60 flex items-center justify-center mb-3 shadow-2xl shadow-emerald-500/30 bg-black">
            <img
              src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
              alt="Signal Hackers CSB Official Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="px-3 py-1 text-[11px] font-mono-cyber uppercase tracking-widest text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 rounded-full mb-1">
            TERMINAL SECURITY GATE v5.0
          </span>
          <h2 className="text-2xl font-bold font-tactical tracking-wide text-white">
            SIGNAL HACKERS CSB
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {isSignUp
              ? 'নতুন সিকিউর একাউন্ট রেজিস্টার করে কমান্ড সেন্টারে প্রবেশ করুন'
              : 'ভ্যালিড জিমেইল বা ফোন নম্বর ও পাসওয়ার্ড দিয়ে লগইন করুন'}
          </p>
        </div>

        {error && (
          <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs">
            <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-mono-cyber text-slate-300 mb-1.5">
                FULL NAME / CODENAME
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. RedTeam Operative"
                  className="w-full bg-[#05090e] border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition font-sans"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-mono-cyber text-slate-300 mb-1.5 flex justify-between">
              <span>GMAIL OR PHONE NUMBER</span>
              <span className="text-[10px] text-emerald-400">ENCRYPTED 256-BIT</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                {identifier.includes('@') ? (
                  <Mail className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Phone className="w-4 h-4 text-emerald-400" />
                )}
              </div>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@gmail.com অথবা 017xxxxxxxx"
                className="w-full bg-[#05090e] border border-slate-700 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition font-mono-cyber"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono-cyber text-slate-300 mb-1.5 flex justify-between">
              <span>PASSWORD</span>
              <span className="text-[10px] text-slate-400">SECURE TOKEN</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Lock className="w-4 h-4 text-emerald-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#05090e] border border-slate-700 focus:border-emerald-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none transition font-mono-cyber"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-black font-bold font-mono-cyber text-sm rounded-xl transition shadow-lg shadow-emerald-500/30 cursor-pointer active:scale-[0.98]"
          >
            {isSignUp ? <UserCheck className="w-4 h-4" /> : <KeyRound className="w-4 h-4" />}
            <span>{isSignUp ? 'REGISTER & ENTER COMMAND CENTER' : 'AUTHENTICATE & ENTER PORTAL'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={handleQuickDemo}
            className="text-emerald-400 hover:underline flex items-center gap-1 font-mono-cyber cursor-pointer"
          >
            ⚡ Quick Demo Auto-Fill
          </button>

          <button
            type="button"
            onClick={() => {
              playCyberSound('click');
              setIsSignUp(!isSignUp);
              setError('');
            }}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            {isSignUp ? 'ইতিমধ্যে অ্যাকাউন্ট আছে? লগইন করুন' : 'নতুন অ্যাকাউন্ট তৈরি করুন (Sign Up)'}
          </button>
        </div>
      </div>
    </div>
  );
};
