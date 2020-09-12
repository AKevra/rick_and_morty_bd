import React from "react";
import { connect } from "react-redux";
import Episode from "../Episode";
import Paginator from "../Paginator";
import './EpisodeList.css';

class EpisodesList extends React.Component {
  render() {
    const { episodes } = this.props;
    console.log(episodes);
    const items = episodes.map((item) => {
      return (
        <li className="one_episode" key={item.id}>
          <Episode
            name={item.name}
            episodeNumber={item.episode}
            episodeData={item.air_date}
            episodeCreated={item.created}
            id={item.id}
          />
        </li>
      );
    });
    return (
      <>
        <div className="EpisodesList">
          <h1>Episode List</h1>
          <ul>{items}</ul>
        </div>
        <Paginator />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  episodes: state.episodes,
});

export default connect(mapStateToProps)(EpisodesList);
