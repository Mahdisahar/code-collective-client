import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout page/Checkout';
import Code from './pages/Code page/Code';
import Profile from './pages/Profile page/Profile';

function App() {
  return (
    <BrowserRouter>
	<Routes>
		<Route path='/' element={<Checkout />} />
		<Route path='/code' element={<Code/>} />
		<Route path='/profile' element={<Profile />} />
	</Routes>
 </BrowserRouter>
  );
}

export default App;
