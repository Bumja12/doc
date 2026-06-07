import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PrdPage from './pages/PrdPage';
import UcPage from './pages/UcPage';
import UiPage from './pages/UiPage';
import ErdPage from './pages/ErdPage';
import ApiPage from './pages/ApiPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/prd" replace />} />
        <Route path="prd" element={<PrdPage />} />
        <Route path="uc" element={<UcPage />} />
        <Route path="ui" element={<UiPage />} />
        <Route path="erd" element={<ErdPage />} />
        <Route path="api" element={<ApiPage />} />
      </Route>
    </Routes>
  );
}
