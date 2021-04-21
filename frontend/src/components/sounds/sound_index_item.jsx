import React from 'react';
import { Link } from 'react-router-dom';

class SoundIndexItem extends React.Component {

  // componentDidMount() {
  //   // debugger
  //   if(this.props.track.id) {
  //   this.props.fetchTrack(this.props.track.id)
  //   }
  // }

  render() {
    // debugger
    console.log(this.props)
    if(!this.props.track) {return null};
    // const song = this.props.fetchTrack
    return(
      <div>

        <button onClick={() => (this.props.fetchTrack(this.props.track.id))}>{this.props.track.name}</button>

        {/* <audio type='audio/mpeg' src={this.props.track.href} controls></audio> */}
        {/* <iframe src={this.props.track.external_urls.spotify} ></iframe> */}
      </div>
    )
  }


}

export default SoundIndexItem;
