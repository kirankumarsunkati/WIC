import './App.css';

import './custom.css';
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotterLogo from './images/footer_logo.svg';
import myWic from './images/myWic.svg';
import banner1 from './images/banner1.png';
import {Navbar,Nav,Row,Col,Image,Card,Button,Form} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import FamilyMember from './FamilyMembers/FamilyMember';

class AppFifteen extends React.Component{
  render(){
    return (
      <div className="App familyAdditionWrapper">
      <Navbar bg="dark-new" variant="dark-new">
        <Navbar.Brand href="#home"><img
        src={myWic}
        width="60"
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
      <Col xl={3} className={"_rootp0m0"}>
      <Card bsPrefix="leftNavWrapper">
        <Card.Title className={"leftTitleMain"}>Welcome to WIC! </Card.Title>
        <Card.Subtitle className={"commonCardSubTitle letsStarted"}>Let's get started.</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_"}>Family questionnaire
        </Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Family members list</Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Scheduling your appointment</Card.Subtitle>
      </Card>
      </Col>
      <Col xl={7} className={"_rootp0m0"}>
      <Card bsPrefix="middleNavWrapper">
        <Card.Title className={"titleMain"}>We'll start by determining which members need to be added to the family.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0"}>WIC benefits are for pregnent and postpartum mothers and children
        up to the age of 5 years. Please select the statement(s) below that are true for you</Card.Subtitle>
        <Row>
          <Col xl={6}><Card.Title className={"_left"}>Members</Card.Title></Col>
          <Col xl={5}><Card.Title className={"_right"}>New Members</Card.Title></Col>
          <Col xl={1}></Col>
        </Row>
       <FamilyMember/>
       <FamilyMember/>
       <FamilyMember/>
       <FamilyMember/>
      </Card>
      <div className="continueWrapper">
        <Row xl={12}>
        <Col xl={6}></Col>
        <Col xl={6} className={"_tright"}>
          <Button size="sm" href="login" className={"button continuetoScheduling login"}>Continue to Scheduling</Button>
        </Col>
      </Row>
      </div>
      </Col>
      <Col xl={2} className={"rightPanel _p0 _rootp0m0"}>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
      height={600}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Third slide"
      height={600}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="Third slide"
      height={600}
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
        src={fotterLogo}
        width="120"
        height="30"
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

export default AppFifteen;

