import React from 'react';
import { Link } from 'react-router-dom';

class SceneIndexItem extends React.Component {


  render() {
    console.log(this.props.scene)
    return(
      <div>
        <Link to={`/scenes/${this.props.sceneId}`}>
          <figure>
            <img src={this.props.scene.image} width='360' height='240' alt=""/>
          </figure>
        </Link>
        {/* <video width="320" height="240"  
        src={this.props.scene.video_files.filter(vid => ( vid.quality === "hd"))[0].link} 
        autoPlay muted loop className='vid' type='video/mp4'></video> */}
      </div>
    )
  }

}

export default SceneIndexItem;