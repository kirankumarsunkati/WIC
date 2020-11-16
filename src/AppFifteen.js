import './App.css';
import './custom.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotterLogo from './images/footer_logo.svg';
import myWic from './images/myWic.svg';
import banner1 from './images/banner1.png';
import callCenterLogo from './images/call_center.png';
import {Navbar,Nav,Row,Col,Card,Button,Modal} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import FamilyMember from './FamilyMembers/FamilyMember';



class AppFifteen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {flag: false};
  }
  handleClose (){
    this.setState({
      flag: !this.state.flag
    });
 }
 handleShow (){
   console.log('handle show')
   this.setState({
    flag: !this.state.flag
  });
 }
  render(){
    console.log(this.state);
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
        <Card.Subtitle className={"commonCardSubTitle_ active"}>Family questionnaire
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ selected"}>Family questionnaire
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active noFontBold _p1001020"}>New Head of Household
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active noFontBold _p1001020"}>New Breastfeeding Woman
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active noFontBold _p1001020"}>New Infant/Child
        </Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_ active noFontBold _p1001020"}>New Infant/Child
      </Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_ active"}>Scheduling your appointment</Card.Subtitle>
      <Card bsPrefix="callCenterWrapper card">
            <Row>
            <Col xl={3}><img
                  src={callCenterLogo}
                  width="60"
                  height="30"
                  className="d-inline-block align-top callCenterImg"
                  alt="React Bootstrap logo"
                />
            </Col>
            <Col xl={9}>
            <Card.Title className={"callCenterWrapperlineOne"}>Need help?</Card.Title>
            <Card.Subtitle className={"callCenterWrapperlineTwo"}>Give us a call at</Card.Subtitle>
            <Card.Subtitle className={"callCenterWrapperlineThree"}>1-800-222-3456</Card.Subtitle>
            </Col>
            </Row>
            </Card>
      </Card>
      </Col>
      <Col xl={7} className={"_rootp0m0"}>
      <Modal show={this.state.flag} onHide={this.handleClose.bind(this)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose.bind(this)}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose.bind(this)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Card bsPrefix="middleNavWrapper">
        <Card.Title className={"titleMain"}>We'll start by determining which members need to be added to the family.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0"}>WIC benefits are for pregnent and postpartum mothers and children
        up to the age of 5 years. Please select the statement(s) below that are true for you</Card.Subtitle>
        <Row className={"membersNewMembersWrapper"}>
          <Col xl={6} className={"_p0"}><Card.Title className={"_left members"}>Members</Card.Title></Col>
          <Col xl={6} className={"_p0"}><Card.Title className={"_right newMember"} onClick={this.handleShow.bind(this)}><span className={"plusIcon"}>+</span> New Members</Card.Title></Col>
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
      <Carousel controls={false} indicators={false}>
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

