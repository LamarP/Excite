import React from 'react';

class SceneIndexItem extends React.Component {


  render() {
    console.log(this.props.scene)
    return(
      <div>
        {/* <p>Index Item</p> */}
        {/* <img src={this.props.scene.image} alt=""/> */}
        <video width="320" height="240"  
        src={this.props.scene.video_files.filter(vid => (
    vid.quality === "hd"))[0].link} controls loop></video> 
      </div>
    )
  }

}

export default SceneIndexItem;