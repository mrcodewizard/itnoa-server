import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./top-projects.scss";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import { ArrowForwardOutline } from "react-ionicons";

const projectArray = [
  {
    title: "CV Sciences",
    desc: "CV Sciences provide research based solutions i-e CBD Oil etc for the well being of the planet. This is health transformed.",
    imageUrl: process.env.PUBLIC_URL + "./images/project-01.jpg",
    projectUrl: "https://cvsciences.com",
  },
  {
    title: "Lor Espresso",
    desc: "Lor Espresso is an online coffee shop which provides the best coffee products for its customers all over the world",
    imageUrl: process.env.PUBLIC_URL + "./images/project-02.jpg",
    projectUrl: "https://www.lorespresso.com/",
  },
  {
    title: "Tnuva",
    desc: "Tnuva is an Israeli food creation and marketing company. The company holds in Israel a significant market share in the field of drinking milk production, dairy products and its marketing",
    imageUrl: process.env.PUBLIC_URL + "./images/project-03.jpg",
    projectUrl: "https://www.tnuva.com",
  },
  {
    title: "Lor Espresso",
    desc: "Lor Espresso is an online coffee shop which provides the best coffee products for its customers all over the world",
    imageUrl: process.env.PUBLIC_URL + "./images/project-02.jpg",
    projectUrl: "https://www.lorespresso.com/",
  },
];

function TopProjects() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="projects" id="projects">
      <Container className="projects-container">
        <div className="projects-top">
          <h3 className="title"> Our Top Projects </h3>
          <p>
            Our expertise & passion to deliver the best helps us to leave a
            lasting impression on valuable clients & they are proud to work with
            us.
          </p>
        </div>

        <div className="projects-slider">
          <Slider {...settings}>
            {projectArray.map((project, index) => {
              return (
                <div key={index} className="slider-item">
                  <div className="item-thumb">
                    <img src={project.imageUrl} alt="project-item" />
                  </div>
                  <div className="item-detail">
                    <div className="center-align">
                      <h3 className="item-title">{project.title} </h3>
                      <p className="item-desc">{project.desc}</p>
                      <a href={project.projectUrl}>
                        View Project
                        <span>
                          <ArrowForwardOutline />
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="item-bottom">
                    <h3 className="bottom-title">{project.title}</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default TopProjects;
