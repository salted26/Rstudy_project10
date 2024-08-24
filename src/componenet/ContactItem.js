import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <div>
            <Row className='contact-item'>
                <Col lg={2}>
                    <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" alt="user" style={{width:70}}/>
                </Col>
                <Col lg={10}>
                    <div><b>{item.name}</b></div>
                    <div>{item.phoneNumber}</div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactItem;