import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { CallOutline, LocationOutline, MailOutline }  from 'react-ionicons'
import "./top-menu.scss";

function TopMenu() {
  return (
    <header className="header header-secondary">
        <Container>
            <div className="header-top">
                <Row>
                    <Col xs={12} md={4}>
                        <p>Welcome to ITNOA Devs.</p>
                    </Col>
                    <Col xs={12} md={8} className="d-none d-lg-block">
                        <Row>
                            <Col xs={4}>
                                <div className="header-top-item">
                                    <span className="header-top-icon">
                                        <CallOutline />
                                    </span>
                                    <p>+92 3051689942</p>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <div className="header-top-item">
                                    <span className="header-top-icon">
                                        <MailOutline />
                                    </span>
                                    <p>itnoadevs@gmail.com</p>
                                </div>
                            </Col>

                            <Col xs={4}>
                                <div className="header-top-item">
                                    <span className="header-top-icon">
                                        <LocationOutline />
                                    </span>
                                    <p>12-C Paragon City, Lahore</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div> 
        </Container> 
    </header>
  )
}

export default TopMenu