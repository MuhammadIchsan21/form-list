import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MySwitch from "./components/customSwitch";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [path] = useState("Profile");
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/Profile">
                Profile
              </Link>
            </li>
          </ul>
        </header>
        <MySwitch path={path} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
