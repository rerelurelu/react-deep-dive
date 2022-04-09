import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Work from './Pages/Work';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="work">Work</Link>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about/*" element={<About />} />
        <Route path="work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
