import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import Navigation from './shared/Navigation';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import AddProducts from './pages/Dashboard/Admin/AddProducts';
import ManageAllOrders from './pages/Dashboard/Admin/ManageAllOrders';
import ManageAllProducts from './pages/Dashboard/Admin/ManageAllProducts';
import MakeAdmin from './pages/Dashboard/Admin/MakeAdmin';
import AddToCart from './pages/AddToCart';
import BabyProducts from './pages/Products/BabyProducts';
import Mobiles from './pages/Products/Mobiles';
import Computer from './pages/Products/Computer';
import ToysAndSportProducts from './pages/Products/ToysAndSportProducts';
import AllGamingProducts from './pages/Products/AllGamingProducts';
import OrderNow from './pages/OrderNow';
import PrivateRoute from './protectedRoutes/PrivateRoute';
import AllHomeAndKitchenProducts from './pages/Products/AllHomeAndKitchenProducts';


function App() {
  return (

    <div className='App'>


      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>

            <Route exact path="/" element={<Home />}> </Route>
            <Route exact path="home" element={<Home />}> </Route>
            <Route exact path="login" element={<Login />}> </Route>
            <Route exact path="register" element={<Register />}> </Route>
            <Route exact path="dashboard" element={<Dashboard />}> </Route>
            <Route exact path="manageAllOrders" element={<ManageAllOrders />}> </Route>
            <Route exact path="addProducts" element={<AddProducts />}> </Route>
            <Route exact path="manageAllProducts" element={<ManageAllProducts />}> </Route>
            <Route exact path="makeAdmin" element={<MakeAdmin />}> </Route>
            <Route exact path="/addToCart/:productId" element={<AddToCart />}> </Route>
            <Route path="/baby" element={<BabyProducts />}> </Route>
            <Route path="/mobile" element={<Mobiles />}> </Route>
            <Route path="/computer" element={<Computer />}> </Route>
            <Route path="/toysAndSport" element={<ToysAndSportProducts />}> </Route>
            <Route path="/allGamingProducts" element={<AllGamingProducts />}> </Route>
            <Route path="/allHomeAndKitchenProducts" element={<AllHomeAndKitchenProducts />}> </Route>
            <Route path="/orderNow" element={<PrivateRoute> <OrderNow /> </PrivateRoute>}> </Route>
            <Route path="*" element={<NotFound />}> </Route>


          </Routes>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;  
