import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ThemeContextProvider from './store/theme-context.jsx';
import { StyledEngineProvider } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </StyledEngineProvider>
  </StrictMode>
);
