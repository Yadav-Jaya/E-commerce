import './App.css';
import Cart from './components/Cart/Cart';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      
          <div className="App">
            <Routes>
              
                <Route path='/' element={<> <Navbar/> <Category/>  </>} />
                <Route path='/cart' element={<Cart/>} />
              
            </Routes>
          </div>
      
    </Router>
  );
}

export default App;
