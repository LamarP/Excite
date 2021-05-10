import React from 'react';
import { Link } from 'react-router-dom';

class SceneIndexItem extends React.Component {


  render() {
    return(
      <div className="scene-index-item">
        <Link to={`/scenes/${this.props.sceneId}`}>
          <figure>
            <img src={this.props.scene.image} width='319' height='240' alt=""/>
          </figure>
        </Link>
      </div>
    )
  }

}

export default SceneIndexItem;