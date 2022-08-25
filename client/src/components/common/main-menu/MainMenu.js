import { useEffect } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { MenuOutline } from "react-ionicons";
import { useLocation } from "react-router-dom";
import "./main-menu.scss";

function MainMenu(props) {
  const location = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-primary");
    const scrollTop = window.scrollY;
    if (scrollTop > 230) {
      header.classList.add("header-sticky");
    } else {
      header.classList.remove("header-sticky");
    }
  };

  const mainLogo = process.env.PUBLIC_URL + "/images/itnoa-dark.png";

  return (
    <header className="header header-primary">
      <Container>
        <Row className="align-items-center">
          <div className="header-nav">
            <Navbar collapseOnSelect expand="lg" className="header-main-menu">
              <div className="header-logo">
                <img src={mainLogo} alt="logo-main" />
              </div>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link
                    href={`${location.pathname === "/" ? "#home" : "/#home"}`}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href={`${location.pathname === "/" ? "#about" : "/#about"}`}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href={`${
                      location.pathname === "/" ? "#services" : "/#services"
                    }`}
                  >
                    Services
                  </Nav.Link>
                  <Nav.Link
                    href={`${
                      location.pathname === "/" ? "#projects" : "/#projects"
                    }`}
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    href={`${
                      location.pathname === "/"
                        ? "#testimonials"
                        : "/#testimonials"
                    }`}
                  >
                    Testimonials
                  </Nav.Link>
                  <Nav.Link
                    href={`${
                      location.pathname === "/" ? "#contact" : "/#contact"
                    }`}
                  >
                    Contact Us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <MenuOutline />
              </Navbar.Toggle>
              <a
                href={`${location.pathname === "/" ? "#contact" : "/#contact"}`}
                className="btn-quote"
              >
                Get a Quote
              </a>
            </Navbar>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default MainMenu;
