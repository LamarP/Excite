import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

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
          controls
          autoPlay
          onPlay={document.addEventListener('click', this.handleClick)}
        />
      </div>
    )
  }
}

export default SoundShow;