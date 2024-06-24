import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Admin from './Admin';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;