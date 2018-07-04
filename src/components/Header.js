import React from 'react';

const Header = (props) => (
    <div>
        <h1> {props.title}</h1>
    </div>
)

Header.defaultProps = {
    title: 'Camp Registration Form'
}

export default Header;