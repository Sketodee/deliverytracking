import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
