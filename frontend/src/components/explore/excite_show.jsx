import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
export default class ExciteShow extends React.Component {
    componentDidMount() {
        this.props.fetchSound(this.props.sound.slice(0, -4))
    }
    render() {
        console.log(this.props)
       if(!this.props.sounds.config) return null;
       return(
           <div>
               <video src={this.props.scene.video_files.filter(vid => ( vid.quality === "hd"))[0].link} autoPlay muted loop className='vid' type='video/mp4'></video>
                <ReactAudioPlayer
          src={this.props.sounds.config.url}
          id="audio-player"
          
          autoPlay
          onPlay={document.addEventListener('click', this.handleClick)}
        />
           </div>
       )
    }
}