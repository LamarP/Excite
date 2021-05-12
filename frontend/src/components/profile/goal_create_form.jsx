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
            .then((res) => {
                window.location.reload();
                return false;
                // let list = document.querySelector(".goal-item-container");
                // console.log(list)
                // let p = <h3 className="goal-title">{this.state.title}</h3>;
                // // p.innerHTML = 'hello';
                // list.append(p)
            })
    }

    update(key) {
        return e => this.setState({[key]: e.currentTarget.value})
    }

    render() {
        if(!this.props.user) return null;
        return(
            <div className="goal-create-container">
                <form className="goal-create-form" onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" placeholder="Goal Title" onChange={this.update("title")} />
                    </label>

                    <input type="hidden" value={this.props.user.id}/>
                    <button className="goal-create-submit" type="submit">Submit</button>
                </form>
            </div>
        )
    }
};

export default GoalCreateForm;