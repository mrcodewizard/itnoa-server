import React from 'react'
import { Container } from 'react-bootstrap';
import "./terms.scss";

function TermsConditions() {
  return (
    <div className="terms-section">
        <Container>
          <h3 className="title">Terms & Condition</h3>

          <div className="terms-content">
              <div className="terms-item">
                <h4>1. Agreement to Terms:</h4>
                <p> These Terms and Conditions establish a legitimately mandatory agreement made between you, whether personally or on behalf of an entity, (Company, Business, you), and Digital Applications, doing business as “Digital Applications”, “DgAps”, 
                located at Block # 13, Bhutta Chowk, Khanewal, Punjab 58150 Pakistan (we, us), concerning your access to and use of the dgaps.com (https://dgaps.com/) “the website”. </p>

                <p> Digital Applications provides the following freelance services: Website design & development, Mobile application design & development, SEO & Digital Marketing, Content Writing and IT Startup Services. You agree that by accessing the Website and/or Services,
                  you have read, understood and agree to be bound by all of these Terms and Conditions. </p>

                <p> If you do not come to an agreement with all of these Terms and conditions, then you are forbidden from using the Website and Services and you must terminate directly. We endorse that you possess a duplicate copy of these Terms and conditions for future mention. </p>

                <p> On the off probability that you just do not concur with these Terms and conditions, at that time you are restricted from utilizing the website, Services, and you must end immediately. We have a tendency to order 
                  that you just print a duplicate of those Terms and conditions for future reference.</p>
              </div>
              
              <div className="terms-item">
                  <h4>2. Orders:</h4>
                  <p>In the event that you just want to order any Service or be a part of training courses created accessible through our Services and Trainings, you may be approached to allow bound information applicable to our products, Services or Trainings as well as, individual information, 
                    for instance, Name, Location without constraint.</p>
              </div>

              <div className="terms-item">
                  <h4>3. Our Privacy:</h4>
                  <p>If it's not an excessive amount of bother perused our Privacy Policy https://dgaps.com/privacy-policy that sets out the terms on which we have a tendency to process any close to home data we gather from you, or that you just provide to us. By utilizing the location, you comply with such making ready and you warrant that everyone data given by is actual.</p>
              </div>

              <div className="terms-item">
                  <h4>4. Contact Us:</h4>
                  <p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services please contact us by email at itnoadevs@gmail.com or by post:</p>

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

export default TermsConditions