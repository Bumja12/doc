import React from 'react';
import { HardHat, Power } from 'lucide-react';

export default function Ui013Maintenance() {
  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-24 h-24 bg-slate-100 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
          <HardHat size={48} className="text-slate-600" />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-3 text-center">
          시스템 점검 중입니다
        </h2>
        <p className="text-slate-500 text-center mb-8 leading-relaxed">
          보다 안정적인 서비스 제공을 위해<br/>서버 점검을 진행하고 있습니다.
        </p>

        <div className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 relative">
          <div className="flex items-start mb-3">
            <span className="w-16 text-sm font-bold text-slate-700 shrink-0">점검 일시</span>
            <span className="text-sm text-slate-600 font-mono">2026.06.08 02:00<br/>~ 06:00 (4시간)</span>
          </div>
          <div className="flex items-start">
            <span className="w-16 text-sm font-bold text-slate-700 shrink-0">점검 내용</span>
            <span className="text-sm text-slate-600">데이터베이스 스케일업 및<br/>보안 패치 적용</span>
          </div>

          {/* Annotation Badge 1 */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '1' })); }} 
            className="absolute -top-3 -right-3 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
          >
            1
          </button>
        </div>
      </div>

      <div className="p-6 relative">
        <button className="w-full py-4 bg-slate-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-900 transition-colors shadow-lg">
          <Power size={18} />
          앱 종료
        </button>

        {/* Annotation Badge 2 */}
        <button 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '2' })); }} 
          className="absolute -top-1 right-4 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
        >
          2
        </button>
      </div>
    </div>
  );
}
