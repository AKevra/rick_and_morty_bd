import React from 'react';
import './MainPage.css';
import RickMorty from '../../img/RickMorty.jpg';
const MainPage = () => {
    return (
        <div className="MainPage">
           <img src={RickMorty} alt="RM"/>
        </div>

    )
}
export default MainPage;