import React from "react";
import { useState, useEffect } from "react";
import Api from "../../API";
import { Link } from "react-router-dom";
import "./FiltrCharacters.css";

const FiltrCharacters = (props) => {
  const { id } = props;

  const rickMortyApi = new Api();

  const [name, setName] = useState();
  const [image, setImage] = useState();



  useEffect(() => {
    async function getCharacter(id) {
      const character = await rickMortyApi.getCharacter(id);
      setName(character.name);
      setImage(character.image);
    }

    getCharacter(id);
  }, [id, rickMortyApi]);

  return (
    <div className="FiltrCharacters">
        <Link to={`../character/${id}`}>
          {name}
         
        </Link>
        <div className="imgBlock">
          <img src={image} alt={name} />
        </div>
         
    </div >
  );
};

export default FiltrCharacters;
