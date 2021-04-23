import React from 'react';
import ExciteIndexItem from './excite_index_item';
export default class ExciteIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchExcites();
    this.props.fetchScenes();
  }


  render() {
    if (!Array.isArray(this.props.scenes.data)) { return null }

    const scenesArr = this.props.scenes.data.map((scene, idx) => {
      return <ExciteIndexItem key={idx} scene={scene} excite={this.props.exciteArr[idx]}/>
    });
    return (
      <div>
        <ul>
          {scenesArr}
        </ul>
      </div>
    )
  }
 
}

