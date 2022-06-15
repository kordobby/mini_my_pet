import React from 'react';
import ReactDOM from 'react-dom/client';

/* Styles settings */
import './index.css';
import './index.scss';
import GlobalStyled from './Components/GlobalStyled/GlobalStyled';

/* REDUX settings */
import { Provider } from 'react-redux';
import store from './redux/configStore';

/* Router settings */
import { BrowserRouter } from 'react-router-dom';
// 배포 때 HashRouter 써야할지도...?

/* Cookies settings */
import { CookiesProvider } from 'react-cookie'

/* import Components */
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <CookiesProvider>
        <Provider store={store}>
            <BrowserRouter>
                {/* Global CSS */}
                <GlobalStyled />
                <App />
            </BrowserRouter>
        </Provider>
      </CookiesProvider>
);