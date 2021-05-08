import React from 'react';
import {Link} from 'react-router-dom';

export default class ExciteIndexItem extends React.Component {
    
    render() {
        if(!this.props.excite) return null;
        return(
            <li className="scene-index-item" > 
                <Link to={`/explore/${this.props.idx}`}>
                    <img src={this.props.excite.sceneImage} width='319' height='240' alt=""/>
                    <div className='excite-index-item-title' >{this.props.excite.title}</div>
                </Link>
            </li>
        )
    }
};