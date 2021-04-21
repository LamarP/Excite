import React from 'react';
import { Link } from 'react-router-dom';
//import eye from '../../public/eye.mp3';

class SoundIndexItem extends React.Component {

  componentDidMount() {
    // debugger
    
      this.props.fetchTrack()
  
  }

  render() {
    // debugger
    console.log(this.props)
    if(!this.props.track) {return null};
    // const song = this.props.fetchTrack
    return(
      <div>

        {/* <button onClick={() => (this.props.fetchTrack(this.props.track.id))}>{this.props.track.name}</button> */}

        <audio type='audio/mpeg' controls></audio>
        {/* <iframe src={this.props.track.external_urls.spotify} ></iframe> */}
      </div>
    )
  }


}

export default SoundIndexItem;
