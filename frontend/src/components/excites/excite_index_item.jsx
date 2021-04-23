import React from 'react';
import { Link } from 'react-router-dom';
export default class ExciteIndexItem extends React.Component {

  componentDidMount() {
    this.props.fetchScene(this.props.excite.scene);
 }
  render() {
    console.log(this.props);
    return (
      <li>
        {/* <img src={this.props.thumbnail} width="360" height="240"/> */}
      </li>
    )
  }
}