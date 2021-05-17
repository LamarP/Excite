import React from 'react';
import spinner from '../../loader.gif';
class SceneShow extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.props.fetchScenes()
      .then(() => {
      this.setState({ loading: false });
    })
  } 

  handleClick() {
    this.props.history.push('/scenes');
  }

  render() {
    if (this.state.loading) {
      return <img className="spinner" src={spinner} alt="" />
    } 
    return (
      <video onClick={this.handleClick} 
      src={this.props.scenes.video_files.filter(vid => ( vid.quality === "hd"))[0].link} 
      autoPlay muted loop className='vid' type='video/mp4'></video>
      
    )
  }

}

export default SceneShow;