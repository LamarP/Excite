import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ExciteShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSound(this.props.sound.slice(0, -4))
    }

    handleClick() {
        this.props.history.push('/explore');
    }

    render() {
       if(!this.props.sounds.config) return null;
       console.log(this.props)
       return(
           <div >
               <video onClick={this.handleClick} src={this.props.scene.video_files.filter(vid => ( vid.quality === "hd"))[0].link} autoPlay muted loop className='vid' type='video/mp4'></video>
                <ReactAudioPlayer
          src={this.props.sounds.config.url}
          id="audio-player"
          volume={0.1}
          autoPlay
        />
           </div>
       )
    }
}

export default ExciteShow;