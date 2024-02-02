import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// import Card from "./Card"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<h1>Home</h1>}/>
  //       <Route path="/page" element={<h1>Page</h1>}/>
  //     </Route>
  //     <Route path="/link/:id" element={<Card />} />

  //   </Routes>
  // </BrowserRouter>
