import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";
import LoginUI from "./common/login";

// Page level component imports
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";
import Transactions from "./pages/transactions";
import NotFound404 from "./pages/404";
import Vasoolis from "./pages/vasoolis";

function RoutesWrapper() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/vasoolis" element={<Vasoolis />} />
        <Route
          exact
          path="/"
          element={<Navigate to="/dashboard" replace />}
        />{" "}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default RoutesWrapper;
