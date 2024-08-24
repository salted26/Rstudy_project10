import React from 'react';
import {Col, Row} from "react-bootstrap";

const ContactItem = ({item}) => {
    return (
        <div>
            <Row>
                <Col lg={1}>
                    <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" alt="user" style={{width:50}}/>
                </Col>
                <Col lg={11}>
                    <div>{item.name}</div>
                    <div>{item.phoneNumber}</div>
                </Col>
            </Row>
        </div>
    );
};

export default ContactItem;