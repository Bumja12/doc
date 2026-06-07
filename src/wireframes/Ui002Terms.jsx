import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

export default function Ui002Terms() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="px-5 py-4 flex items-center justify-center border-b border-slate-200 bg-white">
        <h1 className="text-lg font-bold text-slate-900">약관 동의</h1>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          서비스 이용을 위해<br />약관에 동의해 주세요
        </h2>
        <p className="text-slate-500 mb-8">필수 약관에 모두 동의하셔야 가입이 완료됩니다.</p>

        {/* All Agree */}
        <div className="flex items-center gap-3 p-4 bg-primary-50 border border-primary-200 rounded-xl mb-6 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center">
            <Check size={16} strokeWidth={3} />
          </div>
          <span className="font-bold text-primary-900 text-lg">전체 동의하기</span>
        </div>

        {/* Individual Terms */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div>
              <span className="text-slate-700 font-medium">[필수] 서비스 이용 약관</span>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div>
              <span className="text-slate-700 font-medium">[필수] 개인정보 수집 및 이용 동의</span>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center"></div>
              <span className="text-slate-700 font-medium">[선택] 마케팅 정보 수신 동의</span>
            </div>
            <ChevronRight size={20} className="text-slate-400" />
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full py-4 bg-slate-300 text-slate-500 font-bold rounded-xl text-lg cursor-not-allowed">
            가입 완료
          </button>
        </div>
      </div>
    </div>
  );
}
