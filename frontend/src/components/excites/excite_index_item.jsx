import React from 'react';
import { Link } from 'react-router-dom';

export default class ExciteIndexItem extends React.Component {

  render() {
    console.log(this.props);
    if(!this.props.scene) {return null};
    return (
      <li>
        <Link to={`/excites/excite/${this.props.excite._id}`}>
          <img src={this.props.scene.image} width="360" height="240" alt=""/>
        </Link>
      </li>
    )
  }
}