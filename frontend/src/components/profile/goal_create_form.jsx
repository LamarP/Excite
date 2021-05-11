import React from 'react';

class GoalCreateForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            title: ""
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let goal = {
            title: this.state.title,
            userId: this.props.user.id
        };
        this.props.processForm(goal)
    }

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    }

    render() {
        if(!this.props.user) return null;
        return(
            <div className="goal-create-container">
                <form className="goal-create-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Title" onChange={this.update("title")}/>
                    <input type="hidden" value={this.props.user.id}/>
                    <button className="goal-create-submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
};

export default GoalCreateForm;