import { erdData } from '../data/erd';
import { parseTraceText } from '../components/TraceLink';
import { Table } from 'lucide-react';

export default function ErdPage() {
  return (
    <div className="p-8 h-full overflow-y-auto bg-slate-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
          데이터베이스 설계 (ERD)
        </h1>
        <p className="text-slate-500 mt-2">논리/물리 테이블 명세 및 데이터 모델링 구조입니다.</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {erdData.map(table => (
          <div key={table.id} id={table.id} className="glass-panel bg-white rounded-xl overflow-hidden flex flex-col shadow-md">
            <div className="bg-slate-50 p-5 border-b border-slate-200 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded text-primary-600"><Table size={20}/></div>
                <div>
                  <h3 className="text-slate-900 font-bold text-lg font-mono">{table.name}</h3>
                  <p className="text-slate-500 text-sm">{table.desc}</p>
                </div>
              </div>
              <span className="font-mono text-xs text-primary-600 bg-primary-50 border border-primary-200 px-2 py-1 rounded font-bold">{table.id}</span>
            </div>
            <div className="p-5 flex-1">
              <ul className="space-y-3">
                {table.columns.map((col, idx) => {
                  const isPk = col.includes('(PK)');
                  const isFk = col.includes('(FK)');
                  return (
                    <li key={idx} className="flex items-center justify-between font-mono text-sm border-b border-slate-100 pb-2 last:border-0">
                      <span className={`${isPk ? 'text-amber-600 font-bold' : isFk ? 'text-blue-600 font-medium' : 'text-slate-700'}`}>
                        {col.replace(' (PK)', '').replace(' (FK)', '')}
                      </span>
                      <div className="flex gap-2 text-xs">
                        {isPk && <span className="bg-amber-100 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-bold">PK</span>}
                        {isFk && <span className="bg-blue-100 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded font-bold">FK</span>}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
