import React from 'react';

class SceneShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchScenes()
  } 

  handleClick() {
    this.props.history.push('/scenes');
  }

  render() {
    return (
      <video onClick={this.handleClick} 
      src={this.props.scenes.video_files.filter(vid => ( vid.quality === "hd"))[0].link} 
      autoPlay muted loop className='vid' type='video/mp4'></video>
      
    )
  }

}

export default SceneShow;