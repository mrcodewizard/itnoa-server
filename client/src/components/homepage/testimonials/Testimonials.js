import React from "react";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./testimonials.scss";
import { StarOutline, StarSharp } from "react-ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="review-section" id="testimonials">
      <Container>
        <div className="review-content">
          <h3 className="title">Clients Feedback</h3>
          <p className="desc">
            {" "}
            We left some of the biggest agencies to do it better. Don't take our
            word for it, see what people say about us.{" "}
          </p>
        </div>
        <div className="review-slider">
          <Slider {...settings}>
            <div className="review-item">
              <i className="review-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </i>
              <div className="client-image">
                <img
                  src={process.env.PUBLIC_URL + "/images/client-one.jpg"}
                  alt="client-thumbnail"
                />
              </div>

              <div className="client-detail">
                <h3 className="client-name">Farhan Islam</h3>
                <ul className="nav client-rating">
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                </ul>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more.
                </p>
                <span className="client-rank">CEO Itnoa Devs</span>
              </div>
            </div>

            <div className="review-item">
              <i className="review-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </i>
              <div className="client-image">
                <img
                  src={process.env.PUBLIC_URL + "/images/client-one.jpg"}
                  alt="client-thumbnail"
                />
              </div>

              <div className="client-detail">
                <h3 className="client-name">Farhan Islam</h3>
                <ul className="nav client-rating">
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                </ul>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more.
                </p>
                <span className="client-rank">CEO Itnoa Devs</span>
              </div>
            </div>

            <div className="review-item">
              <i className="review-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </i>
              <div className="client-image">
                <img
                  src={process.env.PUBLIC_URL + "/images/client-one.jpg"}
                  alt="client-thumbnail"
                />
              </div>

              <div className="client-detail">
                <h3 className="client-name">Farhan Islam</h3>
                <ul className="nav client-rating">
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarSharp />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                  <li>
                    <StarOutline />
                  </li>
                </ul>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more.
                </p>
                <span className="client-rank">CEO Itnoa Devs</span>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
