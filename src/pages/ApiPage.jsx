import { apiData } from '../data/api';
import { parseTraceText } from '../components/TraceLink';

export default function ApiPage() {
  const getMethodColor = (method) => {
    switch(method) {
      case 'GET': return 'text-emerald-700 bg-emerald-100 border-emerald-200';
      case 'POST': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'PUT': return 'text-amber-700 bg-amber-100 border-amber-200';
      case 'DELETE': return 'text-red-700 bg-red-100 border-red-200';
      default: return 'text-slate-600 bg-slate-100 border-slate-200';
    }
  };

  return (
    <div className="p-8 h-full overflow-y-auto bg-slate-50">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">인터페이스 명세서 (API)</h1>
        <p className="text-slate-500 mt-2">프론트엔드와 백엔드 간의 REST API 엔드포인트 명세입니다.</p>
      </div>

      <div className="glass-panel bg-white rounded-xl overflow-hidden shadow-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
              <th className="p-4 font-semibold w-32">API ID</th>
              <th className="p-4 font-semibold w-32">Method</th>
              <th className="p-4 font-semibold w-1/3">Endpoint</th>
              <th className="p-4 font-semibold">설명</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {apiData.map((row) => (
              <tr key={row.id} id={row.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4 font-mono text-primary-600 font-bold">{row.id}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded font-mono text-xs font-bold border ${getMethodColor(row.method)}`}>
                    {row.method}
                  </span>
                </td>
                <td className="p-4 font-mono text-sm text-slate-700 font-medium">{row.endpoint}</td>
                <td className="p-4 text-slate-600">{parseTraceText(row.desc)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
