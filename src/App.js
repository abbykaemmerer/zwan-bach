import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Itinerary from './components/Itinerary';
import MessageBoard from './components/MessageBoard';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='' exact element={<Home></Home>}/>
          <Route path='/itinerary' exact element={<Itinerary/>} />
          <Route path='/MessageBoard' exact element={<MessageBoard/>} />
          <Route path='/menu' exact element={<Menu/>} />
         </Routes>
      </Router>
    <Footer></Footer>
    </div>
  );
}

export default App;
