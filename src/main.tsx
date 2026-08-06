import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { migrateLegacyHashUrl } from './lib/legacyUrls';
import './index.css';

// Rewrite old /#/ links to real paths before the router reads the URL, so
// existing bookmarks and shared links land on the right page.
migrateLegacyHashUrl();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Missing #root element');

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
