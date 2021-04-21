import React from 'react';
import { withRouter } from 'react-router-dom';
import SoundIndexItem from './sound_index_item';

class SoundIndex extends React.Component {
  
  componentWillMount() {
    this.props.fetchPlaylist()
  }

  render() {
    console.log(this.props)
    if(!this.props.playlist) {return null};
    return(
      <div>
        <h2>Sounds</h2>
        {
          this.props.playlist.map( (track, id) => (
            <SoundIndexItem track={track} key={id} fetchTrack={this.props.fetchTrack}/>
          ))
        }
      </div>
    )
  }

}

export default withRouter(SoundIndex);