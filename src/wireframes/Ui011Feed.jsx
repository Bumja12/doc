import React from 'react';
import { Search, Bell, Menu, MoreHorizontal, Heart, MessageCircle } from 'lucide-react';

export default function Ui011Feed() {
  return (
    <div className="h-full bg-slate-50 relative flex flex-col">
      {/* Header */}
      <div className="px-5 py-3 bg-white border-b border-slate-100 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-1 font-bold text-lg text-slate-900 cursor-pointer">
          우리동네 <span className="text-sm text-slate-500 font-normal ml-1">송파구 ▼</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700">
          <Search size={22} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <Bell size={22} />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          </div>
          <Menu size={22} className="cursor-pointer" />
        </div>
      </div>

      {/* Feed List */}
      <div className="flex-1 overflow-y-auto p-4 pb-24 space-y-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">🐶</div>
              <div>
                <div className="font-bold text-sm text-slate-900">강아지산책러</div>
                <div className="text-xs text-slate-400 mt-0.5">송파동 · 10분 전</div>
              </div>
            </div>
            <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="text-[15px] text-slate-800 leading-relaxed mb-3">
            올림픽공원 산책하기 너무 좋은 날씨네요! 같이 강아지 산책하실 이웃 계신가요?
          </div>
          <div className="flex gap-2 mb-4">
            <span className="bg-slate-100 text-primary-600 px-2.5 py-1 rounded-full text-xs font-semibold">#반려동물</span>
            <span className="bg-slate-100 text-primary-600 px-2.5 py-1 rounded-full text-xs font-semibold">#산책</span>
          </div>
          <div className="flex gap-4 border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-red-500 cursor-pointer">
              <Heart size={16} className="fill-current" /> 12
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 cursor-pointer">
              <MessageCircle size={16} /> 5
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-lg">☕️</div>
              <div>
                <div className="font-bold text-sm text-slate-900">단골손님</div>
                <div className="text-xs text-slate-400 mt-0.5">방이동 · 1시간 전</div>
              </div>
            </div>
            <MoreHorizontal size={20} className="text-slate-400 cursor-pointer" />
          </div>
          <div className="w-full h-44 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-4xl">📷</div>
          <div className="text-[15px] text-slate-800 leading-relaxed mb-4">
            새로 오픈한 베이커리 다녀왔어요! 소금빵이 정말 맛있네요. 강력 추천합니다.
          </div>
          <div className="flex gap-4 border-t border-slate-100 pt-3">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 cursor-pointer">
              <Heart size={16} /> 34
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 cursor-pointer">
              <MessageCircle size={16} /> 12
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="absolute bottom-6 right-6 w-14 h-14 bg-primary-500 text-white rounded-full flex justify-center items-center text-2xl shadow-lg shadow-primary-500/40 cursor-pointer hover:scale-95 transition-transform z-20">
        ✏️
      </div>
    </div>
  );
}
