import './App.css';

import './custom.css';
import React from 'react';
import logo from './logo.svg';
import Logoo from './photo-1579546929518-9e396f3cc809.jpg';
import image from './download.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Row,Col,Image,Card,Button} from 'react-bootstrap';

class One extends React.Component{
    render(){
        return(
            <div className="App">
      <Navbar bg="dark-new" variant="dark-new">
        <Navbar.Brand href="#home"><img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
          <Nav.Link  href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#signin">Sign In</Nav.Link>
        </Nav>
      </Navbar>
      <Row>
        <Col md={12} className={"heroImage"}>
          <Image src={Logoo}  fluid width={"100%"} maxHeight={"100%"}/>
        </Col>
        <Card className="heroImageCard">
          <Card.Title>Welcome to myWIC</Card.Title>
          <Card.Subtitle>The myWIC app allows you to schedule upcoming appointments, upload documents, view benefits and much more.</Card.Subtitle>
          <Card.Body>
            <div>
              <Button variant="secondary" size="sm" href="login" className={"button login"}>Login</Button>
            </div>
            <div>
              <Button variant="secondary" size="sm" className={"button createWic"}>Create a myWIC account</Button>
            </div>  
            <div>
              <Button variant="secondary"  className={"button startApp"} size="sm">Start my application</Button>
            </div>
          </Card.Body>
        </Card>
      </Row>
      <Row >
        <div className="gridWrapper">
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
              <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center commonImageLogo"
            />
            </Col>
            <Col xl={9}>
            <Card>
              <Card.Title className={"commonCardTitle"}>A brand new mobile experience!</Card.Title>
              <Card.Subtitle className={"commonCardSubTitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nibh ac arcu.</Card.Subtitle>
              <Card.Body className={"commonCardLearnMore"}>Learn more
              </Card.Body>
            </Card>
            </Col>
            </Row>
            </div>
            <div className="separatorEachGrid"></div>
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
              <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center commonImageLogo"
            />
            </Col>
            <Col xl={9}>
            <Card>
              <Card.Title className={"commonCardTitle"}>See everything, all right here</Card.Title>
              <Card.Subtitle className={"commonCardSubTitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nibh ac arcu vestibulum, quis vestibulum orci ven.</Card.Subtitle>
            </Card>
            </Col>
            </Row>
            </div>
            <div className="separatorEachGrid"></div>
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
              <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-center commonImageLogo"
            />
            </Col>
            <Col xl={9}>
            <Card>
              <Card.Title className={"commonCardTitle"}>Things are going to be amazing!</Card.Title>
              <Card.Subtitle className={"commonCardSubTitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nibh ac arcu vestibulum, quis vestibulum orci ven.</Card.Subtitle>
            </Card>
            </Col>
            </Row>
            </div>
        </div>
      </Row>
      <Row >
        <div className="gridWrapperTestimonial">
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
            <Image src={image} className={"commonImageLogo"} roundedCircle />
            </Col>
            <Col xl={9}>
            <Card>
              <Card.Title className={"commonCardTitle"}>Testimonial</Card.Title>
              <Card.Subtitle className={"commonCardSubTitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nibh ac arcu vestibulum, quis vestibulum orci ven.</Card.Subtitle>
            </Card>
            </Col>
            </Row>
            </div>
            <div className="separatorEachGrid"></div>
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
            <Image src={image} className={"commonImageLogo"} roundedCircle />
            </Col>
            <Col xl={9}>
            <Card>
              <Card.Title className={"commonCardTitle"}>See everything, all right here</Card.Title>
              <Card.Subtitle className={"commonCardSubTitle"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida nibh ac arcu vestibulum, quis vestibulum orci ven.</Card.Subtitle>
            </Card>
            </Col>
            </Row>
            </div>
        </div>
      </Row>
      <Row>
      <Navbar bg="dark-new-footer" variant="dark-new">
      <Col xl={2}>
        <Navbar.Brand href="#home" className={"_left"}><img
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand>
      </Col>
      <Col xl={7}>
        <Nav className="mr-auto">
          <Nav.Link href="#about" className="privacyPolicy">Privacy Policy | Terms & Conditions</Nav.Link>
        </Nav>
        </Col>
        <Col xl={3}>
        <Nav className={"_right"}>
          <Nav.Link href="#signin" className={"copyRight"}>© 2020 Wic Mosaic. All rights reserved.</Nav.Link>
        </Nav>
        </Col>
      </Navbar>
      </Row>
    </div>
        )
    }
}
export default One;