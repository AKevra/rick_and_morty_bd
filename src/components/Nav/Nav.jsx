import React from 'react';
import {Link} from 'react-router-dom';
//import './Nav.css';
import styles from './Nav.style';

const Nav = () => {
    const classes = styles();

    return (
        <div className={`Nav ${classes.Nav}`}>
            <Link to="/characters">Characters</Link>
            <Link to="/episodes">Episodes</Link>
            <Link to="/locations">Locations</Link>
        </div>
    )
}
export default Nav;