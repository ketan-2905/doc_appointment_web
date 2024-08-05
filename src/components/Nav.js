import React from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav>
        <BrowserRouter>
        <ul className="nav-links">
            <li>
                <Link to='#about' smooth>
                    About Me
                </Link>
            </li>
            <li>
                <Link to='#contact' smooth>
                    Contact
                </Link>
            </li>
        </ul>
        </BrowserRouter>
    </nav>

    );
};

export default Nav;