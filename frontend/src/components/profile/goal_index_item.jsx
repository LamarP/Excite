
import React from 'react';
import {Link} from 'react-router-dom';
import Modal from './modal'

class GoalIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { excites: [], openModal: false }
        this.modalToggle = this.modalToggle.bind(this)
    }

    modalToggle() {
         if(!this.state.openModal) {
            this.setState({openModal:true})
        } else {
            this.setState({openModal: false})
        }
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
        ));
        let exciteModal = this.state.openModal ? <Modal /> : <div></div>;
        return(
            <div className="goal-item-container">
                <h3 className="goal-title">{this.props.goal.title}</h3>
                <div className="goal-img-container">
                   {exciteLinks}
                </div>
                <button onClick={this.modalToggle} className="goal-excite-add">+</button>
                {exciteModal}
            </div>
        )
    }
}

export default GoalIndexItem;