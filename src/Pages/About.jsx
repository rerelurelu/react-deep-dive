import { Link, Routes, Route } from 'react-router-dom';
import AboutDetail from './AboutDetail';
import AboutImage from './AboutImage';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        <li>
          <Link to="/about/detail">Detail</Link>
        </li>
        <li>
          <Link to="/about/image">Image</Link>
        </li>
      </ul>
      <Routes>
        <Route path="detail" element={<AboutDetail />} />
        <Route path="image" element={<AboutImage />} />
      </Routes>
    </div>
  );
};

export default About;
