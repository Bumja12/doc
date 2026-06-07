import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function Ui001Onboarding() {
  return (
    <div className="flex flex-col items-center justify-between h-full px-6 py-10 bg-gradient-to-b from-white to-green-50">
      {/* Status Bar spacing is handled by DeviceSimulator */}
      
      <div className="flex flex-col items-center mt-12 w-full">
        <div className="w-20 h-20 bg-primary-500 rounded-[20px] flex justify-center items-center text-white text-4xl font-bold mb-6 shadow-lg shadow-primary-500/30">
          A
        </div>
        <div className="text-2xl font-bold text-slate-900 text-center leading-snug mb-3">
          우리 동네<br />프리미엄 커뮤니티
        </div>
        <div className="text-base text-slate-500 text-center leading-relaxed">
          안전하고 신뢰할 수 있는<br />이웃들과의 소통을 시작하세요.
        </div>
        <div className="w-48 h-48 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png')] bg-no-repeat bg-center bg-contain opacity-10 mt-8"></div>
      </div>

      <div className="w-full flex flex-col items-center gap-6 mt-auto mb-4">
        <div className="relative">
          <div className="text-slate-500 font-semibold underline underline-offset-4 cursor-pointer">
            둘러보기
          </div>
          {/* Annotation Badge 1 */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '1' })); }} 
            className="absolute -top-3 -right-6 w-5 h-5 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
          >
            1
          </button>
        </div>
        
        <div className="relative w-full mt-4">
          <div className="flex gap-6 justify-center w-full">
            <button className="w-14 h-14 rounded-full bg-[#FEE500] text-[#3A2929] flex justify-center items-center text-2xl font-bold shadow-md hover:scale-95 transition-transform">
              K
            </button>
            <button className="w-14 h-14 rounded-full bg-[#03C75A] text-white flex justify-center items-center text-2xl font-bold shadow-md hover:scale-95 transition-transform">
              N
            </button>
            <button className="w-14 h-14 rounded-full bg-black text-white flex justify-center items-center text-2xl font-bold shadow-md hover:scale-95 transition-transform">
              
            </button>
          </div>
          {/* Annotation Badge 2 */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '2' })); }} 
            className="absolute -top-3 right-8 w-5 h-5 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
}
