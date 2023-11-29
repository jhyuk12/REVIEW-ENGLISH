import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Day from './pages/Day';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:day' element={<Day />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
