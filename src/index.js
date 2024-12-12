import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { BrowserRouter } from 'react-router-dom';
import Preloader from "./components/Preloader";

const LazyApp = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const applyTheme = () => {
    const themeMode = localStorage.getItem('theme') || 'dark';
    const appCover = localStorage.getItem('appCover') || '';
    const color = localStorage.getItem('themeColor') || 'default';

    const bodyClasses = document.body.classList;
    Array.from(bodyClasses).forEach((className) => {
        if (className.startsWith('theme-')) {
            bodyClasses.remove(className);
        }
    });

    document.documentElement.setAttribute('data-bs-theme', themeMode);
    document.documentElement.className = appCover
    bodyClasses.add(color)
};

applyTheme();

root.render(
  <React.StrictMode>
      <Suspense fallback={<Preloader />}>
          <BrowserRouter>
              <LazyApp />
          </BrowserRouter>
      </Suspense>
  </React.StrictMode>
);

