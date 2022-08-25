import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { ResizeOutline } from 'react-ionicons'
import "./hero-banner.scss";

const heroImage = {
    backgroundImage: "url(./images/herobanner-one.jpg)",
}

function HeroBanner() {
  return (
    <div className="hero-banner" style={ heroImage } id="home">
        <div className="hero-banner-body">
            <Container>
                <div className="hero-banner-content">
                    <h3 className="hero-banner-title">Welcome to <span className="text-lbue">ITNOA Devs</span></h3>
                    <p className="hero-banner-desc">Itnoa strives to achieve excellence in e-commerce solutions for every size of business around the globe. With the vision to help every client grow, we started incorporating multi-channel eCommerce solutions in their businesses. We have a highly qualified and expert e-commerce & enterprise software development team
                    that effectively works on your enterprise’s online appearance so you can achieve success</p>

                    <div className="hero-banner-bottom">
                        <Button className="btn-more">Read More</Button>
                    </div>
                </div>
            </Container>
        </div>

        <div className="hero-banner-scroll">
            <Button className="btn-bottom">
                <ResizeOutline />
            </Button>
        </div>
    </div>
  )
}

export default HeroBanner