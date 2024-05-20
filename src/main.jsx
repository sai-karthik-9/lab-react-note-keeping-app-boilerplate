import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Assuming App is the default export of App.js
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);