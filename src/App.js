import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>   {/* shop will be apper as default  */}
        <Route path='/shop' element={<Shop />}></Route>

        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>}>
        </Route>

        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>}
        ></Route>

        <Route path='/shipment' element={
          <RequireAuth>
            <Shipment />
          </RequireAuth>
        }></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
