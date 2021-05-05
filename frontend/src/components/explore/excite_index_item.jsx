import React from 'react';
import {Link} from 'react-router-dom';

export default class ExciteIndexItem extends React.Component {
    async componentDidMount() {
       this.props.fetchExcite(this.props.scene.id)

    }
    render() {
        if(!this.props.scene) return null;
        return(
            <li> 
                <Link to={`/explore/${this.props.idx}`}>
                    <img src={this.props.scene.image} width='319' height='240' alt=""/>
                </Link>
            </li>
        )
    }
};