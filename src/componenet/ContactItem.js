import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ContactItem = ({item}) => {

    const [ edit, setEdit ] = useState(false)
    const [ name, setName] = useState('')
    const [ phoneNumber, setPhoneNumber] = useState(0)
    const dispatch = useDispatch();

    let deleteContact = {};
    let editContact = {};
    deleteContact = item;

    const handleDelete = async () => {
        if(window.confirm("정말 삭제하시겠습니까?")){
            dispatch({type: 'DELETE_CONTACT', payload: deleteContact});
            alert("삭제가 완료되었습니다.")
        } else {
            return false;
        }
    }

    const handleEditInput = () => {
        setEdit(true);
    }

    const handleEdit = () => {
        console.log(name, phoneNumber)
        editContact = {name, phoneNumber}
        dispatch({type: ('DELETE_CONTACT'), payload: deleteContact});
        dispatch({type:"ADD_CONTACT", payload: editContact});
        setEdit(false);
    }

    return (
        <div>
            <Row className='contact-item'>
                { edit === false ?
                <div className="items">
                    <Col lg={2}>
                        <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg" alt="user" style={{width:70}}/>
                    </Col>
                    <Col lg={8}>
                        <div><b>{item.name}</b></div>
                        <div>{item.phoneNumber}</div>
                    </Col>
                    <Col lg={2}>
                        <Button variant="info" onClick={()=>handleEditInput()}>수정</Button>
                        <Button variant='warning' onClick={() =>handleDelete()}>삭제</Button>
                    </Col>
                </div>
                    : <>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>이름</Form.Label>
                            <Form.Control type="text" defaultValue={item.name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>연락처</Form.Label>
                            <Form.Control type="number" defaultValue={item.phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                            <Button variant="info" onClick={()=>handleEdit()}>수정</Button>
                        </Form.Group>
                    </>
                }
            </Row>
        </div>
    );
};

export default ContactItem;