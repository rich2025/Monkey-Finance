import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/1.Home/Home';
import Portfolio from './pages/2.Portfolio/Portfolio';
import Spotlight from './pages/3.Spotlight/Spotlight';
import About from './pages/4.About/About';
import Profile from './pages/5.Profile/Profile';
import Login from './pages/6.Login/Login';

function App() {


  return (
    <div>
    <Router>
        <Navbar/>

        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/spotlight' element={<Spotlight />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />


        </Routes>

        <Footer />
     </Router>
    </div>
  )
}

export default App
