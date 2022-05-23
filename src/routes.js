import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginUI from "./common/login";
function RoutesWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginUI />} />
      </Routes>
    </Router>
  );
}

export default RoutesWrapper;
