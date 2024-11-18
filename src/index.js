import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BookingContextProvider from './Components/BookingContext/BookingContext';
import AuthContextProvider from './Components/AuthContext/AuthContext';
import UserPreferncesContextProvider from './Components/UserPreferencesContext/UserPreferencesContext';
import CookieContextProvider from './Components/CookieConsent/CookieConsent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
      <UserPreferncesContextProvider>
        <BookingContextProvider>
            <CookieContextProvider>
              <App />
            </CookieContextProvider>
        </BookingContextProvider>
      </UserPreferncesContextProvider>
    </AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
