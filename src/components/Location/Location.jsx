import React from "react";
import { Link } from "react-router-dom";
import './Location.css';


export default class Location extends React.Component {
  render() {
    const { name, locationType, locationDimension, locationCreated, id } = this.props;
    console.log(locationType);
    return (
      <div className="Location">
        <div className="titleBlock">
          <p className="name">
              <Link className="nameLink" to={`/location/${id}`}>
                  {name}
              </Link>
          </p>
                    
        </div>
        <div className="infoBlock">
          <div className="LocationNumberBlock">
              <p className="title">Location Type</p>
              <p className="location">{locationType}</p>
          </div>
          <div className="Reliaze Block">
              <p className="title">Location Demension</p>
              <p className="firstLocation">{locationDimension}</p>
          </div>
          <div className="LocationWasAddedBlock">
              <p className="title">Location was added:</p>
              <p className="firstLocation">{locationCreated}</p>
          </div>
        </div>
        
      </div>
    );
  }
}