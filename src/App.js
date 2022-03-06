import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import AddCustomer from './components/Customer/AddCustomer';
import AddBook from './components/Book/AddBook'
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/addCustomer" element={<AddCustomer />} />
`      <Route path="/addBook" element={<AddBook />} />
`      </Routes>
    </BrowserRouter>
  );
}

export default App;
