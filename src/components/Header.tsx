import React from 'react';
import {
  ShieldAlert,
  Volume2,
  VolumeX,
  Binary,
  Lock,
  LogOut,
  FolderTree,
  FileText,
  Star,
  Activity,
  User,
  HelpCircle,
} from 'lucide-react';
import { playCyberSound } from '../utils/sound';
import { UserSession } from './AuthModal';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  onOpenAdmin: () => void;
  onOpenSupport: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  matrixActive: boolean;
  onToggleMatrix: () => void;
  matrixColor: string;
  onChangeMatrixColor: (col: string) => void;
  user: UserSession | null;
  onLogout: () => void;
  totalModules: number;
  totalReports: number;
  pinnedCount: number;
  copyCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAdmin,
  onOpenSupport,
  soundEnabled,
  onToggleSound,
  matrixActive,
  onToggleMatrix,
  matrixColor,
  onChangeMatrixColor,
  user,
  onLogout,
  totalModules,
  totalReports,
  pinnedCount,
  copyCount,
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#060a10]/90 border-b border-emerald-500/30 backdrop-blur-md shadow-2xl">
      {/* Top micro ticker */}
      <div className="hidden sm:flex items-center justify-between px-4 lg:px-8 py-1 bg-[#04070b] border-b border-slate-900 text-[10px] font-mono-cyber text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            OPERATIONAL HUD: ONLINE
          </span>
          <span>CYBER COMMAND SYSTEM v5.0</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400">DOUBLE-CLICK LOGO OR CTRL+SHIFT+A FOR SECRET ADMIN</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-slate-400">
            DISPATCH KEY: <span className="text-emerald-400 font-bold">256-BIT SHA</span>
          </span>
          <span className="text-slate-400">
            NETWORK: <span className="text-cyan-400">SECURE ENCLAVE</span>
          </span>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        {/* App Logo & Branding */}
        <div className="flex items-center gap-3">
          <div
            onDoubleClick={() => {
              playCyberSound('matrix');
              onOpenAdmin();
            }}
            title="Double-click to open Secret Admin Control Panel!"
            className="group relative w-12 h-12 rounded-xl overflow-hidden border-2 border-emerald-500/60 flex items-center justify-center cursor-pointer hover:border-cyan-400 hover:scale-105 transition-all shadow-lg shadow-emerald-500/30 shrink-0 bg-black"
          >
            <img
              src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
              alt="Signal Hackers CSB Official Logo"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#060a10] shadow-sm animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg md:text-xl font-bold font-tactical tracking-wider text-white">
                SIGNAL HACKERS <span className="text-emerald-400">CSB</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-mono-cyber font-bold bg-emerald-950 text-emerald-300 border border-emerald-500/40 rounded-full">
                PRO v5.0
              </span>
            </div>
            <p className="text-[11px] font-mono-cyber text-slate-400 flex items-center gap-2">
              <span>Cyber Reporting & Legal Takedown Command Center</span>
            </p>
          </div>
        </div>

        {/* Live Metrics HUD Counter */}
        <div className="hidden lg:flex items-center gap-3 bg-[#0a1017] border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-mono-cyber shadow-inner">
          <div className="flex items-center gap-1.5 pr-2.5 border-r border-slate-800">
            <FolderTree className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400">MODULES:</span>
            <span className="text-cyan-400 font-bold">{totalModules}</span>
          </div>

          <div className="flex items-center gap-1.5 pr-2.5 border-r border-slate-800">
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-400">CLASSES:</span>
            <span className="text-emerald-400 font-bold">{totalReports}</span>
          </div>

          <div className="flex items-center gap-1.5 pr-2.5 border-r border-slate-800">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-slate-400">PINNED:</span>
            <span className="text-amber-400 font-bold">{pinnedCount}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-rose-400" />
            <span className="text-slate-400">COPIES:</span>
            <span className="text-rose-400 font-bold">{copyCount}</span>
          </div>
        </div>

        {/* Controls: Audio, Matrix, Admin, Help, Profile */}
        <div className="flex items-center gap-2">
          {/* Audio Beep Toggle */}
          <button
            type="button"
            onClick={() => {
              onToggleSound();
              playCyberSound('click');
            }}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              soundEnabled
                ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400 hover:bg-emerald-900/60'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={soundEnabled ? 'Cyber Sound FX: ON' : 'Cyber Sound FX: OFF'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Matrix Rain Toggle */}
          <button
            type="button"
            onClick={() => {
              playCyberSound('matrix');
              onToggleMatrix();
            }}
            className={`p-2 rounded-xl border transition cursor-pointer ${
              matrixActive
                ? 'bg-cyan-950/60 border-cyan-500/40 text-cyan-400 hover:bg-cyan-900/60'
                : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={matrixActive ? 'Matrix Rain FX: ON' : 'Matrix Rain FX: OFF'}
          >
            <Binary className="w-4 h-4" />
          </button>

          {/* Matrix Color Switcher (Visible when matrix active) */}
          {matrixActive && (
            <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg">
              <button
                onClick={() => onChangeMatrixColor('#10b981')}
                className={`w-3 h-3 rounded-full bg-emerald-500 cursor-pointer ${
                  matrixColor === '#10b981' ? 'ring-2 ring-white' : 'opacity-60'
                }`}
                title="Matrix Green"
              />
              <button
                onClick={() => onChangeMatrixColor('#06b6d4')}
                className={`w-3 h-3 rounded-full bg-cyan-400 cursor-pointer ${
                  matrixColor === '#06b6d4' ? 'ring-2 ring-white' : 'opacity-60'
                }`}
                title="Cyber Cyan"
              />
              <button
                onClick={() => onChangeMatrixColor('#f43f5e')}
                className={`w-3 h-3 rounded-full bg-rose-500 cursor-pointer ${
                  matrixColor === '#f43f5e' ? 'ring-2 ring-white' : 'opacity-60'
                }`}
                title="Neon Red"
              />
            </div>
          )}

          {/* PWA Install Button */}
          <PWAInstallButton />

          {/* Secret Admin Button */}
          <button
            type="button"
            onClick={() => {
              playCyberSound('click');
              onOpenAdmin();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-cyber rounded-xl transition cursor-pointer"
            title="Open Secret Admin Panel (admin123)"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ADMIN</span>
          </button>

          {/* Support Helpline Modal Button */}
          <button
            type="button"
            onClick={() => {
              playCyberSound('click');
              onOpenSupport();
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono-cyber rounded-xl transition cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">HELPLINE</span>
          </button>

          {/* User Status / Logout */}
          {user && (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="hidden md:flex flex-col text-right">
                <span className="text-xs font-mono-cyber font-bold text-slate-200">
                  {user.name}
                </span>
                <span className="text-[10px] font-mono-cyber text-emerald-400">
                  {user.rank}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  playCyberSound('click');
                  onLogout();
                }}
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-950/40 rounded-xl border border-transparent hover:border-rose-500/30 transition cursor-pointer"
                title="Logout from Command Portal"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
