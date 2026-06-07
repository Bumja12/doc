import React from 'react';
import { Camera, MapPin, Bell, Shield } from 'lucide-react';

export default function Ui008Permission() {
  return (
    <div className="flex flex-col h-full bg-white relative pt-8">
      <div className="p-6 flex-1 flex flex-col">
        <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
          <Shield size={32} />
        </div>
        
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          원활한 앱 사용을 위해<br />권한을 허용해 주세요
        </h2>
        <p className="text-slate-500 text-sm mb-8">선택 권한은 허용하지 않아도 기본 서비스를 이용할 수 있습니다.</p>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-slate-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900 text-sm">위치 (선택)</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">우리 동네 인증 및 내 주변 게시글 탐색을 위해 필요합니다.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <Camera size={20} className="text-slate-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900 text-sm">카메라/사진 (선택)</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">게시글 사진 첨부 및 프로필 이미지 변경을 위해 필요합니다.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
              <Bell size={20} className="text-slate-600" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold text-slate-900 text-sm">알림 (선택)</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">중요 공지사항 및 활동 내역 푸시 알림을 수신하기 위해 필요합니다.</p>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6">
          <button className="w-full py-4 bg-primary-500 text-white font-bold rounded-xl text-lg shadow-lg shadow-primary-500/30">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
