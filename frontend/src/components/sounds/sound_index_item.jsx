import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class SoundIndexItem extends React.Component {

  // componentDidMount() {
  //   this.props.fetchTrack(this.props.track.id)
  // }

  render() {
    // console.log(this.props)
    if(!this.props.track) {return null};
    return(
      <div>
        <p>{this.props.track.name}</p>
        <audio src={this.props.track.href} controls></audio>
      </div>
    )
  }


}

export default withRouter(SoundIndexItem);
