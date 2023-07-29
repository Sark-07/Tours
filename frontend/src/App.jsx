import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import Details from './pages/Details/Details';
import Checkout from './pages/Checkout/Checkout';
import Error from './pages/Error/Error';
import BuyTickets from './pages/BuyTickets/BuyTickets';
import Test from './pages/Home/__test__/Test';
import Thankyou from './pages/Thankyou/Thankyou';
import CancelPayment from './pages/CancelPayment/CancelPayment';
import Loader from './components/Loader';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='location' element={<Details/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='buytickets' element={<BuyTickets/>}/>
      <Route path='success' element={<Thankyou/>}/>
      <Route path='cancel' element={<CancelPayment/>}/>
      <Route path='test' element={<Loader/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
