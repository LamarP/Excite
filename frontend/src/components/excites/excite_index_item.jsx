import React from 'react';
import { Link } from 'react-router-dom';

export default class ExciteIndexItem extends React.Component {

  render() {
     if(!this.props.scene) {return null};
    return (
      <li>
        <Link to={`/excites/${this.props.exciteId}`}>
          
          <figure>
          <video width="320" height="240"  
        src={this.props.excites.scene} 
        autoPlay muted loop className='vid' type='video/mp4'></video>
         
          </figure>
        </Link>
      </li>
    )
  }
}