import React from 'react';
import { ShieldAlert, LogIn } from 'lucide-react';

export default function Ui003MultiLogin() {
  return (
    <div className="flex flex-col h-full bg-slate-800 relative">
      {/* Background (Dimmed) */}
      <div className="absolute inset-0 bg-black/60 z-10 flex items-center justify-center p-6 backdrop-blur-sm">
        
        {/* Modal */}
        <div className="bg-white rounded-2xl w-full p-6 shadow-2xl flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
            <ShieldAlert size={32} />
          </div>
          
          <h2 className="text-xl font-bold text-slate-900 mb-2">이미 가입된 계정이 있습니다</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            고객님의 본인인증(CI) 정보로 이미 가입된<br />계정이 존재합니다. 다중 로그인을 연결할까요?
          </p>

          <div className="w-full bg-slate-50 rounded-lg p-4 border border-slate-200 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FEE500] flex items-center justify-center font-bold text-xs">K</div>
              <div className="text-sm font-semibold text-slate-700">카카오 로그인 연동</div>
            </div>
            <span className="text-xs text-slate-400">2023.10.12 가입</span>
          </div>

          <div className="w-full flex flex-col gap-3">
            <button className="w-full py-3.5 bg-primary-500 text-white font-bold rounded-xl flex items-center justify-center gap-2">
              <LogIn size={18} /> 멀티로그인 연결하기
            </button>
            <button className="w-full py-3.5 bg-white border border-slate-300 text-slate-600 font-bold rounded-xl">
              기존 계정으로 로그인
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
