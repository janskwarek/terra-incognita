import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Global styles — order matters:
// 1. Reset & variables
// 2. Animations / reveal classes
// 3. Typography & button utilities
import './styles/global.css';
import './styles/animations.css';
import './styles/typography.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
