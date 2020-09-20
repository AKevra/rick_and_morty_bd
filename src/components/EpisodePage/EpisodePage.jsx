import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import Api from '../../API';
import FiltrCharacters from '../FiltrCharacters';
import './EpisodePage.css';
import { connect } from 'react-redux';


const EpisodePage = (characters) => {
  const rickMortyApi = new Api();

  let { id } = useParams();

  const [name, setName] = useState();
  const [air_date, setData] = useState();
  const [episodeNumber, setEpisode] = useState();
  const [charactersLinks, setCharacters] = useState([]);

  useEffect(() => {
    async function getEpisode(id) {
      const episode = await rickMortyApi.getEpisode(id);
      setName(episode.name);
      setData(episode.air_date);
      setEpisode(episode.episode);
      let charactersLinkArr = episode.characters.map((item, index) => {
        const arr = item.split("/");
        id = arr[arr.length - 1];
        return <FiltrCharacters id={id} key={index} />;
      });
      setCharacters(charactersLinkArr);
    }

    getEpisode(id);
  }, [id, rickMortyApi]);

  return (
    <div className="EpisodePage">
      <div className="titleBlock">
        <h1 className="name">{name}</h1>
        <div className="episodeBlock">
          <p className="title">Air data:</p>
          <span className="inf">{air_date}</span>

          <p className="title">Episode number:</p>
          <p className="inf">{episodeNumber}</p>
        </div>
        <div className="episodeCharactersBlock">
             <p className="title">Characters from Episode:</p>
             <ul>
             {charactersLinks}
             </ul>
            
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  };
};

export default connect(mapStateToProps)(EpisodePage);


/**/