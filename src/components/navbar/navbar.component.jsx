import { Navbar, Nav, Container } from "react-bootstrap";
import { RapperdNavbar } from "./navbar.styles";
import { useHistory, useLocation } from "react-router";
import { NavLink, Link } from "react-router-dom";
const ComponentNavbar = () => {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <>
      <div className="">
        <div className="">
          <RapperdNavbar>
            <Navbar bg="" expand="lg">
              <Container>
                <ul>
                  <li className={splitLocation[1] === "" ? "active" : ""}>
                    <Link to="/" activeClassName="active-link">
                      Contact{" "}
                    </Link>
                  </li>

                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      {/* <NavLink to="">Home</NavLink> */}
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <NavLink
                          activeClassName="active-link"
                          className="normal"
                          to="/table"
                        >
                          Tables
                        </NavLink>
                      </li>
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <NavLink
                          activeClassName="active-link"
                          className="normal"
                          to="/sort-table"
                        >
                          Sorting Tables
                        </NavLink>
                      </li>
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <NavLink
                          activeClassName="active-link"
                          className="normal"
                          to="/data"
                        >
                          get Request-Redux-thunk
                        </NavLink>
                      </li>
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <NavLink
                          activeClassName="active-link"
                          className="normal"
                          to="/post"
                        >
                          post Request-Redux-thunk
                        </NavLink>
                      </li>
                      <li className={splitLocation[1] === "" ? "active" : ""}>
                        <NavLink
                          activeClassName="active-link"
                          className="normal"
                          to="/about"
                        >
                          About
                        </NavLink>
                      </li>
                    </Nav>
                  </Navbar.Collapse>
                </ul>
              </Container>
            </Navbar>
          </RapperdNavbar>
        </div>
      </div>
    </>
  );
};
export default ComponentNavbar;
