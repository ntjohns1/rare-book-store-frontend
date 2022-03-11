import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { IdProvider } from './context/IdContext';
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
      <IdProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addCustomer" element={<AddCustomer />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/customer/:customerId" element={<SingleCustomer />} />
          <Route path="/book/:id" element={<SingleBook />} />
        </Routes>
      </IdProvider>
    </BrowserRouter>
  );
}

export default App;
