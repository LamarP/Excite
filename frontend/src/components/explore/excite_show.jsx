import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import spinner from '../../loader.gif';
class ExciteShow extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        loading: false
      }
        this.handleClick = this.handleClick.bind(this);
    }

  componentDidMount() {
      this.setState({ loading: true })
      this.props.fetchSound(this.props.excite.sounds[0].slice(0, -4))
      .then(() => {
      this.setState({ loading: false})
    })
    }

    handleClick() {
        // this.props.history.push('/explore');
        this.props.history.goBack();
    }

    render() {
      //  if(!this.props.sounds.config) return null;
      //  if(!this.props.excite) return null;
      if (this.state.loading) { return <img className="spinner" src={spinner} alt="" /> }
      else if (this.props.excite && this.props.sounds.config) {

        return(
            <div>
                <video onClick={this.handleClick} src={this.props.excite.sceneUrl} autoPlay muted loop className='vid' type='video/mp4'></video>
                <ReactAudioPlayer
                     src={this.props.sounds.config.url}
                     id="audio-player"
                     volume={0.1}
                     autoPlay
                 />
            </div>
        )
      } else {
        return null;
      }
    }
}

export default ExciteShow;