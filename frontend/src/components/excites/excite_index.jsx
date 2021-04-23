import React from 'react';
import ExciteIndexItem from './excite_index_item';
export default class ExciteIndex extends React.Component {
  
  componentDidMount() {
    this.props.fetchExcites();
    
  }

  render() {
    console.log(this.props);
    if (!this.props.exciteArr) { return null }
    
    const thumbnails = this.props.exciteArr.map((excite, idx) => {
      return <ExciteIndexItem key={idx} excite={excite} fetchScene={this.props.fetchScene}/>
    })
    return (
      <div>words
        <ul>
          {thumbnails}
        </ul>
      </div>
    )
  }
 
}

