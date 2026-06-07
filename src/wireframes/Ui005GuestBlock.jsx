import React from 'react';
import { Search, Bell, Menu, MoreHorizontal, Heart, MessageCircle, UserX } from 'lucide-react';

export default function Ui005GuestBlock() {
  return (
    <div className="h-full bg-slate-50 relative flex flex-col overflow-hidden">
      {/* Background Feed (Simulated) */}
      <div className="px-5 py-3 bg-white border-b border-slate-100 flex justify-between items-center sticky top-0 z-0">
        <div className="flex items-center gap-1 font-bold text-lg text-slate-900">
          우리동네 <span className="text-sm text-slate-500 font-normal ml-1">송파구 ▼</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <Search size={22} />
          <Bell size={22} />
          <Menu size={22} />
        </div>
      </div>

      <div className="p-4 space-y-4 filter blur-[2px] opacity-60">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100"></div>
            <div className="w-24 h-4 bg-slate-200 rounded"></div>
          </div>
          <div className="w-full h-16 bg-slate-100 rounded mb-4"></div>
          <div className="flex gap-4 border-t border-slate-100 pt-3">
            <div className="w-12 h-4 bg-slate-200 rounded"></div>
            <div className="w-12 h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      {/* Login Prompt Modal Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-end">
        <div className="bg-white w-full rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center text-center pb-12 animate-in slide-in-from-bottom-full duration-300">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full mb-6"></div>
          
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-4">
            <UserX size={32} />
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mb-2">로그인이 필요합니다</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            이웃의 게시글에 좋아요를 누르거나<br />댓글을 남기려면 회원가입이 필요해요.
          </p>

          <button className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl mb-3 shadow-lg shadow-primary-500/30">
            3초 만에 빠른 시작하기
          </button>
          <button className="w-full py-4 bg-white text-slate-500 font-bold rounded-xl">
            다음에 할게요
          </button>
        </div>
      </div>
    </div>
  );
}
