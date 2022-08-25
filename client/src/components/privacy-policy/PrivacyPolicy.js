import React from 'react'
import { Container } from 'react-bootstrap';
import "./privacy-policy.scss";

function PrivacyPolicy() {
  return (
    <div className="privacy-section">
        <Container>
            <h3 className="title">Privacy Policy</h3>

            <div className="privacy-content">
              <div className="privacy-item">
                <h4>1. Statement:</h4>
                <p> Itnoa Devs ("us", "we", or "our") works the https://itnoadevs.com/site (the "Website").</p>

                <p> This page illuminates you of our arrangements identifying with the collecting information, use, and uncovering of private data once you utilize our Service and furthermore the choices you have identified with that information.</p>

                <p>We utilize your data to deliver and improve the Service. By utilizing the Service, you agree to the accumulation and utilization of information as per this approach. Except if generally sketched out amid this Privacy Policy, terms utilized in this Privacy Policy have the indistinguishable implications as in our Terms and Conditions, open from https://itnoadevs.com/terms</p>
              </div>
              
              <div className="privacy-item">
                  <h4>Data Collection and Use:</h4>
                  <p>We gather many varying kinds of information for various capacities to supply and improve our Service to you.</p>
                  <p>We may gather information anyway; the Service is gotten to and utilized ("Usage Data"). This Usage information could incorporate information like your PC's net Protocol address (for example IP address), program type, program form, the pages of our Service that you basically visit, the time and date of your visit, the time spent on those pages, particular gadget identifiers and option demonstrative data.</p>
              </div>

              <div className="privacy-item">
                  <h4>3. Our Privacy:</h4>
                  <p>If it's not an excessive amount of bother perused our Privacy Policy https://dgaps.com/privacy-policy that sets out the terms on which we have a tendency to process any close to home data we gather from you, or that you just provide to us. By utilizing the location, you comply with such making ready and you warrant that everyone data given by is actual.</p>
              </div>

              <div className="privacy-item">
                  <h4>4. Contact Us:</h4>
                  <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services please contact us by email at dgaps.com@gmail.com or by post:</p>

                  <em>
                      <strong>12 Commercial Broadway,<br/>
                      Paragon City Lahore.</strong>
                  </em>
              </div>
          </div>

        </Container>
    </div>
  )
}

export default PrivacyPolicy