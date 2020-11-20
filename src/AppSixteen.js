import './App.css';
import './custom.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotterLogo from './images/footer_logo.svg';
import myWic from './images/myWic.svg';
import banner1 from './images/banner1.png';
import callCenterLogo from './images/call_center.png';
import {Navbar,Nav,Row,Col,Card,Button,Modal,Form,InputGroup,FormControl} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import FamilyMember from './FamilyMembers/FamilyMember';
import Test from './Test';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


class AppSixteen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {flag: false};
  }
  handleClose = () => {
    this.setState({
      flag: !this.state.flag
    });
 }
 ex = () => {
   console.log('ex', this);
 }
 handleShow = () => {
   console.log('handle show')
   this.setState({
    flag: !this.state.flag
  });
 }
  render(){
    console.log(this.state,this);
    const parentPath = this.props.match.url+'/Test';
    console.log(parentPath);
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
        <Card.Subtitle className={"commonCardSubTitle_ active"}>Family members list
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active noFontBold _p1001020"}>Charles Williams
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active selected _p1001020"}>Brenda Williams
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
      <Modal show={this.state.flag} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Card bsPrefix="middleNavWrapper familyMembersListTabs">
        <Card.Title className={"titleMain"}>Brenda Williams</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0 parentGuardian noBorder"}>Parent/Guardian</Card.Subtitle>
        <Nav className={"nestedNav"}>
                <Nav.Item>
                  <Nav.Link href="/home">Basic Information</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-1" className={"active"}>Assistance Programs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="link-2">Proof of Identity</Nav.Link>
                </Nav.Item>
        </Nav>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0 noBorder f400"}>Please check any of the following assistance programs which you currently receive benefits.</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        <Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"Medicaid"}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        Account number
        <Form.Control size="sm" type="text" placeholder="Small text" className={"medicalID"}/>
        </Card.Subtitle>
         <Card.Subtitle className={"commonCardSubTitleCheckbox _left _tleft"}>
        Do you have a proof?
        <div>
        <Form.Check 
        type={"radio"}
        id={"radioYes"}
        label={"Yes"}
        name={"DoHaveProof"}
        className={"formRadio"}
        />
        <Form.Check 
        type={"radio"}
        id={"radioNo"}
        label={"No"}
        name={"DoHaveProof"}
        className={"formRadio"}
        /></div>
        </Card.Subtitle>
        <Row className={"clearBoth"}>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0 noBorder f400"}>Please take a picture of your Medicaid card or Award Letter.</Card.Subtitle>
        </Row>
        <Row className={"clearBoth"}>
        <Button variant="light">Upload picture</Button>
        </Row>
        <Row className={"clearBoth"} xl={12} style={{height: "40px"}}>
        <Row xl={3}>
          <Card.Subtitle className={"imageName"}>DSC_015.png</Card.Subtitle>
        </Row>
        <Row xl={3}>
          <Card.Subtitle className={"RemoveLink"}>Remove</Card.Subtitle>
        </Row>
        <Row xl={6}>
        </Row>
        </Row>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        <Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"SNAP"}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        <Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"TANF"}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left FDPIR borderBottom"}>
        <Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"FDPIR"}
        /></Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        What is the total monthly household income?
        </Form.Label>
        <label>What is the total monthly household income?</label>
        <InputGroup className="mb-2">
        <InputGroup.Prepend>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="inlineFormInputGroup" placeholder="" />
        </InputGroup>
      </Card.Subtitle>
      </Card>
      <div className="continueWrapper">
        <Row xl={12}>
        <Col xl={6}></Col>
        <Col xl={6} className={"_tright"}>
          <Button size="sm" href="login" className={"button save login"}>Save</Button>
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
            height={800}
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

export default AppSixteen;

