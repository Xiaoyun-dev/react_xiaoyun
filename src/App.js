
import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Blog from './Blog';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bio from './Bio';
import Footer from './Footer';
import BlogDetails from './BlogDetails';
import Create from './Create';



function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Blog/*' element={<Blog/>}/>
            <Route path='/Bio' element={<Bio />} />
            <Route path='/blogs/:id' element={<BlogDetails />} />
            <Route path='/Create' element={<Create/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
