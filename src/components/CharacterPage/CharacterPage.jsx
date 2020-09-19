import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Api from '../../API';
import FiltrEpisodes from '../../components/FiltrEpisodes';
import './CharacterPage.css';

const CharacterPage = () => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    const [name, setName] = useState();
    const [gender, setGender] = useState();
    const [image, setImage] = useState();
    const [species, setSpecies] = useState();
    const [originName, setOriginName] = useState();
    const [episodes, setEpisodes] = useState();

    useEffect(() =>  {
        async function getCharacter(id) {
            const character = await rickMortyApi.getCharacter(id);
            setName(character.name);
            setGender(character.gender);
            setImage(character.image);
            setSpecies(character.species);
            setOriginName(character.origin.name);

            let episodesLinkArr = character.episode.map((item, index) => {
                const arr = item.split("/");
                id = arr[arr.length - 1];
                return < FiltrEpisodes id={id} key={index} />;
            });
              setEpisodes(episodesLinkArr);
        }

        getCharacter(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="CharacterPage">
                <div className="characterInf">
                    <img src={image} alt={name}/>
                    <div className="titleBlock">
                        <p className="name">
                                {name}
                        </p>
                        <span className="species">{species}</span>
                        <span className="gender">{gender}</span>
                        <div className="locationBlock">
                            <p className="title">Current location</p>
                            <p className="location">{originName}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="textBlock">
                    
                    <div className="firstSeenBlock">
                       
                        <div className="firstEpisode">
                        <p className="title">Episodes:</p>
                        <ul>
                            {episodes}
                        </ul>
                        
                        </div>
                    </div>
                </div>




            
        </div>
    );
}

  
  export default CharacterPage;
