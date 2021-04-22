import React from 'react';
import { Link } from 'react-router-dom';

class SoundsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="sounds-index-item">
        <Link to={`/sound/${this.props.soundId}`} >Song</Link>
      </li>
      )
    }
}

export default SoundsIndexItem;