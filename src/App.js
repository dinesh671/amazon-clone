import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Checkout from './components/checkout/Checkout';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='checkout' element={<Checkout/>} />
          <Route />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
