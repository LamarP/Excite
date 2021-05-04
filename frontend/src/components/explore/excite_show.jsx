import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
// import {withRouter} from 'react-router-dom';
class ExciteShow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchSound(this.props.sound.slice(0, -4))
    }

    handleClick() {
        //this.props.history.goBack();
        // console.log('hello')
        this.props.history.push('/explore');
        // console.log('bye')
    }

    render() {
        // console.log(this.props)
       if(!this.props.sounds.config) return null;
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