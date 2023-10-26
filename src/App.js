import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingForm from './BookingForm.js';
import Home from './Home.js';
import ConfirmedBooking from './ConfirmedBooking';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/booking" element={<BookingForm />}></Route>
        <Route exact path="/confirmbooking" element={<ConfirmedBooking />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
