import React from 'react';
import {Link} from 'react-router-dom';

export default class ExciteIndexItem extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     excite: undefined,
        // }
    }
    async componentDidMount() {
       this.props.fetchExcite(this.props.scene.id)
    //    this.setState({excite: result.excite}) 
            // .then(res => {
            //     this.setState({excite: res.excite})
            // })    

    }
    render() {
        if(!this.props.scene) return null;
        if(!this.props.excite) return null;
        // console.log(this.state.excite)
        return(
            <li className="scene-index-item" > 
                <Link to={`/explore/${this.props.idx}`}>
                    <img src={this.props.scene.image} width='319' height='240' alt=""/>
                    <div className='excite-index-item-title' >{this.props.excite.title}</div>
                </Link>
            </li>
        )
    }
};