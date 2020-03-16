import React from 'react';
import './styles.css';

const Header = ( {name}) => {
    return(
    <div className="header">
        {(name) || 'Header'} 
    </div>
);
};

export default Header;