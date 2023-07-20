import React from "react";
import "./style/App.scss";
import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Model from "./pages/Model";

function App() {
  const imageDetails = {
    width: 324,
    height: 450,
  };
  const location = useLocation();
  const element = useRoutes([
    { path: "/", element: <Home imageDetails={imageDetails} /> },
    { path: "/model/:id", element: <Model imageDetails={imageDetails} /> },
  ]);

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

export default App;
