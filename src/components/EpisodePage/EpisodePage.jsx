import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const EpisodePage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    
    const [name, setName] = useState();
    const [air_date, setData] = useState();
    const [episode, setEpisode] = useState();
    const [characters, setEpCharacters] = useState([]);

    useEffect(() =>  {
        async function getEpisode(id) {
            const episode = await rickMortyApi.getEpisode(id);
            setName(episode.name);
            setData(episode.air_date);
            setEpisode(episode.episode);
            setEpCharacters(episode.characters);
            

        }

        getEpisode(id);
    }, [id, rickMortyApi]);
    

    

    

    return(
        
        <div className="EpisodePage">
            <h1>{name}</h1>
            <div className="episodeBlock">
                <div>{air_date}</div>
                <div>{episode} </div>
                <ul>
                    {characters[0]}
                </ul>
               
            </div>
        </div>
    );
}

export default EpisodePage;