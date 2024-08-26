import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ContactItem = ({item}) => {

    const dispatch = useDispatch();
    let deleteContact = {};
    deleteContact = item;
    const handleDelete = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            dispatch({type: 'DELETE_CONTACT', payload: deleteContact});
            alert("삭제가 완료되었습니다.")
        } else {
            return false;
        }

    }

    return (
        <div>
            <Row className='contact-item'>
                <Col lg={2}>
                    <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" alt="user" style={{width:70}}/>
                </Col>
                <Col lg={8}>
                    <div><b>{item.name}</b></div>
                    <div>{item.phoneNumber}</div>
                </Col>
                <Col lg={2}>
                    <Button variant='warning' onClick={() =>handleDelete()}>삭제</Button>
                </Col>
            </Row>
        </div>
    );
};

export default ContactItem;