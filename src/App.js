import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Itinerary from './components/Itinerary';
import Housing from './components/Housing';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='' exact element={<Home></Home>}/>
          <Route path='/itinerary' exact element={<Itinerary/>} />
          <Route path='/housing' exact element={<Housing/>} />
          <Route path='/menu' exact element={<Menu/>} />
         </Routes>
      </Router>

    </div>
  );
}

export default App;
