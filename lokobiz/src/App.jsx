import React, { useState } from "react";
import Landing from "./components/Landing"
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <React.Fragment>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" name="Landing" element={<Landing/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App;
