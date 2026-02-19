import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BraceletsPage from './pages/BraceletsPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BraceletsPage />
  </StrictMode>
);
