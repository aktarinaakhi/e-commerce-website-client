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

function App() {
  return (


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

          <Route path="*" element={<NotFound />}> </Route>


        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
