import React from 'react';
import { NavLink} from 'react-router-dom';


const Header = () => {
   
    return (
        <header className="header">
            <NavLink to="/" className="link" activeClassName="link-BlindActive">Football</NavLink>
        </header>
        
    );
}
export default Header;