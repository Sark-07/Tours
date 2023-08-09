import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUP/SignUp';
import Details from './pages/Details/Details';
import Checkout from './pages/Checkout/Checkout';
import Error from './pages/Error/Error';
import BuyTickets from './pages/BuyTickets/BuyTickets';
import Test from './pages/Home/__test__/Test';
import SuccessPayment from './pages/SuccessPayment/SuccessPayment'
import CancelPayment from './pages/CancelPayment/CancelPayment';
import {ProtectedRoute} from './context/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='location' element={<Details/>}/>
      <Route path='checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
      <Route path='buytickets' element={<ProtectedRoute><BuyTickets/></ProtectedRoute>}/>
      <Route path='success' element={<ProtectedRoute><SuccessPayment/></ProtectedRoute>}/>
      <Route path='cancel' element={<ProtectedRoute><CancelPayment/></ProtectedRoute>}/>
      <Route path='test' element={<Dashboard/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  );
}

export default App;
