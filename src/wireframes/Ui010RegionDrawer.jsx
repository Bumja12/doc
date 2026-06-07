import React from 'react';
import { Search, MapPin, X, ChevronRight } from 'lucide-react';

export default function Ui010RegionDrawer() {
  return (
    <div className="h-full bg-slate-50 relative flex flex-col">
      {/* Background Feed (Simulated) */}
      <div className="px-5 py-3 bg-white border-b border-slate-100 flex justify-between items-center sticky top-0 z-0 opacity-30">
        <div className="font-bold text-lg text-slate-900">우리동네 ▼</div>
      </div>
      <div className="p-4 space-y-4 filter opacity-30">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 h-40"></div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 h-40"></div>
      </div>

      {/* Drawer Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 flex">
        {/* Left Drawer */}
        <div className="w-4/5 h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-left-full duration-300">
          <div className="px-5 py-4 flex justify-between items-center border-b border-slate-100 bg-white">
            <h2 className="font-bold text-lg text-slate-900">동네 선택</h2>
            <X size={24} className="text-slate-400" />
          </div>

          <div className="p-4 border-b border-slate-100">
            <div className="w-full bg-slate-100 rounded-lg p-3 flex items-center gap-2 text-slate-500">
              <Search size={18} />
              <input type="text" placeholder="동명(읍, 면)으로 검색" className="bg-transparent border-none outline-none w-full text-sm" />
            </div>
            
            <button className="w-full mt-3 py-3 bg-primary-50 text-primary-600 font-bold rounded-lg flex items-center justify-center gap-2 text-sm">
              <MapPin size={16} /> 현재 위치로 동네 찾기
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="px-4 py-2 font-bold text-sm text-slate-400 bg-slate-50">내 동네</div>
            
            {/* Accordion Item 1 (Open) */}
            <div className="border-b border-slate-100">
              <div className="px-5 py-4 flex justify-between items-center bg-white cursor-pointer">
                <span className="font-bold text-slate-900">서울특별시 송파구</span>
                <ChevronRight size={20} className="text-slate-400 transform rotate-90" />
              </div>
              <div className="bg-slate-50 px-5 py-2">
                <div className="py-3 text-sm font-bold text-primary-600 border-l-2 border-primary-500 pl-4 bg-primary-50 rounded-r-md">방이동 (현재 선택됨)</div>
                <div className="py-3 text-sm font-medium text-slate-600 pl-4">송파동</div>
                <div className="py-3 text-sm font-medium text-slate-600 pl-4">잠실동</div>
                <div className="py-3 text-sm font-medium text-slate-600 pl-4">가락동</div>
              </div>
            </div>

            {/* Accordion Item 2 */}
            <div className="border-b border-slate-100">
              <div className="px-5 py-4 flex justify-between items-center bg-white cursor-pointer">
                <span className="font-bold text-slate-700">경기도 성남시 분당구</span>
                <ChevronRight size={20} className="text-slate-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
