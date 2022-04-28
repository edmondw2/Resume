import React from "react";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";

import "./Css/site.css";
import "./Css/print.css";
import "./Css/bootstrap.min.css";
import "./Css/bootstrap.css";
import "./Css/main.css";

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
