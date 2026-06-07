import React from 'react';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Ui012FallbackError() {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 bg-slate-50 relative">
      <div className="flex flex-col items-center relative w-full">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <AlertTriangle size={48} className="text-orange-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2 text-center">
          앗, 일시적인 오류가<br/>발생했습니다
        </h2>
        <p className="text-slate-500 text-center mb-1">
          서버와의 연결이 원활하지 않습니다.<br/>잠시 후 다시 시도해 주세요.
        </p>
        <p className="text-xs font-mono text-slate-400 bg-slate-200 px-2 py-1 rounded mt-4">
          Error Code: 999999
        </p>

        {/* Annotation Badge 1 */}
        <button 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '1' })); }} 
          className="absolute -top-4 right-4 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
        >
          1
        </button>
      </div>

      <div className="absolute bottom-8 w-full px-6 flex gap-3 relative mt-20">
        <button className="flex-1 py-3.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
          <Home size={18} />
          홈으로
        </button>
        <button className="flex-1 py-3.5 bg-primary-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors shadow-md shadow-primary-600/20">
          <RotateCcw size={18} />
          다시 시도
        </button>

        {/* Annotation Badge 2 */}
        <button 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '2' })); }} 
          className="absolute -top-4 -right-2 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
        >
          2
        </button>
      </div>
    </div>
  );
}
