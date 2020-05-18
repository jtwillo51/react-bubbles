import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className = "header">
      <Link to="/" className = "link">Login</Link>
      <Link to="/bubblepage" className = "link">Bubbles!</Link>
    </div>
  );
}
export default Header;
