import { Routes,Route } from "react-router-dom";
import React from 'react'
import Dashboard from "../pages/dashboard/Dashboard";
import Purchase from "../pages/purchase/purchase";
import Sales from "../pages/sales/sales";
import Logistics from "../pages/logistics/Logistics";

function NavBar() {
  return (
    <div>NavBar
  <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/purchase" element={<Purchase />}>   
      </Route>
      <Route path="/sales" element={<Sales  />}></Route>
     
      <Route path="/logistics" element={<Logistics/>}></Route>
    </Routes>

    </div>
  )
}

export default NavBar