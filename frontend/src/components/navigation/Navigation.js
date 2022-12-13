import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../JS/actions/userActions";
import k from "./outp.png";
const Navigation = () => {
  const user = useSelector((state) => state.userReducer.user);
  // console.log({ user });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return (
    <div className="navv">
      {token ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img src={k} alt="jj" width="50px" />
            <Navbar.Brand as={Link} to="/home" style={{ marginLeft: "0%" }}>
              koVisit
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>

                <NavDropdown title={user.username} id="collasible-nav-dropdown">
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/login");
                    }}
                  >
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/profile">
                    My Profile
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img src={k} alt="jj" width="50px" />
            <Navbar.Brand as={Link} to="/home" style={{ marginLeft: "-4px" }}>
              OutaIAuto
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Sign up
                </Nav.Link>
                <Nav.Link as={Link} to="/admin">
                  Admin
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
};

export default Navigation;
