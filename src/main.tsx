import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import App from './App'; 
import { AuthProvider } from './context/auth'; 

const rootElement = document.getElementById('root'); // Obter o elemento

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  );
} else {
  console.error('Elemento "root" não encontrado. Verifique se o HTML está configurado corretamente.');
}
