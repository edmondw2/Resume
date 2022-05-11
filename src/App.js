import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import English from "./Components/English/English";
import SecondPage from "./Components/SecondPage/SecondPage";

import "./Css/site.css";
import "./Css/print.css";
import "./Css/bootstrap.min.css";
import "./Css/bootstrap.css";
import "./Css/main.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/english" exact element={<English />}></Route>
          <Route path="/register" exact element={<SecondPage />}></Route>
          {/* <Route path="*" exact element={<P404 />}></Route> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
