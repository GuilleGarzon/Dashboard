import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import '../../styles/Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  // const result = JSON.parse(atob(localStorage.getItem('profile'))); 
  // const user = result.map(res => res.user);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (isOpen) {
      ref.current.click();
    }
  };

  const handleLogout = () => {        
    localStorage.clear();
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
            <div className="nav__container">              

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
                      className="nav-link "
                    >
                      <span className="header__nav">Dashboard</span>
                    </NavLink>

                    <NavLink
                      onClick={ handleClick }
                      to="/projects"
                      className="nav-link"
                    >
                      <span className="header__nav">Projects</span>
                    </NavLink>

                    <NavLink
                      onClick={ handleClick }
                      to="/users"
                      className="nav-link"
                    >
                      <span className="header__nav">Users</span>
                    </NavLink>  

                    {/* {
                      user && (
                        <span  
                          className="nav-link"
                        >
                          <span className="header__nav">{user}</span>
                        </span>  
                      )
                    }                   */}
                    
                    <NavLink onClick={handleLogout} className="nav-link">
                    <span className="header__nav">Logout</span>
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

