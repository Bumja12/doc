import React, { useState } from 'react';
import { X, Star, Settings, User, Bell, ChevronRight, Hash } from 'lucide-react';

export default function Ui014Menu() {
  const [favorites, setFavorites] = useState(['free-board']);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const isFav = (id) => favorites.includes(id);

  return (
    <div className="flex h-full w-full relative">
      {/* Dimmed Background */}
      <div className="w-1/4 bg-slate-900/60 backdrop-blur-sm relative flex items-center justify-center">
        {/* Annotation Badge 3 */}
        <button 
          onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '3' })); }} 
          className="absolute w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
        >
          3
        </button>
      </div>

      {/* Slide Menu Panel */}
      <div className="w-3/4 bg-white h-full flex flex-col shadow-2xl relative animate-[slideIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="h-14 border-b border-slate-100 flex items-center px-4 shrink-0 relative">
          <button className="p-2 -ml-2 text-slate-400 hover:text-slate-800 transition-colors">
            <X size={24} />
          </button>
          <h2 className="flex-1 text-center font-bold text-slate-800 pr-8">메뉴</h2>
          
          {/* Annotation Badge 1 */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '1' })); }} 
            className="absolute -bottom-3 right-4 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-10 hover:scale-125 transition-transform cursor-pointer"
          >
            1
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex-1 overflow-y-auto pb-10 relative">
          
          {/* Annotation Badge 2 */}
          <button 
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('nav-spec', { detail: '2' })); }} 
            className="absolute top-4 right-4 w-6 h-6 bg-rose-500 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-md ring-2 ring-white z-20 hover:scale-125 transition-transform cursor-pointer"
          >
            2
          </button>

          {/* Favorites Section */}
          <div className="p-4 border-b border-slate-100 bg-amber-50/50">
            <div className="text-xs font-bold text-amber-600 mb-2 flex items-center gap-1">
              <Star size={12} className="fill-amber-500" />
              즐겨찾는 메뉴
            </div>
            {favorites.length === 0 ? (
              <p className="text-xs text-slate-400 py-2">즐겨찾는 메뉴가 없습니다.</p>
            ) : (
              <div className="space-y-1">
                {favorites.includes('free-board') && (
                  <button className="w-full flex items-center px-3 py-2.5 bg-white rounded-lg shadow-sm border border-slate-100 text-sm font-medium text-slate-700">
                    <Hash size={16} className="text-slate-400 mr-2" />
                    자유 게시판
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Main Menus */}
          <div className="p-4 space-y-6">
            
            {/* Group 1 */}
            <div>
              <div className="text-xs font-bold text-slate-400 mb-2 pl-2">커뮤니티</div>
              <div className="space-y-1">
                <div className="w-full flex items-center px-2 py-3 hover:bg-slate-50 rounded-lg group">
                  <Hash size={18} className="text-slate-400 mr-3" />
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">자유 게시판</span>
                  <button onClick={() => toggleFavorite('free-board')} className="p-1">
                    <Star size={18} className={isFav('free-board') ? 'fill-amber-400 text-amber-400' : 'text-slate-300 group-hover:text-amber-400'} />
                  </button>
                </div>
                <div className="w-full flex items-center px-2 py-3 hover:bg-slate-50 rounded-lg group">
                  <Hash size={18} className="text-slate-400 mr-3" />
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">정보 공유</span>
                  <button onClick={() => toggleFavorite('info-board')} className="p-1">
                    <Star size={18} className={isFav('info-board') ? 'fill-amber-400 text-amber-400' : 'text-slate-300 group-hover:text-amber-400'} />
                  </button>
                </div>
              </div>
            </div>

            {/* Group 2 */}
            <div>
              <div className="text-xs font-bold text-slate-400 mb-2 pl-2">내 정보</div>
              <div className="space-y-1">
                <button className="w-full flex items-center px-2 py-3 hover:bg-slate-50 rounded-lg">
                  <User size={18} className="text-slate-400 mr-3" />
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">프로필 관리</span>
                  <ChevronRight size={16} className="text-slate-300" />
                </button>
                <button className="w-full flex items-center px-2 py-3 hover:bg-slate-50 rounded-lg">
                  <Bell size={18} className="text-slate-400 mr-3" />
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">알림 설정</span>
                  <ChevronRight size={16} className="text-slate-300" />
                </button>
                <button className="w-full flex items-center px-2 py-3 hover:bg-slate-50 rounded-lg">
                  <Settings size={18} className="text-slate-400 mr-3" />
                  <span className="flex-1 text-sm font-medium text-slate-700 text-left">환경 설정</span>
                  <ChevronRight size={16} className="text-slate-300" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
