import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./services.scss";
import {
  MedalOutline,
  ExtensionPuzzleSharp,
  ColorPaletteSharp,
  Cloud,
} from "react-ionicons";

const servicesImage = {
  backgroundImage: "url(../images/itnoa-service-bg.jpg)",
};

function Services() {
  return (
    <div className="service" id="services" style={servicesImage}>
      <Container className="service-container">
        <div className="service-upper">
          <h3>Our Services</h3>
          <p>
            We provide the best services which helps clients & business to boost
            up their sales & attract maximum customers
          </p>
        </div>

        <Row className="service-row">
          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <Cloud />
              </div>
              <div className="service-body">
                <h3>Commerce Cloud</h3>
                <p>
                  Enable your success in the high-demand e-commerce market
                  through the Salesforce commerce cloud. Hire Innovadel commerce
                  cloud services to excel in your market, sell limitless, and
                  streamline your business processes
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <Cloud />
              </div>
              <div className="service-body">
                <h3>Marketing Cloud</h3>
                <p>
                  We modernized the customer shopping experience by integrating
                  automation with the help of our experts experience quality
                  order management services with our team, which takes
                  responsibility for delivering top-notch results.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <Cloud />
              </div>
              <div className="service-body">
                <h3>Order Management</h3>
                <p>
                  We modernized the customer shopping experience by integrating
                  automation with the help of our experts experience quality
                  order management services with our team, which takes
                  responsibility for delivering top-notch results.
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <ExtensionPuzzleSharp />
              </div>
              <div className="service-body">
                <h3>Link Cartridge Development</h3>
                <p>
                  We provide our top notch services to develope salesforce link
                  cartridges for our valuable customers. Our development team
                  has developed couple of link cartridges for payment, reviews
                  etc. for world's top brand
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <ColorPaletteSharp />
              </div>
              <div className="service-body">
                <h3>UI-UX</h3>
                <p>
                  Our experts set the groundwork and purpose-simplified plans to
                  base the enterprise website. Our outstanding team of UI-UX
                  applies the best practices to analyze your business and offer
                  research based on a well-thought strategy.{" "}
                </p>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="service-item">
              <div className="service-icon">
                <MedalOutline />
              </div>
              <div className="service-body">
                <h3>MERN/MEAN Stack</h3>
                <p>
                  Our experience team thrive to provide excellent services in
                  full-stack scalable web applications using React, Angular &
                  Nodejs &{" "}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
