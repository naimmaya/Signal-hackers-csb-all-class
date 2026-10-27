import React from 'react';
import {
  X,
  Send,
  MessageCircle,
  ShieldAlert,
  Clock,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { playCyberSound } from '../utils/sound';

interface SupportHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportHubModal: React.FC<SupportHubModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#090e17] border border-cyan-500/40 rounded-2xl flex flex-col shadow-2xl cyber-glow-cyan overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/30 bg-[#0c1421]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-cyan-500/50 flex items-center justify-center shrink-0 bg-black shadow-md shadow-cyan-500/20">
              <img
                src="/assets/aistudio/file_0000000084b881f485286a78bbfab9eb_d9989093.png"
                alt="Signal Hackers CSB Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-mono-cyber text-white tracking-wide">
                SUPPORT HUB & CYBER HELPLINE
              </h3>
              <p className="text-xs text-slate-400 font-mono-cyber">
                Signal Hackers CSB Official Assistance Desk
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Quick Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Telegram */}
            <a
              href="https://t.me/signalhackers"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberSound('success')}
              className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[#0c1c2e] to-[#08121f] border border-cyan-500/40 hover:border-cyan-400 transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition">
                <Send className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono-cyber text-cyan-400 font-bold uppercase">
                  OFFICIAL TELEGRAM
                </span>
                <h4 className="text-base font-bold text-white flex items-center gap-1">
                  @signalhackers
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </h4>
                <p className="text-xs text-slate-400">
                  জয়েন করুন ফ্রি আপিল আপডেট ও সিকিউরিটি ডিসকাশন চ্যানেলে।
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/message/signalhackers"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playCyberSound('success')}
              className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-[#0a1e16] to-[#07130f] border border-emerald-500/40 hover:border-emerald-400 transition-all hover:scale-[1.02] shadow-lg cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono-cyber text-emerald-400 font-bold uppercase">
                  WHATSAPP HELPLINE
                </span>
                <h4 className="text-base font-bold text-white flex items-center gap-1">
                  Direct WhatsApp Chat
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </h4>
                <p className="text-xs text-slate-400">
                  জরুরি সাইবার বুলিং ও একাউন্ট রিকভারি সহায়তা।
                </p>
              </div>
            </a>
          </div>

          {/* Platform Turnaround Response Timeline */}
          <div className="p-4 bg-[#05090e] border border-slate-800 rounded-xl space-y-3">
            <h4 className="text-xs font-mono-cyber font-bold text-slate-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              অফিশিয়াল প্ল্যাটফর্ম রেসপন্স টাইম বেঞ্চমার্ক (SLA):
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-cyber">
              <div className="p-3 bg-[#0a1017] border border-blue-500/20 rounded-lg">
                <p className="text-blue-400 font-bold">📘 Meta Imposter</p>
                <p className="text-slate-300 text-sm font-bold mt-1">12 - 24 Hours</p>
                <p className="text-[10px] text-slate-500 mt-0.5">গড় রেসপন্স ও টার্মিনেশন</p>
              </div>
              <div className="p-3 bg-[#0a1017] border border-amber-500/20 rounded-lg">
                <p className="text-amber-400 font-bold">⚖️ DMCA Copyright</p>
                <p className="text-slate-300 text-sm font-bold mt-1">24 - 48 Hours</p>
                <p className="text-[10px] text-slate-500 mt-0.5">লিগ্যাল নোটিশ প্রসেসিং</p>
              </div>
              <div className="p-3 bg-[#0a1017] border border-pink-500/20 rounded-lg">
                <p className="text-pink-400 font-bold">🎵 TikTok Safety</p>
                <p className="text-slate-300 text-sm font-bold mt-1">24 - 72 Hours</p>
                <p className="text-[10px] text-slate-500 mt-0.5">চাইল্ড ও ফেক একাউন্ট রিভিউ</p>
              </div>
            </div>
          </div>

          {/* Pro Tips for Higher Success Rate */}
          <div className="p-4 bg-[#05090e] border border-slate-800 rounded-xl space-y-2 text-xs text-slate-300">
            <h4 className="font-bold text-emerald-400 flex items-center gap-1.5 font-mono-cyber">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              দ্রুত রেজাল্ট পাওয়ার ৫টি সিক্রেট টিপস:
            </h4>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-400">
              <li>সর্বদা টার্গেট প্রোফাইলের সরাসরি পার্মালিংক অথবা নিউমেরিক ইউজার আইডি ব্যবহার করুন।</li>
              <li>ভিকটিম বক্সে অরিজিনাল একাউন্ট লিংক নিশ্চিত করুন যাতে মেটার অটোমেটেড বট সহজেই ক্লোন চিহ্নিত করতে পারে।</li>
              <li>একই দিনে একাধিক ব্যক্তি দ্বারা রিপোর্ট পাঠালে মেটার অ্যালগরিদম টার্গেটকে <span className="text-rose-400 font-mono-cyber">High Threat Escalation</span> কিউতে স্থান দেয়।</li>
              <li>কপিরাইট কন্টেন্টের ক্ষেত্রে অরিজিনাল ভিডিও আপলোডের তারিখ ও প্রমাণপত্র সংযুক্ত রাখুন।</li>
              <li>জরুরি ক্ষেত্রে Indian Grievance Officer বা Legal Representation ফর্ম ব্যবহার করলে ২৪ ঘণ্টার মধ্যে বাধ্যতামূলক আইনি তদন্ত শুরু হয়।</li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="flex items-start gap-3 p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl text-xs text-amber-300/90 font-mono-cyber">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400 mt-0.5" />
            <p>
              আইনি সতর্কতা: এই টুলকিটটি শুধুমাত্র সাইবার ক্রাইম প্রতিরোধ, পরিচয় চুরি ও কপিরাইট সুরক্ষায় আইনি আপিল তৈরির উদ্দেশ্যে নির্মিত। কোনো নির্দোষ ব্যক্তির ক্ষতিসাধনের উদ্দেশ্যে ভুল রিপোর্ট করলে প্ল্যাটফর্মের পলিসি অনুযায়ী রিপোর্টকারীর একাউন্ট ক্ষতিগ্রস্ত হতে পারে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
