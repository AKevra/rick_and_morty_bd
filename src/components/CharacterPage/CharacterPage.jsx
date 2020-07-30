import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../API';

const CharacterPage = () => {

    const rickMortyApi = new Api(); 

    let { id } = useParams();

    const [name, setName] = useState('Rick');
    const [gender, setGender] = useState('Gender');
    const [image, setImage] = useState('Image');
    const [species, setSpecies] = useState('Species');

   useEffect (() => {
      async function getCharacter(id){
        const character = await rickMortyApi.getCharacter(id);
        setName(character.name);
        setGender(character.gender);
        setImage(character.image);
        setSpecies(character.species);
        console.log(character);
       }
       getCharacter(id);
   }, [id, rickMortyApi]);
   return (
    <div className="CharacterPage">
        <h1>{name}</h1>
        <div className="character_block">
            <div>{gender}</div>
            <div><img src={image} alt = {`${name}`}/></div>
            <div>{species}</div>
        </div>
        CharacterPage - {id}
    </div>
   )
    
   
  
}
export default CharacterPage;