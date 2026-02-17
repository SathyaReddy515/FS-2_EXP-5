import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation
} from "react-router-dom";

import Loader from "./components/Loader.jsx";
import "./index.css";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">⚡ LazyLoadApp</span>
        </div>

        <div className="nav-right">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>
      </nav>

      <AnimatedRoutes />
    </Router>
  );
}

export default App;
