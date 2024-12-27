import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './styles/globals.css';

const MicroTestPage = React.lazy(() => import('microapp/MicroTestPage'));

const App = () => (
  <>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: hosts</div>
      <div>Framework: react</div>
      <div>Language: TypeScripst</div>
      <div>CSS: Tailwind</div>
      accediendo a {`${process.env.MF_1_URL}`}
    </div>
    <Suspense fallback={<div>Loading...</div>}>
      <MicroTestPage />
    </Suspense>
  </>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
