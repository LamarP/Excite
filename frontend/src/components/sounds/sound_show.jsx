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
    console.log(this.props)
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
          src="https://player.vimeo.com/external/370845105.hd.mp4?s=1facf7310d1f043ea079556373d0618003593f2d&profile_id=173&oauth2_token_id=57447761"
                    autoPlay muted loop className='vid' type='video/mp4'>
        </video>

        <h3>hello</h3>
      </div>
    )
  }
}

export default withRouter(SoundShow);