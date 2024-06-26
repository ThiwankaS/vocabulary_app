import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import gameReducer from '../src/reducers/gameReducer.js';
import progressReducer from '../src/reducers/progressReducer.js';
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore({
  reducer: {
    game: gameReducer,
    progress : progressReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.StrictMode>,
);