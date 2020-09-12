import React from "react";
import { Link } from "react-router-dom";
import './Episode.css';

export default class Episode extends React.Component {
  render() {
    const { name, episodeNumber, episodeData, episodeCreated, id } = this.props;

    return (
      <div className="Episode">
        <div className="titleBlock">
          <p className="name">
              <Link className="nameLink" to={`/episode/${id}`}>
                  {name}
              </Link>
          </p>
                    
        </div>
        <div className="infoBlock">
          <div className="episodeNumberBlock">
              <p className="title">Episode Number</p>
              <p className="location">{episodeNumber}</p>
          </div>
          <div className="Reliaze Block">
              <p className="title">Episode Reliaze at</p>
              <p className="firstEpisode">{episodeData}</p>
          </div>
          <div className="episodeWasAddedBlock">
              <p className="title">Episode was added:</p>
              <p className="firstEpisode">{episodeCreated}</p>
          </div>
        </div>
        
      </div>
    );
  }
}
