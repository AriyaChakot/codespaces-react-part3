import './App.css';
import Posts from './Posts';
import About from './About';
import Home from './Home';
import Shop from './Shop';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">All posts</Link></li>
          <li><Link to="/posts/1">detail item1</Link></li>
          <li><Link to="/posts?fname=Ariya&lname=Chakot">Ariya</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/shop">Shop</Link></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="posts/:id" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
