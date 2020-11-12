import './App.css';

import './custom.css';
import React from 'react';
import logo from './logo.svg';
import image from './download.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Row,Col,Image,Card,Button,Form} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

class AppFourteen extends React.Component{
  render(){
    return (
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
        </Nav>
        <Nav>
          <label className="commonName hello">Hello Brenda,</label>
          <Nav.Link href="#signout" className={"commonName signout"}>Sign Out</Nav.Link>
        </Nav>
      </Navbar>
      <Row>
      <Col xl={3} className={"leftPanel _p0"}>
      <Card bsPrefix="leftNavWrapper">
        <Card.Title className={"leftTitleMain"}>Welcome to WIC! </Card.Title>
        <Card.Subtitle className={"commonCardSubTitle letsStarted"}>Let's get started.</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_"}>Family questionnaire
        </Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Family members list</Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Scheduling your appointment</Card.Subtitle>
      </Card>
      </Col>
      <Col xl={7} className={"middlePanel _p0 _m0"}>
      <Card bsPrefix="middleNavWrapper">
        <Card.Title className={"titleMain"}>We'll start by determining which members need to be added to the family.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0"}>WIC benefits are for pregnent and postpartum mothers and children
        up to the age of 5 years. Please select the statement(s) below that are true for you</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}><Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"Myself or a member in the home is pregnent."}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}><Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"Myself or a member in the home is pregnent."}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}><Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"Myself or a member in the home is pregnent."}
        /></Card.Subtitle>
        
      </Card>
      <div className="continueWrapper">
        <Row xl={12}>
        <Col xl={6}></Col>
        <Col xl={6} className={"_tright"}>
          <Button size="sm" href="login" className={"button continue login"}>Continue</Button>
        </Col>
      </Row>
      </div>
      </Col>
      <Col xl={2} className={"rightPanel _p0"}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Col>
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

export default AppFourteen;

