import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "../views/Home";

/* 
路由懒加载——使用Suspense占位符
*/
// let Home = React.lazy(() => import("../views/Home"));
// let UseProps = React.lazy(() => import("../components/use-props"));
// let Children = React.lazy(() => import("../components/use-children"));
let routesPath = [
  {
    path: "/",
    component: React.lazy(() => import("../views/Home")),
  },
  {
    path: "/use/props/:num",
    component: React.lazy(() => import("../components/use-props")),
  },
  {
    path: "/use/children/:num",
    component: React.lazy(() => import("../components/use-children")),
  },
  {
    path: "/use/pattern/:num",
    component: React.lazy(() => import("../components/pattern-feature")),
  },
];
export default function RouterView() {
  return (
    <Router>
      <Routes>
        {routesPath.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={
                <Suspense fallback={<div>loading</div>}>
                  {<item.component />}
                </Suspense>
              }
            ></Route>
          );
        })}
      </Routes>
    </Router>
  );
}
