import React from 'react';
import { useState, useEffect } from "react";
import Api from "../../API";
import { Link } from "react-router-dom";
import './FiltrEpisodes.css';

const FiltrEpisodes = (props) => {
    const { id } = props;
  
    const rickMortyApi = new Api();
  
    const [name, setName] = useState();
  
  
  
  
    useEffect(() => {
      async function getCharacter(id) {
        const episode = await rickMortyApi.getEpisode(id);
        setName(episode.name);
       
      }
  
      getCharacter(id);
    }, [id, rickMortyApi]);
  
    return (
      <li className="FiltrEpisodes">
            <Link className="nameLink" to={`/episode/${id}`}>
                {name}
            </Link> 
    
      </li >
    );
  };
  
  export default FiltrEpisodes;
  