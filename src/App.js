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
import SingleCustomer from './components/Customer/SingleCustomer';
import SingleBook from './components/Book/SingleBook';


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/customers/:customerId" element={<SingleCustomer />} />
          <Route path="/books/:id" element={<SingleBook />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
