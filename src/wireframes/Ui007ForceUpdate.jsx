import React from 'react';
import { DownloadCloud } from 'lucide-react';

export default function Ui007ForceUpdate() {
  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-primary-50 text-primary-500 rounded-full flex items-center justify-center mb-6">
          <DownloadCloud size={48} strokeWidth={1.5} />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          최신 버전으로<br />업데이트 해주세요
        </h2>
        
        <p className="text-slate-500 text-sm leading-relaxed mb-8">
          보다 안정적이고 쾌적한 서비스 이용을 위해<br />
          최신 버전(v2.1.0) 업데이트가 필요합니다.
        </p>
        
        <div className="w-full space-y-3 mt-4">
          <button className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl text-lg shadow-lg shadow-primary-500/30">
            앱 스토어로 이동
          </button>
        </div>
      </div>
    </div>
  );
}
