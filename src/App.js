import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login';
import Header from './components/Header';
import Home from './components/home/Home';
import ProductDetails from './components/ProductDetails';
import CategoryDetails from './components/CategoryDetails';
import CartPage from './components/cart/CartPage';
import { Provider } from 'react-redux';
import shopStore from './store/store';

function App() {
  return (
   <BrowserRouter>
    <Provider store={shopStore}>

    <Header/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/category/:category' element={<CategoryDetails/>}/>
      <Route path='/cart' element={<CartPage/>}/>
    </Routes>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
