import React, { useEffect, useState } from "react"
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "./navbar.css";
const Navbar = () => {
    const [activeItem, setActiveItem] = useState('home');
    
    const handleChange = (e, {name}) =>{
        setActiveItem(name);
    };

    return(
    // <Menu inverted>
    //     <Menu.Item
    //       name='home'
    //       active={activeItem === 'home'}
    //       onClick={handleChange}
    //     />
    //     <Menu.Item
    //       name='messages'
    //       active={activeItem === 'messages'}
    //       onClick={handleChange}
    //     />
    //     <Menu.Item
    //       name='friends'
    //       active={activeItem === 'friends'}
    //       onClick={handleChange}
    //     />
    //     <Menu.Item
    //       name='friends'
    //       active={activeItem === 'friends'}
    //       onClick={handleChange}
    //     />
    //     <Menu.Item
    //       name='friends'
    //       active={activeItem === 'friends'}
    //       onClick={handleChange}
    //     />
    //   </Menu>
        <div className="container">
            <Link className="item" to='/Home'>Home</Link>
            <Link className="item" to='/Home'>About</Link>
            <Link className="item" to='/Home'>Projects</Link>
            <Link className="item" to='/Resume'>Resume</Link>
            <Link className="item" to='/Home'>Contact Me</Link>
        </div>
    );
    
}

export default Navbar;
