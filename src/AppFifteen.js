import './App.css';

import './custom.css';
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Row,Col,Image,Card,Button,Form} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import FamilyMember from './FamilyMembers/FamilyMember';

class AppFifteen extends React.Component{
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
          <label>Hello Brenda,</label>
          <Nav.Link href="#signout">Sign Out</Nav.Link>
        </Nav>
      </Navbar>
      <Row>
      <Col xl={3}>
      <Card>
        <Card.Title className={""}>Welcome to WIC! Let's get started.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle"}><Form.Check 
        type={"radio"}
        id={"radio"}
        label={"Family questionnaire"}
      /></Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle"}><Form.Check 
        type={"radio"}
        id={"radio"}
        label={"Family members list"}
      /></Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle"}><Form.Check 
        type={"radio"}
        id={"radio"}
        label={"Scheduling your appointment"}
      /></Card.Subtitle>
      </Card>
      </Col>
      <Col xl={6}>
      <Card>
        <Card.Title className={""}>Great! Based on what you checked this is your initial family list.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle"}>This is the list of members who are applying for WIC benefits or who will oversee the use of benefits for other members of the family.</Card.Subtitle>
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
      </Col>
      <Col xl={3}>
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
        \
        </Col>
      </Navbar>
      </Row>
      
    </div>
    )
  }
}

export default AppFifteen;

