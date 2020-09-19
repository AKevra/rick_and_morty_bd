import React from "react";
import { connect } from "react-redux";
import Paginator from "../Paginator";
import Location from "../Location";
import setLocationsThunk from "../../actions/setLocationsThunk";


class LocationList extends React.Component {
  render() {
    const { locations } = this.props;
    const items = locations.map((item) => {
      return (
        <li className="one_location" key={item.id}>
          <Location
            name={item.name}
            locationType={item.type}
            locationDimension={item.dimension}
            locationCreated={item.created}
            id={item.id}
          />
        </li>
      );
    });
    return (
      <>
        <div className="LocationList">
          <h1>Location List</h1>
          <ul>{items}</ul>
        </div>
        <Paginator 
          paginatorType = {setLocationsThunk}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  locations: state.locations,
});

export default connect(mapStateToProps)(LocationList);


