import React from 'react';
import { WifiOff, RefreshCw } from 'lucide-react';

export default function Ui009Offline() {
  return (
    <div className="flex flex-col h-full bg-slate-800 relative">
      <div className="absolute inset-0 bg-slate-900/40 z-10 flex items-center justify-center p-6 backdrop-blur-md">
        
        <div className="bg-white rounded-2xl w-full p-6 shadow-2xl flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-6">
            <WifiOff size={32} />
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mb-2">인터넷 연결이 끊겼습니다</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            네트워크 연결 상태를 확인한 후<br />다시 시도해 주세요.
          </p>

          <button className="w-full py-3.5 bg-primary-500 text-white font-bold rounded-xl flex items-center justify-center gap-2">
            <RefreshCw size={18} /> 재시도
          </button>
        </div>

      </div>
    </div>
  );
}
