import React from 'react';
import SceneIndexItem from './scene_index_item';

class SceneIndex extends React.Component {


  componentWillMount() {
    this.props.fetchScenes()
  }

  render() {
    console.log(this.props.scenes)
    if(!this.props.scenes) return null;
    return(
      <div className='scene-index'>
        {
          this.props.scenes.map((ele,id) => {
            return <SceneIndexItem key={id} scene={ele} sceneId={id}/>
          })
        }
      </div>
    )
  }

}

export default SceneIndex;