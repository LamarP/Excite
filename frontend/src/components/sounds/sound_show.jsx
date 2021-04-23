import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Link, withRouter } from 'react-router-dom';

class SoundShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      title: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   console.log('clicked')
  }
  componentDidMount() {
    if(this.props.sound) {
      this.props.fetchSound(this.props.sound.slice(0, -4))
      this.setState({title: this.props.sound.slice(0, -4)})
    }
  
  }

  render() {
    if(!this.props.sounds.config) {return null}

    return (
      <div>
        <h3>{this.state.title}</h3>
        <ReactAudioPlayer
          src={this.props.sounds.config.url}
          id="audio-player"
          
          autoPlay
          onPlay={document.addEventListener('click', this.handleClick)}
        />
        
        <video onClick={() => this.props.history.push('/sounds')}
          src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=172&oauth2_token_id=57447761"
                    autoPlay muted loop className='vid' type='video/mp4'>
        </video>

      </div>
    )
  }
}

export default withRouter(SoundShow);