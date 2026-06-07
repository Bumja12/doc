import React from 'react';
import { Camera, ChevronLeft } from 'lucide-react';

export default function Ui004ProfileEdit() {
  return (
    <div className="flex flex-col h-full bg-slate-50">
      {/* Header */}
      <div className="px-4 py-3 flex items-center border-b border-slate-200 bg-white sticky top-0 z-10">
        <ChevronLeft size={24} className="text-slate-700" />
        <h1 className="text-lg font-bold text-slate-900 mx-auto pr-6">프로필 수정</h1>
      </div>

      <div className="p-6 flex-1 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-8 mt-4">
          <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-white shadow-md flex items-center justify-center text-4xl">
            🐶
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm cursor-pointer text-slate-600">
            <Camera size={16} />
          </div>
        </div>

        {/* Form Fields */}
        <div className="w-full space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">닉네임</label>
            <input 
              type="text" 
              className="w-full p-4 rounded-xl border border-primary-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium"
              defaultValue="강아지산책러"
            />
            <p className="text-xs text-primary-600 font-medium">사용 가능한 닉네임입니다.</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-500">실명 (본인인증 기반)</label>
            <input 
              type="text" 
              className="w-full p-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-400 font-medium cursor-not-allowed"
              defaultValue="홍길동"
              disabled
            />
            <p className="text-xs text-slate-400">실명 정보는 본인인증을 통해 연동되며 수정할 수 없습니다.</p>
          </div>
        </div>

        <div className="mt-auto w-full pt-8">
          <button className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl text-lg shadow-lg shadow-primary-500/30">
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
