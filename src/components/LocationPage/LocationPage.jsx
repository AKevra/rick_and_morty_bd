import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Api from '../../API';
import FiltrCharacters from '../FiltrCharacters';
import './LocationPage.css';

const LocationPage = (characters) => {

    const rickMortyApi = new Api();

    let { id } = useParams();
    
    const [name, setlocationName] = useState();
    const [dimension, setlocationDimension] = useState();
    const [type, setlocationType] = useState();
    const [residents, setLocationResidents] = useState();

    useEffect(() =>  {
        async function getLocation(id) {
            const location = await rickMortyApi.getLocation(id);
            setlocationName(location.name);
            setlocationDimension(location.dimension);
            setlocationType(location.type);
            let charactersLinkArr = location.residents.map((item, index) => {
                const arr = item.split("/");
                id = arr[arr.length - 1];
                return <FiltrCharacters id={id} key={index} />;
              });
              setLocationResidents(charactersLinkArr);
        }
        

        getLocation(id);
    }, [id, rickMortyApi]);
    

    return(
        
        <div className="LocationPage">
            <h1>{name}</h1>
            <div className="infoBlock">
          <div className="locationNumberBlock">
              <p className="title">Location Type</p>
              <p className="location">{type}</p>
          </div>
          <div className="reliaze Block">
              <p className="title">Location Demension</p>
              <p className="firstLocation">{dimension}</p>
          </div>
          <div className="residents Block">
              <p className="title">Location residents</p>
              <div className="residentsLocation">
                  {residents}
                </div>
          </div>
          
        </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
      characters: state.characters,
    };
  };
  
  export default connect(mapStateToProps)(LocationPage);
  

