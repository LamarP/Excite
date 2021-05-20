import React from 'react';
import { withRouter} from 'react-router-dom';
// import ReactAudioPlayer from 'react-audio-player';

class SoundsIndexItem extends React.Component {
  
  

  render() {
    console.log(this.props)
    return (
       <li className="sound-index-item" onClick={() => this.props.history.push(`/sounds/sound/${this.props.soundId}`)}>
      
        
        {/* <Link to={`/sounds/sound/${this.props.soundId}`}>Song</Link> */}
      </li>
      )
    }
}

export default withRouter(SoundsIndexItem);