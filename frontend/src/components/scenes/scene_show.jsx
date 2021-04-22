import React from 'react';

class SceneShow extends React.Component {

  componentDidMount() {
    this.props.fetchScenes()
  } 

  // handleClick() {
  //   this.history.push
  // }

  render() {
    // debugger
    console.log(this.props)
    return (
      <video  
      src={this.props.scenes.video_files.filter(vid => ( vid.quality === "hd"))[0].link} 
      autoPlay muted loop className='vid' type='video/mp4'></video>
      
    )
  }

}

export default SceneShow;