import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/user-side-pages/landing-page";

function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
