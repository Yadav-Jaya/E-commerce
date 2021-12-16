import './App.css';
import Cart from './components/Cart/Cart';
import Category from './components/Category/Category';
import Navbar from './components/Navbar/Navbar';
import withFetch from './components/withFetch';



const CategoryWithFetch = withFetch(Category,'https://fakestoreapi.com/products/categories')

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <CategoryWithFetch  />
      
    </div>
  );
}

export default App;
