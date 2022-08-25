import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { CheckmarkCircleSharp } from 'react-ionicons'
import "./check-list.scss";

const checkListBackground = {
   backgroundImage: "url(./images/itnoa-checklist-bg.jpg)"
}

const checkedList = [
  {
    id: 1,
    title: "Knowledge & Experience",
    desc: "An experianced team having worked on multiple SFCC and MERN projects. We deliver evrything according to client expectation",
  },
  {
    id: 2,
    title: "Build Guarantee",
    desc: "We follow the best practices and write robust code that ensures bug free production deplyments",
  },
  {
    id: 3,
    title: "Customer Focused",
    desc: "Strong requirement and anlalysis process so that each feature is built as per customers requirement",
  },
  {
    id: 4,
    title: "Strategy & Planning",
    desc: "We truly partner with our clients and work with them to plan, launch, market, and promote a successful online store.",
  },
  {
    id: 5,
    title: "Efficient & Driven",
    desc: "We left some of the biggest agencies in the world to build ITNOA devs because we believed that there is a better way to deliver great work and sustained value to clients",
  },
  {
    id: 6,
    title: "Managed Services",
    desc: "We provide a comprehensive set of services to ensure that your site is operating at peak efficiency at all times.",
  }
]

function Checklist() {
  return (
    <div className="checklist-section" style={ checkListBackground }>
        <Container>
          <div className="checklist-content">
            <div className="checklist-top">
                <h3 className="title">Why We Are The Best</h3>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard</p>
            </div>
            <Row className="checklist-body">
                {
                  checkedList.map( item => {
                    return(
                      <Col xs={12} md={6} key={ item.id }>
                          <div className="checklist-item">
                              <span className="checklist-item-icon"><CheckmarkCircleSharp /></span>
                              <h3 className="checklist-item-title">{ item.title }</h3>
                              <p className="checklist-item-desc">{ item.desc }</p>
                          </div>
                      </Col>
                    )
                  })
                }

                
            </Row>
          </div>
        </Container>
    </div>
  )
}

export default Checklist