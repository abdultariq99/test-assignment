import React from 'react';

import dropdownIcon from '/src/assets/dropdownicon.svg';

export function NavDropdownLink(props) {
    return (
        <>
            <div className="Navlink-wrapper">
                <div className="navlink-upper">
                    <div className="link-left">
                        <img src={props.img} alt="Navlink icon" />
                        <p>{props.heading}</p>
                    </div>
                    <div className="link-right">
                        <div className="dropdown">
                            <button className="dropbtn">{props.btn} <span><img src={dropdownIcon} alt="Dropdown icon" /></span></button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navlink-lower">
                    <p>{props.subheading}</p>
                </div>
            </div>
        </>
    );
}

