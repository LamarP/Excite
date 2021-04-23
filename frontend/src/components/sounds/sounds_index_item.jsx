import React from 'react';
import { Link } from 'react-router-dom';

class SoundsIndexItem extends React.Component {

  render() {
    console.log(this.props)
    return (
      <li className="sounds-index-item">
        <Link to={`/sounds/sound/${this.props.soundId}`}>Song</Link>
      </li>
      )
    }
}

export default SoundsIndexItem;