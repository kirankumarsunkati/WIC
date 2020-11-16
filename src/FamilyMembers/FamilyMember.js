import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import image from './../download.svg';
import './familyMember.css';

class FamilyMember extends React.Component{
    render(){
        return(
            <div className="familyMembersWrapper borderBottom">
                <Row>
                    <Col xl={1} className={"familyMemberIconWrapper _tleft _rootp0m0"}>
                    <Image src={image} className={"familyMemberIcon"}  width='25' height='25' roundedCircle />
                    </Col>
                    <Col xl={8} className={"familyMemberIconWrapperName _tleft"}>
                    <Card>
                    <Card.Title className={"_tleft commonFont name"}>New Head of HouseHold</Card.Title>
                    <Card.Subtitle className={"commonCardSubTitle _tleft commonFont role"}>Parent/Guardian</Card.Subtitle>
                    </Card>
                    </Col>
                    <Col xl={3} className={"commonFont begin _tright"}><a>Begin</a></Col>
                </Row>
            </div>
        )
    }
}
export default FamilyMember;