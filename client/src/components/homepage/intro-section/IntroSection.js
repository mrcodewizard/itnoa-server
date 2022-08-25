import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { TrophyOutline, BulbOutline, CheckmarkCircleOutline } from 'react-ionicons'

import "./intro-section.scss";

function IntroSection() {
  return (
    <div className="intro" id="about">
        <Container>
            <div className="intro-upper">
                <h3 className="intro-title">About <span className="text-lbue">Itnoa Devs</span> </h3>
                <p className="intro-desc">Founded in 2017, Itnoa thrive to excel in its services & assure 100% satisfaction of its valubale customers. We are a team of highly skilled developers who 
                  are always ready to provide awesome solutions & ideas for business to attract maximum customers. Elegant design, efficient & error-free code are some keypoints that help us to grow faster.
                </p>
            </div>

            <div className="intro-boxes">
                <Row className="intro-row">
                    <Col xs={12} md={6} lg={4} className="intro-column">
                        <div className="intro-box dark">
                            <div className="intro-icon">
                                <TrophyOutline />
                            </div>
                            
                            <h3>Think Creative</h3>
                            <p>Get customized and high-quality services through our expert resource panel. We have an amazing team of certified professionals</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4} className="intro-column">
                        <div className="intro-box light">
                            <div className="intro-icon">
                                <BulbOutline />
                            </div>
                            
                            <h3>Innovative Solutions</h3>
                            <p>With years of expertise in giving innovative solutions, you can trust us for your business development services.</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4} className="intro-column">
                        <div className="intro-box dark">
                            <div className="intro-icon">
                                <CheckmarkCircleOutline />
                            </div>
                            
                            <h3>Customer Support</h3>
                            <p>We offer reliable solutions for every client’s problem. Our support team is available 24/7 we’ll have your back 24/7. You can reach anytime for your queeries.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  )
}

export default IntroSection