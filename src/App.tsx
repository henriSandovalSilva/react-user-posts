import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

import { CompanyProvider } from './context/CompanyContext';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <CompanyProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </CompanyProvider>

    <GlobalStyle />
  </>
);

export default App;
