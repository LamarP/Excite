import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { withRouter } from 'react-router-dom';
import spinner from '../../loader.gif';

class SoundShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      loading: false
    }

  }

  componentDidMount() {
    this.setState({ loading: true})
    if(this.props.sound) {
      this.props.fetchSound(this.props.sound.slice(0, -4))
        .then(() => {
          this.setState({
            loading: false
          })
      })
    }
  
  }

  render() {
    if (this.state.loading) {
      return <img className="spinner" src={spinner} alt="" />
    } else if (this.props.sounds.config) {

    return (
      <div>
        <ReactAudioPlayer
          src={this.props.sounds.config.url}
          id="audio-player"
          
          autoPlay
        />
        
        <video onClick={() => this.props.history.push('/sounds')}
          // src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=172&oauth2_token_id=57447761"
          src='https://player.vimeo.com/external/370467553.sd.mp4?s=96de8b923370fb7fa8616d4e0b74eaf3fac9e576&profile_id=165&oauth2_token_id=57447761'
          autoPlay muted loop className='vid' type='video/mp4'>
        </video>

      </div>
    )
    } else {
      return null;
    }
  }

}

export default withRouter(SoundShow);