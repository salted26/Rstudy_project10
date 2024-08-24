import React, {useEffect, useState} from 'react';
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import {useSelector} from "react-redux";

const ContactList = () => {
    const { contactList } = useSelector(state => state);

    return (
        <div>
            <SearchBox />
            <div>
                {contactList?.map((item, index) => (
                    <ContactItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;