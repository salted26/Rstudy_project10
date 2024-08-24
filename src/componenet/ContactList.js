import React, {useCallback, useEffect, useState} from 'react';
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";

const ContactList = () => {
    const { contactList, searchKeyword } = useSelector((state) => state);
    const [ searchList, setSearchList ] = useState([]);

    const searchContact = useCallback( () => {
        if(searchKeyword !== ''){
            const list = contactList.filter(contact => contact.name.includes(searchKeyword));
            setSearchList(list);
        } else {
            setSearchList(contactList);
        }
    }, [searchKeyword, setSearchList, contactList])

    useEffect(() => {
        searchContact();
    }, [searchContact]);

    return (
        <div>
            <SearchBox />
            <div>Count : {searchList?.length}</div>
            <div>
                {searchList?.map((item, index) => (
                    <ContactItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;