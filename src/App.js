import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Tracking from './components/Tracking';
import Test from './components/Test';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Tracking' element={<Tracking />} />
        <Route path='Trabaye' element={<Test />}/>
      </Routes>
      <Helmet>
      <script src="//code.tidio.co/zckujydwrnzek75fl97rm6nnyjucxcn1.js" async></script>
      </Helmet>
      <Footer />
    </div>
  );
}

export default App;
