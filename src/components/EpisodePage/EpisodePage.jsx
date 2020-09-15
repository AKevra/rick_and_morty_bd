import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Api from '../../API';
import CharactersList from '../CharactersList/CharactersList';
import { connect } from 'react-redux';


const EpisodePage = (characters) => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    
    const [name, setName] = useState();
    const [air_date, setData] = useState();
    const [episode, setEpisode] = useState();
    const [charactersLinks, setEpCharactersLinks] = useState([]);
    const [characterName, setCharacterName]= useState();
       

    

    useEffect(() =>  {
        async function getEpisode(id) {
            const episode = await rickMortyApi.getEpisode(id);
            setName(episode.name);
            setData(episode.air_date);
            setEpisode(episode.episode);
            setEpCharactersLinks(episode.characters);
            

        }

        getEpisode(id);
    }, [id, rickMortyApi]);

    let episodeCharacter = charactersLinks.map((item) => {
        const arr = item.split("/");
        let characterId = arr[arr.length - 1];
        
        return (
            <li className="one_character" key={characterId} >
                <Link  to={`/character/${characterId}`}>
                    <p>Герои </p>
                </Link>    
            </li>
            
        );
    });

    

  
   
    useEffect(() =>  {
       
        async function getCharacter(characterId) {
            const character = await rickMortyApi.getCharacter(characterId);
            console.log(character);
            const result = character.name;
            console.log(result);
        return  result;
    
        }

        getCharacter(id);
    }, [id, rickMortyApi]);

  
    return(
        
        <div className="EpisodePage">
            <h1>{name}</h1>
            <div className="episodeBlock">
                <div>{air_date}</div>
                <div>{episode} </div>
                <ul>
                {episodeCharacter}
                    
                </ul>
            </div>
          
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(EpisodePage);


/**/