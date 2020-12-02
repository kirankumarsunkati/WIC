import './App.css';

import './custom.css';
import React from 'react';
import myWic from './images/myWic.svg';
import mobileIcon from './images/mobile_icon.svg';
import rocketIcon from './images/rocket_icon.svg';
import appIcon from './images/app_icon.svg';
import testimonialIcon from './images/testimonial@2x.png';
import fotterLogo from './images/footer_logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Row,Col,Image,Card,Button,Overlay,Popover} from 'react-bootstrap';


class AppSeventeen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {flag:false};
    this.myRef = React.createRef();
  }
  toggleSettings = () => {
    console.log('a')
    this.setState({flag:!this.state.flag});
  }
    render(){
      const {flag} = this.state;
      console.log(flag,this.myRef.current);
        return(
            <div className="App familyMembersWrapper">
              <Overlay
                show={flag}
                target={this.myRef.current}
                placement="bottom"
                container={this.myRef.current}
                containerPadding={20}
              >
                <Popover id="popover-contained">
                  <Popover.Title as="h3" className="title">Settings</Popover.Title>
                  <Popover.Content>
                    <Popover.Title className="Logout commonPop _left clearboth">Logout</Popover.Title>
                    <Popover.Title className="Privacy commonPop _left clearboth">Privacy Policy</Popover.Title>
                    <Popover.Title className="Terms commonPop _left clearboth">Terms & Conditions</Popover.Title>
                  </Popover.Content>
                </Popover>
              </Overlay>
              <Navbar bg="dark-new" variant="dark-new">
                <Navbar.Brand href="#home"><img
                src={myWic}
                width="60"
                height="30"
                className="d-inline-block align-top mywic"
                alt=""
              /></Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="#about"><Button variant="primary" className={"buttonSummary"}>Summary</Button></Nav.Link>
                  <Nav.Link href="#faq"><Button variant="primary" className={"buttonSummary buttonSettings"}>Settings</Button></Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#signin">Logout</Nav.Link>
                </Nav>
              </Navbar>
              <Row className="familyWrapperTopNav">
                  <Col xl={3}>
                    <Image src={testimonialIcon} className={"familyHeaderWrapper"} roundedCircle />
                    <Card>
                      <Card.Title className={"familyWrapperTitle"}>Williams Family</Card.Title>
                    </Card>
                  </Col>
                  <Col xl={8}>

                  </Col>
                  <Col xl={1} className="iconsWrapper">
                    <div className="bellIconWrapper">
                      <svg width="2em" height="2em" viewBox="0 0 30 30" className="bi bi-bell" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                        <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                      </svg><span className="notificationCount">1</span>
                  </div>
                  
                  <div className="settingIconWrapper" onClick={this.toggleSettings} ref={this.myRef}>
                  <svg width="2em" height="2em" viewBox="0 0 30 30" className="bi bi-gear-fill" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 0 0-5.86 2.929 2.929 0 0 0 0 5.858z"/>
                  </svg>
                  </div>
                  </Col>
              </Row>
              <Row className="threePartsGridWrapper">
                  
                  <Col xl={4}>
                    <div className="threePartsGridWrapperOne">
                      <Card className="scheduleAppointmentWrapper">
                        <Row>
                          <Col xl={11}>
                              <Card.Title className={"scheduleAppointments"}>Scheduled Appointments</Card.Title>
                          </Col>
                          <Col xl={1} className={"plusIconCircle plusIconHighlight"}>+</Col>
                        </Row>
                      </Card>
                      <Card className="BenefitsWrapper">
                          <Row>
                          <Col xl={11}>
                          <Card.Title className={"benefitsTextOne"}>Wedmesday, June 11th @ 3:00PM</Card.Title>
                          <Card.Title className={"benefitsTextTwo"}>Regional Clinic Greater Kansas City Area</Card.Title>
                          </Col>
                          <Col xl={1} className={"righIcon"}> > </Col>
                          </Row>
                          <Row>
                            <Col xl={3}>
                              <Button className={"appoitmentWrapperCallMap"}>Call</Button>
                            </Col>
                            <Col xl={3}>
                            <Button className={"appoitmentWrapperCallMap"}>Map</Button>
                            </Col>
                            <Col xl={6}></Col>  
                          </Row>
                      </Card>
                      </div>
                    <div className="BenefitsWrapperYellow">
                    <Card>
                        <Row>
                        <Col xl={11}>
                        <Card.Title className={"benefitsTextOne"}>Benefits</Card.Title>
                        </Col>
                        </Row>
                        <Row>
                          <Col xl={11}>
                          <Card.Title className={"threeMembers"}>3 Members</Card.Title>
                          </Col>
                          <Col xl={1} className={"righIcon"}> > </Col>
                        </Row>
                    </Card>
                    </div>
                  </Col>
                  <Col xl={4} className="threePartsGridWrapperTwo">
                      <Card className="membersWrapper">
                      <Row>
                        <Col xl={11} className="HeaderLeft">Members</Col>
                        <Col xl={1} className={"plusIconCircle plusIconGrey"}>+</Col>
                      </Row>
                      <Row className={"eachRowFamilyMembers"}>
                        <Col xl={2}>
                        <Image src={testimonialIcon} className={"familyHeaderWrapper membersRounded"} roundedCircle />
                        </Col>
                        <Col xl={6}>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                            <Card.Title className={"membersWrapperNameTwo"}>Head of Household</Card.Title>
                          </Card>
                        </Col>
                        <Col xl={3}>
                          <Card className="membersWrapper _left">
                            <Card.Title className={"membersWrappeExpiresrOne"}>Expires</Card.Title>
                            <Card.Title className={"membersWrappeExpiresrOne"}>6/15/71</Card.Title>
                          </Card>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperOne tickIcon"}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="#4DBD76" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </Card.Title>
                            
                          </Card>
                        </Col>
                        <Col xl={1} className={"righIcon"}> > </Col>
                      </Row>
                      <Row className={"eachRowFamilyMembers"}>
                        <Col xl={2}>
                        <Image src={testimonialIcon} className={"familyHeaderWrapper membersRounded"} roundedCircle />
                        </Col>
                        <Col xl={6}>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                            <Card.Title className={"membersWrapperNameTwo"}>Head of Household</Card.Title>
                          </Card>
                        </Col>
                        <Col xl={3}>
                          <Card className="membersWrapper _left">
                            <Card.Title className={"membersWrappeExpiresrOne"}>Expires</Card.Title>
                            <Card.Title className={"membersWrappeExpiresrOne"}>6/15/71</Card.Title>
                          </Card>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperOne tickIcon"}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="#4DBD76" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </Card.Title>
                            
                          </Card>
                        </Col>
                        <Col xl={1} className={"righIcon"}> > </Col>
                      </Row>
                      <Row className={"eachRowFamilyMembers"}>
                        <Col xl={2}>
                        <Image src={testimonialIcon} className={"familyHeaderWrapper membersRounded"} roundedCircle />
                        </Col>
                        <Col xl={6}>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                            <Card.Title className={"membersWrapperNameTwo"}>Head of Household</Card.Title>
                          </Card>
                        </Col>
                        <Col xl={3}>
                          <Card className="membersWrapper _left">
                            <Card.Title className={"membersWrappeExpiresrOne"}>Expires</Card.Title>
                            <Card.Title className={"membersWrappeExpiresrOne"}>6/15/71</Card.Title>
                          </Card>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperOne tickIcon"}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="#4DBD76" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </Card.Title>
                            
                          </Card>
                        </Col>
                        <Col xl={1} className={"righIcon"}> > </Col>
                      </Row>
                      <Row className={"eachRowFamilyMembers"}>
                        <Col xl={2}>
                        <Image src={testimonialIcon} className={"familyHeaderWrapper membersRounded"} roundedCircle />
                        </Col>
                        <Col xl={6}>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                            <Card.Title className={"membersWrapperNameTwo"}>Head of Household</Card.Title>
                          </Card>
                        </Col>
                        <Col xl={3}>
                          <Card className="membersWrapper _left">
                            <Card.Title className={"membersWrappeExpiresrOne"}>Expires</Card.Title>
                            <Card.Title className={"membersWrappeExpiresrOne"}>6/15/71</Card.Title>
                          </Card>
                          <Card className="membersWrapper">
                            <Card.Title className={"membersWrapperOne tickIcon"}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check-circle-fill" fill="#4DBD76" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            </Card.Title>
                            
                          </Card>
                        </Col>
                        <Col xl={1} className={"righIcon"}> > </Col>
                      </Row>
                      </Card>
                  </Col>
                  <Col xl={4} className="threePartsGridWrapperThree">
                      <Card className="membersWrapper">
                          <Row>
                            <Col xl={11} className="HeaderLeft">Family</Col>
                          </Row>
                          <Row className={"eachRowFamilyMembers"}>
                            <Col xl={8}>
                              <Card className="membersWrapper">
                                <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                              </Card>
                            </Col>
                            <Col xl={3} className={"beginText"}> Begin </Col>
                            <Col xl={1} className={"righIcon"}> > </Col>
                          </Row>
                          <Row className={"eachRowFamilyMembers"}>
                            <Col xl={8}>
                              <Card className="membersWrapper">
                                <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                              </Card>
                            </Col>
                            <Col xl={3} className={"beginText"}> 0 Items </Col>
                            <Col xl={1} className={"righIcon"}> > </Col>
                          </Row>
                          <Row className={"eachRowFamilyMembers"}>
                            <Col xl={8}>
                              <Card className="membersWrapper">
                                <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                              </Card>
                            </Col>
                            <Col xl={3} className={"beginText"}> Begin </Col>
                            <Col xl={1} className={"righIcon"}> > </Col>
                          </Row>
                          <Row className={"eachRowFamilyMembers"}>
                            <Col xl={8}>
                              <Card className="membersWrapper">
                                <Card.Title className={"membersWrapperNameOne"}>Charles Williams</Card.Title>
                              </Card>
                            </Col>
                            <Col xl={3} className={"beginText"}> Begin </Col>
                            <Col xl={1} className={"righIcon"}> > </Col>
                          </Row>
                      </Card>
                  </Col>
              </Row>
      <Row >
        <div className="gridWrapper">
            <div className="eachGrid">
            <Row>
            <Col xl={3}>
              <img
              src={mobileIcon}
              width="31"
              height="59"
              className="d-inline-block align-center commonImageLogo"
              alt=""
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
              src={appIcon}
              width="44"
              height="36"
              className="d-inline-block align-center commonImageLogo"
              alt=""
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
              src={rocketIcon}
              width="43"
              height="43"
              className="d-inline-block align-center commonImageLogo"
              alt=""
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
    </div>
        )
    }
}
export default AppSeventeen;