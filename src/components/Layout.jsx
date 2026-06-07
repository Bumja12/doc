import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LayoutDashboard, FileText, Smartphone, Database, Webhook, Box } from 'lucide-react';

const tabs = [
  { path: '/prd', name: '요구사항 (PRD)', icon: FileText },
  { path: '/uc', name: '유스케이스 (UC)', icon: Box },
  { path: '/ui', name: '화면기획 (UI)', icon: Smartphone },
  { path: '/erd', name: '데이터베이스 (ERD)', icon: Database },
  { path: '/api', name: '인터페이스 (API)', icon: Webhook }
];

export default function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add('bg-primary-50');
          setTimeout(() => element.classList.remove('bg-primary-50'), 2000);
        }
      }, 100);
    }
  }, [hash]);

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900 overflow-hidden">
      <header className="h-16 flex-shrink-0 bg-white/80 backdrop-blur border-b border-slate-200 flex items-center px-6 shadow-sm z-20">
        <div className="flex items-center gap-2 font-bold text-lg mr-10 tracking-tight text-slate-900">
          <LayoutDashboard className="w-5 h-5 text-primary-500" />
          <span>[untitled] System</span>
        </div>
        <nav className="flex gap-1 h-full">
          {tabs.map(tab => (
            <NavLink 
              key={tab.path} 
              to={tab.path}
              className={({isActive}) => `
                flex items-center gap-2 px-4 h-full border-b-2 font-medium transition-colors
                ${isActive ? 'border-primary-500 text-primary-600 bg-primary-50' : 'border-transparent text-slate-500 hover:text-slate-900 hover:bg-slate-100'}
              `}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
}
