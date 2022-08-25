import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CallOutline, LocationOutline, MailOutline } from "react-ionicons";
import axios from "axios";
import "./request-quote.scss";

function RequestQuote() {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  console.log(SERVER_URL);
  const [value, setValue] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState([]);

  const handleChange = (evt) => {
    setValue({
      ...value,
      [evt.target.name]: evt.target.value,
    });
  };

  const submitForm = (evt) => {
    evt.preventDefault();
    axios
      .post(`${SERVER_URL}/send-email`, value)
      .then((res) => {
        setError([]);
        setSuccess(res.data.success);
        setError(res.data.errors);
        setValue({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        setError([]);
        setError(err.response.data.errors);
        setSuccess("");
      });
  };

  const getErrorHTML = (error) => {
    if (error) {
      var errorContainer = document.createElement("p");
      errorContainer.className = "error-msg";
      errorContainer.innerHTML = error;
      return errorContainer;
    }
  };

  const getSuccessHTML = (success) => {
    if (success) {
      console.log(success);
      var successContainer = document.createElement("p");
      successContainer.className = "success-msg";
      successContainer.innerHTML = success;
      return successContainer;
    }
  };

  const clearErrors = () => {
    var errorFields = document.getElementsByClassName("error-msg");
    for (var i = 0; i < errorFields.length; i++) {
      let inputSiblings = errorFields[i].previousElementSibling;
      if (
        inputSiblings.tagName === "input" ||
        inputSiblings.tagName === "textarea"
      ) {
        console.log("Testing");
        inputSiblings.classList.remove("field-error");
      }
      errorFields[i].remove();
    }
  };

  if (error.length > 0) {
    clearErrors();
    error.forEach((err) => {
      document.querySelectorAll(`[name="${err.field}"]`).forEach((el) => {
        el.parentNode.insertBefore(getErrorHTML(err.message), el.nextSibling);
        el.classList.add("field-error");
      });
    });
  } else {
    clearErrors();
    if (success) {
      document
        .querySelector(".form-column")
        .appendChild(getSuccessHTML(success));
      setTimeout(() => {
        document.getElementsByClassName("success-msg")[0].remove();
      }, 3000);
      setSuccess(null);
    }
  }

  return (
    <div className="quote-section" id="contact">
      <Container>
        <Row className="quote-row no-gutters">
          <Col sm={12} lg={8}>
            <div className="form-column">
              <h3 className="title">Request A Quote</h3>
              <p>
                Reach out below with any inquiries or project ideas. We'd love
                to hear from you.
              </p>

              <form
                action="/"
                onSubmit={submitForm}
                method="post"
                className="form"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={value.name}
                        name="name"
                        onChange={(e) => handleChange(e)}
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={value.phone}
                        name="phone"
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={value.email}
                        name="email"
                        onChange={(e) => handleChange(e)}
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={value.subject}
                        name="subject"
                        onChange={(e) => handleChange(e)}
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        value={value.message}
                        onChange={(e) => handleChange(e)}
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row mt-2 align-items-center">
                      <div className="col-12 col-md-6">
                        <div className="checkbox-inline form-group">
                          <input type="checkbox" />
                          <p>Also subscribe us </p>
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="form-group d-flex justify-content-md-end">
                          <button type="submit" className="btn btn-send">
                            Send Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>

          <Col sm={12} lg={4}>
            <div className="contact-column">
              <h3>Contact Details</h3>
              <p>Get in touch with us</p>

              <div className="contact-item">
                <div className="contact-icon">
                  <CallOutline />
                </div>
                <div className="contact-detail">
                  <h4>Phone:</h4>
                  <p>
                    {" "}
                    +92 3314936053 <br />
                    +92 3051689942
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MailOutline />
                </div>
                <div className="contact-detail">
                  <h4>Email:</h4>
                  <p>
                    {" "}
                    info@itnoadevs.com <br />
                    itnoadevs@gmail.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <LocationOutline />
                </div>
                <div className="contact-detail">
                  <h4>Address:</h4>
                  <p>
                    {" "}
                    12 Commercial Broadway,
                    <br /> Paragon City Lahore
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RequestQuote;
