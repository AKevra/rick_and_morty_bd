import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
import setCharactersThunk from '../../actions/setCharectersAction';
import { connect } from 'react-redux';
import  setEpisodesThunk  from '../../actions/setEpisodesAction';


const Nav = (props) => {
   

    return (
        <div className='Nav'>
            <Link onClick={() => props.setCharecters()} to="/characters">Characters</Link>
            <Link onClick={() => props.setEpisodes()} to="/episodes">Episodes</Link>
            <Link to="/locations">Locations</Link>
        </div>
    )
}
const mapDispatchToProps =(dispatch)=> ({
    setCharecters: () => dispatch(setCharactersThunk()),
    setEpisodes: () => dispatch(setEpisodesThunk()),
})
export default connect(null, mapDispatchToProps)(Nav);