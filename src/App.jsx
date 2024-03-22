import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Footer from "./components/Footer/Footer";
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="app">
            <BrowserRouter>
              <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/checkout" element={<CheckoutPage/>}/>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
