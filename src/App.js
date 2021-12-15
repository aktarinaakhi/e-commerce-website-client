import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Header></Header> */}
        <Routes>

          <Route path="/" element={<Home />}> </Route>



          <Route path="*" element={<NotFound />}> </Route>


        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;
