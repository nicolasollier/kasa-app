import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/accomodations">Accomodations</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>© 2023 Your Website</p>
      </footer>
    </div>
  );
};

export default Layout;
