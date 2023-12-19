// December 01, 2023
//Hooks
//axios : npm i axios
//async
//try, catch

import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import RootLayOut from "./components/RootLayOut";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<DetailPage />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
