import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const PageFilter = ({pages, pageNumber, onClick}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);

    const pagesArray = [];

    for(let i = 1; i <= pages; i++) {
        pagesArray.push(i);
    }

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropDownHeading> Click Here To Explore Rick and Morty's World: </DropDownHeading>
            <DropdownToggle caret>
                {` ${pageNumber}`}
            </DropdownToggle>
            <DropdownMenu>
                {pagesArray.map((page) => {
                    return <DropdownItem key={`key${page}`}onClick={onClick}>{page}</DropdownItem>  
                })}
            </DropdownMenu>
        </Dropdown>

    )
}

export default PageFilter;

const DropDownHeading = styled.h6`
    display: inline-block;
    color: #24325FFF;
`;

