import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const SearchBox = () => {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    const searchContact = (e) => {
        e.preventDefault();
        dispatch({type:"SEARCH_CONTACT", payload: {search}})
    }

    return (
        <div>
            <Form onSubmit={ searchContact }>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={(e)=>setSearch(e.target.value)}/>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">검색</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default SearchBox;