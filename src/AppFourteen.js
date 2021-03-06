import './App.css';

import './custom.css';
import React from 'react';
import banner1 from './images/banner1.png';
import callCenterLogo from './images/call_center.png';
import myWic from './images/myWic.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import fotterLogo from './images/footer_logo.svg';
import {Navbar,Nav,Row,Col,Card,Button,Form,Dropdown,ButtonGroup,DropdownButton} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { createStore} from 'redux';
import {connect} from 'react-redux';


class AppFourteen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {childrenSelect: false};
  }
  toggleSelect = () => {
    console.log('toggleSelect');
    this.setState({childrenSelect: !this.state.childrenSelect})
    this.props.dispatch({type: "INCREMENT",payload:10});
    
  }
  renderSelect = () => {
    return this.state.childrenSelect == true ? <div>
    <Card.Subtitle className={"commonCardSubTitle_ noBorder active"}>How many children would you like to add?
    </Card.Subtitle>
    
    <select className={"_left"}>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
    </select>
    </div> : " "
  }
  componentWillReceiveProps (nextProps){
    console.log(this.props,nextProps)
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log(this.props,nextProps)
    return true
  }
  render(){
    console.log(this);
    return (
      <div className="App familyMembersWrapper">
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
      <Col xl={3} className={"leftPanel _p0 _rootp0m0"}>
      <Card bsPrefix="leftNavWrapper">
        <Card.Title className={"leftTitleMain"}>Welcome to WIC! </Card.Title>
        <Card.Subtitle className={"commonCardSubTitle letsStarted"}>Let's get started.</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitle_ active"}>Family questionnaire
        </Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Family members list</Card.Subtitle>
      <Card.Subtitle className={"commonCardSubTitle_"}>Scheduling your appointment</Card.Subtitle>
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
      <Col xl={7} className={"middlePanel _p0 _m0 _rootp0m0"}>
        {this.props.count}
      <Card bsPrefix="middleNavWrapper">
        <Card.Title className={"titleMain"}>We'll start by determining which members need to be added to the family.</Card.Title>
        <Card.Subtitle className={"commonCardSubTitle_ _p0 _m0"}>WIC benefits are for pregnent and postpartum mothers and children
        up to the age of 5 years. Please select the statement(s) below that are true for you</Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}>
        <Form.Check 
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
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}><Form.Check 
        type={"checkbox"}
        id={"radio"}
        onClick={this.toggleSelect}
        label={"There is a child in the home between 1 and 5"}
        />
        {this.renderSelect()}
        
        </Card.Subtitle>
        <Card.Subtitle className={"commonCardSubTitleCheckbox _left"}><Form.Check 
        type={"checkbox"}
        id={"radio"}
        label={"I am a foster parent or legal guardian of a child less than 5 years old."}
        /></Card.Subtitle>
      </Card>
      <div className="continueWrapper">
        <Row xl={12}>
        <Col xl={6}></Col>
        <Col xl={6} className={"_tright"}>
          <Button size="sm" href="15" className={"button continue login"}>Continue</Button>
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

const mapStateToProps = state => ({
  count : state.result
})
export default connect(mapStateToProps)(AppFourteen);

