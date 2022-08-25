import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MedalOutline, PeopleOutline, TrophyOutline } from 'react-ionicons'
import "./feature.scss";

function Feature() {
  return (
    <div className="features">
        <Container>
            <div className="expr-row">
                <Row>
                    <Col sm={12} lg={4}>
                        <div className="expr-item row">
                            <div className="col-2">
                                <MedalOutline />
                            </div>
                            <div className="col-10">
                                <h3>5+ Years of Experience</h3>
                                <p>We are pioneer in salesforce. </p>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} lg={4}>
                        <div className="expr-item row">
                            <div className="col-2">
                                <PeopleOutline />
                            </div>
                            <div className="col-10">
                                <h3>20+ Developers</h3>
                                <p>Highly skilled certified resources</p>
                            </div>
                        </div>
                    </Col>

                    <Col sm={12} lg={4}>
                        <div className="expr-item row">
                            <div className="col-2">
                                <TrophyOutline />
                            </div>
                            <div className="col-10">
                                <h3>25+ Awards</h3>
                                <p>Tremendous achievements</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
    </div>
  )
}

export default Feature