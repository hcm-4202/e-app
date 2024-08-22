import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login';
import Header from './components/Header';
import Home from './components/home/Home';
import ProductDetails from './components/ProductDetails';
import CategoryDetails from './components/CategoryDetails';
import CartPage from './components/cart/CartPage';
import { Provider } from 'react-redux';
import shopStore from './store/store';
import ProccedToPay from './components/proccedToPay';
import LandingPage from './components/LandingPage';
import Profile from './components/profile';
function App() {
  return (
   <BrowserRouter>
    <Provider store={shopStore}>

    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product/:id' element={<ProductDetails/>}/>
      <Route path='/category/:category' element={<CategoryDetails/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path='/proccedToPay' element={<ProccedToPay/>}/>
    </Routes>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
