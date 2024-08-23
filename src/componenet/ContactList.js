import React from 'react';

const ContactList = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="email" placeholder="이름을 입력해주세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phoneNumber">
                    <Form.Label>연락처</Form.Label>
                    <Form.Control type="email" placeholder="전화번호를 입력해주세요" />
                </Form.Group>
            </Form>
        </div>
    );
};

export default ContactList;