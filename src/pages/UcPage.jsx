import { ucData } from '../data/uc';
import { parseTraceText } from '../components/TraceLink';

export default function UcPage() {
  return (
    <div className="p-8 h-full overflow-y-auto bg-slate-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">유스케이스 명세서 (UC)</h1>
        <p className="text-slate-500 mt-2">시스템과 액터 간의 상호작용 시나리오입니다.</p>
      </div>
      
      <div className="grid gap-6">
        {ucData.map(uc => (
          <div key={uc.id} id={uc.id} className="glass-panel rounded-xl p-6 shadow-md transition-all hover:border-primary-300 bg-white">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                <span className="font-mono text-primary-600 bg-primary-50 px-2 py-1 rounded text-lg">{uc.id}</span>
                {uc.title}
              </h2>
              <div className="flex gap-2">
                {uc.requirements.map(req => <span key={req} className="text-sm">{parseTraceText(req)}</span>)}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">주 액터 (Actor)</p>
                <p className="text-slate-800 font-medium">{uc.actor}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">선행 조건 (Precondition)</p>
                <p className="text-slate-800 font-medium">{uc.precondition}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">완료 조건 (Postcondition)</p>
                <p className="text-slate-800 font-medium">{uc.postcondition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
