import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import Navigation from './shared/Navigation';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route exact path="/" element={<Home />}> </Route>
          <Route exact path="/home" element={<Home />}> </Route>
          <Route exact path="/login" element={<Login />}> </Route>
          <Route exact path="/register" element={<Register />}> </Route>

          <Route path="*" element={<NotFound />}> </Route>


        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
