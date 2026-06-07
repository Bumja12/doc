import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { parseTraceText } from '../components/TraceLink';
import DeviceSimulator from '../components/DeviceSimulator';
import Ui001Onboarding from '../wireframes/Ui001Onboarding';
import Ui002Terms from '../wireframes/Ui002Terms';
import Ui003MultiLogin from '../wireframes/Ui003MultiLogin';
import Ui004ProfileEdit from '../wireframes/Ui004ProfileEdit';
import Ui005GuestBlock from '../wireframes/Ui005GuestBlock';
import Ui006Splash from '../wireframes/Ui006Splash';
import Ui007ForceUpdate from '../wireframes/Ui007ForceUpdate';
import Ui008Permission from '../wireframes/Ui008Permission';
import Ui009Offline from '../wireframes/Ui009Offline';
import Ui010RegionDrawer from '../wireframes/Ui010RegionDrawer';
import Ui011Feed from '../wireframes/Ui011Feed';
import Ui012FallbackError from '../wireframes/Ui012FallbackError';
import Ui013Maintenance from '../wireframes/Ui013Maintenance';
import Ui014Menu from '../wireframes/Ui014Menu';
import { Smartphone, MonitorPlay, PanelRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const devices = [
  { id: 'iphone-8-plus', name: 'iPhone 8 Plus' },
  { id: 'iphone-12-pro', name: 'iPhone 12 Pro Max' },
  { id: 'iphone-17-pro', name: 'iPhone 17 Pro Max' },
  { id: 'galaxy-s25-ultra-gesture', name: 'S25 Ultra (제스처)' },
  { id: 'galaxy-s25-ultra-buttons', name: 'S25 Ultra (버튼)' },
  { id: 'galaxy-fold-7-gesture', name: 'Fold 7 (제스처)' },
  { id: 'galaxy-fold-7-buttons', name: 'Fold 7 (버튼)' },
];

export default function UiPage() {
  const [activeUi, setActiveUi] = useState(null);
  const [activeDevice, setActiveDevice] = useState('iphone-17-pro');
  const { hash } = useLocation();

  const { data: uiData = [], isLoading: loading } = useQuery({
    queryKey: ['ui_specs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ui_specs')
        .select('*')
        .order('semantic_id', { ascending: true });
      if (error) throw error;
      return data || [];
    }
  });

  useEffect(() => {
    if (uiData.length > 0) {
      if (hash) {
        const id = hash.replace('#', '');
        const found = uiData.find(ui => ui.semantic_id === id);
        setActiveUi(found || uiData[0]);
      } else if (!activeUi) {
        setActiveUi(uiData[0]);
      }
    }
  }, [hash, uiData]);

  const [highlightedSpec, setHighlightedSpec] = useState(null);

  useEffect(() => {
    const handleSpecNav = (e) => {
      const num = e.detail;
      setHighlightedSpec(num);
      setTimeout(() => setHighlightedSpec(null), 2000);
      const el = document.getElementById(`spec-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    window.addEventListener('nav-spec', handleSpecNav);
    return () => window.removeEventListener('nav-spec', handleSpecNav);
  }, []);

  const renderScreen = () => {
    if (!activeUi) return null;
    switch (activeUi.semantic_id) {
      case 'UI-001': return <Ui001Onboarding />;
      case 'UI-002': return <Ui002Terms />;
      case 'UI-003': return <Ui003MultiLogin />;
      case 'UI-004': return <Ui004ProfileEdit />;
      case 'UI-005': return <Ui005GuestBlock />;
      case 'UI-006': return <Ui006Splash />;
      case 'UI-007': return <Ui007ForceUpdate />;
      case 'UI-008': return <Ui008Permission />;
      case 'UI-009': return <Ui009Offline />;
      case 'UI-010': return <Ui010RegionDrawer />;
      case 'UI-011': return <Ui011Feed />;
      case 'UI-012': return <Ui012FallbackError />;
      case 'UI-013': return <Ui013Maintenance />;
      case 'UI-014': return <Ui014Menu />;
      default: 
        return (
          <div className="w-full h-full relative bg-slate-100 flex flex-col items-center justify-center text-center p-6">
            <MonitorPlay size={48} className="text-slate-300 mb-4" />
            <h3 className="text-lg font-bold text-slate-700 mb-2">React 네이티브 전환 중...</h3>
            <p className="text-sm text-slate-500 mb-6">해당 화면은 아직 네이티브 컴포넌트로 마이그레이션되지 않았습니다.</p>
          </div>
        );
    }
  };

  const renderDescription = (desc) => {
    if (!desc) return null;
    // Replace literal '\n' sequences from DB with actual newlines
    const normalizedDesc = desc.replace(/\\n/g, '\n');
    const lines = normalizedDesc.split('\n');
    let tags = [];
    let title = '';
    let sections = [];
    let currentSection = null;

    lines.forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;

      if (trimmed.startsWith('■')) {
        const tagMatch = trimmed.match(/\[대응:\s*(.+?)\]/);
        if (tagMatch) {
          tags = tagMatch[1].split(',').map(t => t.trim());
          title = trimmed.replace(tagMatch[0], '').replace('■', '').trim();
        } else {
          title = trimmed.replace('■', '').trim();
        }
      } else if (trimmed.match(/^\d+\./)) {
        if (currentSection) sections.push(currentSection);
        
        const numMatch = trimmed.match(/^(\d+)\.\s*(.*)/);
        const number = numMatch ? numMatch[1] : '';
        const text = numMatch ? numMatch[2] : trimmed;
        const isWarning = /(예외처리|에러|차단|제한|실패|오류|단절|제어)/.test(text);

        currentSection = { number, title: text, isWarning, items: [] };
      } else if (trimmed.startsWith('-')) {
        if (currentSection) {
          currentSection.items.push(trimmed.substring(1).trim());
        } else {
          currentSection = { number: '', title: 'General Info', isWarning: false, items: [trimmed.substring(1).trim()] };
        }
      } else {
        if (currentSection) {
          currentSection.items.push({ type: 'text', content: trimmed });
        } else {
          currentSection = { number: '', title: 'Description', isWarning: false, items: [{ type: 'text', content: trimmed }] };
        }
      }
    });
    if (currentSection) sections.push(currentSection);

    const typeToPath = {
      'RQ': '/prd',
      'UC': '/uc',
      'UI': '/ui',
      'TB': '/erd',
      'API': '/api'
    };

    return (
      <div className="space-y-6">
        {(title || tags.length > 0) && (
          <div className="bg-slate-100/80 rounded-xl p-5 border border-slate-200">
            {title && <h3 className="font-bold text-slate-800 mb-3 text-[15px]">{title}</h3>}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => {
                  const prefix = tag.split('-')[0];
                  const path = typeToPath[prefix] || '/';
                  return (
                    <Link key={idx} to={`${path}#${tag}`} className="bg-white border border-slate-300 text-slate-700 px-2.5 py-1 rounded-full text-xs font-mono font-bold shadow-sm flex items-center hover:bg-slate-50 hover:border-primary-300 hover:text-primary-700 transition-all cursor-pointer group">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-1.5 group-hover:scale-125 transition-transform"></span>
                      {tag}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {sections.map((sec, sIdx) => {
          const isWarn = sec.isWarning;
          const isHighlighted = highlightedSpec === sec.number;
          const cardBg = isHighlighted ? 'ring-4 ring-primary-400 bg-primary-50 scale-[1.02] shadow-lg border-primary-200' : (isWarn ? 'bg-orange-50 border-orange-200' : 'bg-white border-slate-200');
          const headerText = isWarn ? 'text-orange-900' : 'text-slate-800';
          const badgeBg = isWarn ? 'bg-orange-500' : 'bg-rose-500'; 
          const itemText = isWarn ? 'text-orange-900/90' : 'text-slate-700';
          const iconColor = isWarn ? 'text-orange-400' : 'text-primary-400';

          return (
            <div id={`spec-${sec.number}`} key={sIdx} className={`rounded-xl border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${cardBg}`}>
              <div className={`px-4 py-3.5 border-b flex items-center ${isHighlighted ? 'bg-primary-100/50 border-primary-200' : (isWarn ? 'bg-orange-100/50 border-orange-200' : 'bg-slate-50 border-slate-200')}`}>
                {sec.number && (
                  <div className={`w-6 h-6 rounded-full ${badgeBg} text-white flex items-center justify-center text-xs font-bold mr-2.5 shadow-sm shrink-0`}>
                    {sec.number}
                  </div>
                )}
                {!sec.number && isWarn && (
                  <AlertTriangle size={18} className="text-orange-500 mr-2 shrink-0" />
                )}
                <h4 className={`font-bold text-[15px] ${headerText}`}>{sec.title}</h4>
              </div>
              <div className="p-4 space-y-3">
                {sec.items.map((item, iIdx) => {
                  if (typeof item === 'string') {
                    return (
                      <div key={iIdx} className="flex items-start group">
                        <CheckCircle size={16} className={`shrink-0 mt-0.5 mr-2.5 ${iconColor}`} />
                        <span className={`text-sm leading-relaxed ${itemText}`}>{parseTraceText(item)}</span>
                      </div>
                    );
                  } else {
                    return (
                      <p key={iIdx} className={`text-sm leading-relaxed ${itemText}`}>{parseTraceText(item.content)}</p>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <div className="h-14 bg-white border-b border-slate-200 flex items-center px-4 gap-2 overflow-x-auto shrink-0 shadow-sm z-20">
        <Smartphone size={20} className="text-slate-400 mr-2" />
        {devices.map(dev => (
          <button
            key={dev.id}
            onClick={() => setActiveDevice(dev.id)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeDevice === dev.id 
                ? 'bg-slate-800 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {dev.name}
          </button>
        ))}
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-72 glass-panel border-r border-y-0 border-l-0 flex flex-col h-full z-10 shrink-0 bg-white">
          <div className="p-5 border-b border-slate-200">
            <h2 className="font-bold text-slate-900">UI Screens</h2>
          </div>
          <div className="overflow-y-auto flex-1 p-3 space-y-1">
            {loading ? (
              <div className="text-sm text-slate-400 p-4">Loading...</div>
            ) : (
              uiData.map(ui => (
                <button
                  key={ui.id}
                  onClick={() => setActiveUi(ui)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex flex-col gap-1
                    ${activeUi?.id === ui.id ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500 font-bold' : 'text-slate-600 hover:bg-slate-100'}
                  `}
                >
                  <span className={`font-mono text-xs ${activeUi?.id === ui.id ? 'opacity-100' : 'opacity-60'}`}>{ui.semantic_id}</span>
                  <span className="font-medium text-sm truncate">{ui.title}</span>
                </button>
              ))
            )}
          </div>
        </div>

        <div className="flex-1 overflow-hidden flex bg-slate-50">
          <div className="flex-1 overflow-y-auto flex items-center justify-center p-8 relative shadow-inner">
            <div className={`origin-center transition-all duration-300 ${activeDevice.includes('fold') ? 'scale-[0.6]' : 'scale-[0.8]'}`}>
              <DeviceSimulator model={activeDevice}>
                {renderScreen()}
              </DeviceSimulator>
            </div>
          </div>

          <div className="w-[450px] bg-white flex flex-col h-full border-l border-slate-200 z-10 shadow-[-4px_0_15px_-3px_rgba(0,0,0,0.05)]">
            {activeUi && (
              <>
                <div className="p-6 border-b border-slate-200 shrink-0 bg-slate-50/50">
                  <div className="font-mono text-primary-600 font-bold mb-2 bg-primary-50 inline-block px-2 py-1 rounded text-sm">{activeUi.semantic_id}</div>
                  <h2 className="text-xl font-bold text-slate-900 tracking-tight leading-snug flex items-center gap-2">
                    <span className="text-primary-600">📝</span> {activeUi.title}
                  </h2>
                  <p className="text-sm text-slate-500 mt-2">화면의 번호표(Annotation)를 참고하여 기능을 확인하세요.</p>
                </div>
                <div className="p-6 overflow-y-auto flex-1 text-base">
                  {renderDescription(activeUi.description)}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
