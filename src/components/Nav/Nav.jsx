import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import setCharactersThunk from '../../actions/setCharectersAction';
import { connect } from 'react-redux';


const Nav = (props) => {
   

    return (
        <div className='Nav'>
            <Link onClick={() => props.setCharecters()} to="/characters">Characters</Link>
            <Link to="/episodes">Episodes</Link>
            <Link to="/locations">Locations</Link>
        </div>
    )
}
const mapDispatchToProps =(dispatch)=> ({
    setCharecters: () => dispatch(setCharactersThunk()),
})
export default connect(null, mapDispatchToProps)(Nav);