import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import NotebookDetail from './pages/NotebookDetail';
import About from './pages/About';
import Enquire from './pages/Enquire';
import NotFound from './pages/NotFound';

/** Reset scroll on navigation, but honour in-page anchors like /catalogue#rulings. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[3px] focus:border-[1.5px] focus:border-ink focus:bg-mark focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-[0.16em]"
      >
        Skip to content
      </a>

      <ScrollManager />
      <Header />

      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/catalogue/:slug" element={<NotebookDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
