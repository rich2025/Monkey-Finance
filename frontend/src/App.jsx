import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/1.Home/Home';
import Trends from './pages/2.Trends/Trends';
import Spotlight from './pages/3.Spotlight/Spotlight';
import About from './pages/4.About/About';
import Graph from './pages/5.Graph/Graph';
import Login from './pages/6.Login/Login';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/spotlight' element={<Spotlight />} />
          <Route path='/about' element={<About />} />
          <Route path='/graph/:symbol' element={<Graph />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
