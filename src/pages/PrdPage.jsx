import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { parseTraceText } from '../components/TraceLink';
import { supabase } from '../lib/supabase';

export default function PrdPage() {
  const { hash } = useLocation();
  const [highlightedId, setHighlightedId] = useState(null);

  const { data: prdData = [], isLoading: loading } = useQuery({
    queryKey: ['requirements'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('requirements')
        .select('*')
        .order('semantic_id', { ascending: true });
      if (error) throw error;
      return data || [];
    }
  });

  useEffect(() => {
    if (hash && prdData.length > 0) {
      const id = hash.replace('#', '');
      setHighlightedId(id);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      const timer = setTimeout(() => setHighlightedId(null), 2500);
      return () => clearTimeout(timer);
    }
  }, [hash, prdData]);

  return (
    <div className="p-8 h-full overflow-y-auto">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">요구사항 정의서 (PRD)</h1>
          <p className="text-slate-500 mt-2">프로젝트의 핵심 요구사항 명세 및 추적 상태입니다.</p>
        </div>
      </div>
      
      <div className="glass-panel rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
              <th className="p-4 font-semibold w-32">요구사항 ID</th>
              <th className="p-4 font-semibold w-24">구분</th>
              <th className="p-4 font-semibold w-64">요구사항명</th>
              <th className="p-4 font-semibold">상세 설명</th>
              <th className="p-4 font-semibold w-32">상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {loading ? (
              <tr><td colSpan="5" className="p-8 text-center text-slate-500">데이터를 불러오는 중입니다...</td></tr>
            ) : prdData.length === 0 ? (
              <tr><td colSpan="5" className="p-8 text-center text-slate-500">등록된 요구사항이 없습니다.</td></tr>
            ) : (
              prdData.map((row) => (
                <tr 
                  key={row.id} 
                  id={row.semantic_id} 
                  className={`transition-all duration-500 ${
                    highlightedId === row.semantic_id 
                      ? 'bg-primary-50 outline outline-2 outline-primary-400 z-10 relative shadow-md' 
                      : 'hover:bg-slate-50 bg-white'
                  }`}
                >
                  <td className="p-4 font-mono text-primary-600 font-medium">{row.semantic_id}</td>
                  <td className="p-4 text-slate-500">
                    <span className="bg-slate-100 border border-slate-200 px-2 py-1 rounded text-xs">{row.category}</span>
                  </td>
                  <td className="p-4 font-bold text-slate-900">{row.title}</td>
                  <td className="p-4 text-slate-600 leading-relaxed">{parseTraceText(row.description || '')}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${
                      row.status === 'Done' ? 'border-emerald-200 text-emerald-700 bg-emerald-50' : 'border-amber-200 text-amber-700 bg-amber-50'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
