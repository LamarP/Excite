
import React from 'react';
import {Link} from 'react-router-dom';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [] }
    }

    componentDidMount() {
        const result = []
        this.props.goal.excites.forEach( async (excite) => {
           const fetchedResults = await this.props.fetchExcite(excite)
           result.push(fetchedResults.excite);
        });
        setTimeout(() => this.setState({excites: result}), 200 )
    };

  

    render() {
        if(this.state.excites.length < 1 && this.props.goal.title) return (
            <div className="goal-item-container">
                <h3 className="goal-title">{this.props.goal.title}</h3>
            </div>
        );
        if(this.state.excites.length === 0) return null;
        const exciteLinks = this.props.goal.excites.map((exciteId, idx) => (
            <Link key={idx} to={`/explore/${exciteId}`}>
                <img className="goal-excite-img"src={this.state.excites[idx].sceneImage} alt="" width="100" height="50"/>
            </Link>
        ))
        return(
            <div className="goal-item-container">
                <h3 className="goal-title">{this.props.goal.title}</h3>
                <div className="goal-img-container">
                   {exciteLinks}
                </div>
            </div>
        )
    }
}

export default GoalIndexItem;