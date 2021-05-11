import React from 'react';

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [] }
    }
    componentDidMount() {
        console.log('goal')
        const result = []
        this.props.goal.excites.forEach((excite) => {
            this.props.fetchExcite(excite)
                .then(res => result.push(res.excite))
        });
        this.setState({excites: result})
    };
    render() {
        // if(!this.props.goal.excites[0]) return null;
        // if(this.state.excites.length === 0) return null;
        return(
            <div>
                <h3>{this.props.goal.title}</h3>
                <img src={this.state.excites[0].sceneImage} alt="" />
            </div>
        )
    }
}

export default GoalIndexItem;