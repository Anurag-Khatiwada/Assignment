import React from "react";
import { Route, Routes } from "react-router-dom";
import Carers from "./Pages/Carers/Carers";
import Home from "./Pages/Home/Home";
import PartnerPage from "./Pages/PartnerPage/PartnerPage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/partners' element={<PartnerPage/>}/>
      <Route path='/carers' element={<Carers/>} />
    </Routes>
  );
}

export default App;
