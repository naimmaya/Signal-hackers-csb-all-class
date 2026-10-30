import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCw, Trash2 } from 'lucide-react';
import { safeStorage } from '../utils/safeStorage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in CSB Toolkit:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    safeStorage.clear();
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#05090e] text-slate-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-[#0a1017] border border-rose-500/40 rounded-2xl p-6 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <h2 className="text-xl font-bold font-mono text-white tracking-wide">
              SYSTEM INITIALIZATION RECOVERY
            </h2>

            <p className="text-xs text-slate-400 leading-relaxed">
              অ্যাপটি চালু করতে একটি সাময়িক সমস্যা হয়েছে। নিচে থাকা বাটনে ক্লিক করে অ্যাপটি পুনরায় রিলোড অথবা ক্যাশ রিসেট করুন।
            </p>

            <div className="p-3 bg-[#05090e] border border-slate-800 rounded-xl text-left text-[11px] font-mono text-slate-400 overflow-x-auto max-h-24">
              {this.state.error?.message || 'Unknown runtime state'}
            </div>

            <div className="space-y-2 pt-2">
              <button
                onClick={this.handleReload}
                className="w-full flex items-center justify-center gap-2 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs rounded-xl transition cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>RELOAD COMMAND CENTER (পুনরায় লোড করুন)</span>
              </button>

              <button
                onClick={this.handleReset}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 font-mono text-xs rounded-xl transition cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                <span>Clear Cache & Restart (ক্যাশ ক্লিয়ার করুন)</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
