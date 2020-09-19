import React from "react";
import { Link } from "react-router-dom";
import './Location.css';


export default class Location extends React.Component {
  render() {
    const { name, locationType, locationDimension, locationCreated, id } = this.props;
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
          <div className="locationNumberBlock">
              <p className="title">Location Type</p>
              <p className="location">{locationType}</p>
          </div>
          <div className="reliaze Block">
              <p className="title">Location Demension</p>
              <p className="firstLocation">{locationDimension}</p>
          </div>
          <div className="locationWasAddedBlock">
              <p className="title">Location was added:</p>
              <p className="firstLocation">{locationCreated}</p>
          </div>
        </div>
        
      </div>
    );
  }
}