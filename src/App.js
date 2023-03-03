import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Tracking from './components/Tracking';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Tracking' element={<Tracking />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
