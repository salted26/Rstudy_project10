import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";

const SearchBox = () => {
    const [ searchKeyword, setSearchKeyword ] = useState('');
    const dispatch = useDispatch();
    const searchContact = (e) => {
        e.preventDefault();
        dispatch({type:"SEARCH_CONTACT", payload: {searchKeyword}})
    }

    return (
        <div>
            <Form onSubmit={ searchContact }>
                <Row>
                    <Col lg={10}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e)=>setSearchKeyword(e.target.value)}/>
                    </Form.Group>
                    </Col>
                    <Col lg={2} className='search-btn'>
                        <Button variant="primary" type="submit">검색</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SearchBox;