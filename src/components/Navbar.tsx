import {
  Container,
  Nav,
  NavLink,
  NavbarBrand,
  Navbar as NavbarBs,
} from "react-bootstrap";

import { FaProjectDiagram } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <NavbarBs
        expand="md"
        sticky="top"
        className="fw-bold fs-5 shadow bg-white"
      >
        <Container>
          <NavbarBrand
          style={{cursor:"pointer"}}
            className="fs-4"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Kamil.<span style={{ color: "#9400FF" }}>DEV</span>
          </NavbarBrand>
          <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBs.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                className="d-flex align-items-center gap-1"
                href="#about"
                as={NavLink}
              >
                <FaQuestion />
                About
              </Nav.Link>
              <Nav.Link
                className="d-flex align-items-center gap-1"
                href="#skills"
                as={NavLink}
              >
                <GiSkills />
                Skills
              </Nav.Link>
              <Nav.Link
                className="d-flex align-items-center gap-1"
                href="#projects"
                as={NavLink}
              >
                <FaProjectDiagram />
                Projects
              </Nav.Link>
            </Nav>
          </NavbarBs.Collapse>
        </Container>
      </NavbarBs>
    </>
  );
}

export default Navbar;
