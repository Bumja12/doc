import { Link } from 'react-router-dom';

const typeToPath = {
  'RQ': '/prd',
  'UC': '/uc',
  'UI': '/ui',
  'TB': '/erd',
  'API': '/api'
};

export default function TraceLink({ id }) {
  const prefix = id.split('-')[0];
  const path = typeToPath[prefix] || '/';

  return (
    <Link 
      to={`${path}#${id}`} 
      className="trace-link"
      title={`${id} 문서로 이동`}
    >
      {id}
    </Link>
  );
}

export function parseTraceText(text) {
  if (!text) return null;
  const regex = /(RQ-[A-Z]+-\d{3}|UC-\d{3}|UI-\d{3}|TB-[A-Z]+|API-\d{3})/g;
  const parts = text.split(regex);
  
  return parts.map((part, i) => {
    if (regex.test(part)) {
      return <TraceLink key={i} id={part} />;
    }
    return part;
  });
}
