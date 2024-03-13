import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "../views/Home";

/* 
路由懒加载——使用Suspense占位符
*/
let Home = React.lazy(() => import("../views/Home"));
let UseProps = React.lazy(() => import("../components/use-props"));
let Children = React.lazy(() => import("../components/use-children"));

export default function RouterView() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home></Home>}></Route> */}
        <Route
          path="/"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Home />
            </Suspense>
          }
        ></Route>
        <Route
          path="/use/props"
          element={
            <Suspense fallback={<div>loading</div>}>
              <UseProps />
            </Suspense>
          }
        ></Route>
        <Route
          path="/use/children"
          element={
            <Suspense fallback={<div>loading</div>}>
              <Children />
            </Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
}
