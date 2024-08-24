import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";

const ContactForm = () => {
    const [ name, setName ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_CONTACT', payload: {name, phoneNumber}});
    }

    return (
        <div>
            <Form onSubmit={addContact}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(e) => setPhoneNumber(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">등록</Button>
            </Form>
        </div>
    );
};

export default ContactForm;