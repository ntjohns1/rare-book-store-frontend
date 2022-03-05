import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addCustomer" element={<AddCustomer />} />
      <Route path="/addBook" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
