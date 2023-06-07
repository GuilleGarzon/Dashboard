import { useRef, useState } from "react";
import { useAppContext } from "../../provider/provider";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import '../../styles/Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatch } = useAppContext();
  const ref = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (isOpen) {
      ref.current.click();
    }
  };

  const handleLogout = () => {
    dispatch({
      type: "LOGIN",
      value: null,
    });
    localStorage.removeItem("Profile");
  };

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="info"
          expand={expand}
          className="mb-4"
          onToggle={handleToggle}
          collapseOnSelect={true}
        >
          <Container fluid>
            <Navbar.Brand>
              <img alt="Logo OL Software" src="https://olsoftware.com/wp-content/uploads/2021/04/cropped-Logo-Oficial-OL-Software.png"/>
            </Navbar.Brand>
            <div className="nav-conainer">              

              <Navbar.Toggle
                ref={ref}
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink
                      onClick={ handleClick }
                      to="/dashboard"
                      className="nav-link"
                    >
                      <span className="header-nav">DASHBOARD</span>
                    </NavLink>

                    <NavLink
                      onClick={ handleClick }
                      to="/projects"
                      className="nav-link"
                    >
                      <span className="header-nav">PROJECTS</span>
                    </NavLink>

                    <NavLink
                      onClick={ handleClick }
                      to="/users"
                      className="nav-link"
                    >
                      <span className="header-nav">USERS</span>
                    </NavLink>
                    
                    <NavLink onClick={handleLogout} className="nav-link">
                    <span className="header-nav">LOGOUT</span>
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
      ))}      
    </>
  );
}

