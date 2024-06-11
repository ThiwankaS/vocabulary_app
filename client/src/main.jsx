import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import gameReducer from '../src/reducers/gameReducer.js'
import progressReducer from '../src/reducers/progressReducer.js'

const store = configureStore({
  reducer: {
    game: gameReducer,
    progress : progressReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)