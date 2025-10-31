import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./header.css";
import Logo from "./Logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Container fluid>
      <div className="header sticky-top bg-white ">
        <div className="logo">
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <nav className="nav-desktop">
          <ul className="nav-list">
            <li>
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Technologies
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Industries
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Hire Developers
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Our Solutions
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Company
              </a>
            </li>
          </ul>
          <div className="Btn">Contact Us</div>
        </nav>

        <div className="header-mobile">{!menuOpen ? <MenuIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={toggleMenu} /> : <CloseIcon style={{ fontSize: "2.5rem", cursor: "pointer" }} onClick={toggleMenu} />}</div>

        {menuOpen && (
          <nav className="nav-mobile">
            <ul className="nav-list">
              <li>
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Technologies
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Industries
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Hire Developers
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Work
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Company
                </a>
              </li>
            </ul>
            <div className="Btn">Contact Us</div>
          </nav>
        )}
      </div>
    </Container>
  );
}

export default Header;
