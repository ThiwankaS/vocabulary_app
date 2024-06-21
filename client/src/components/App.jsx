import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NewGame from './NewGame';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<NewGame />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App