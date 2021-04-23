import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/');
        }

        this.setState({ errors: nextProps.errors });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        //this.props.signup(user);
         this.props.signup(user, this.props.history);
        // this.props.signup(user).then(() => this.props.history.push("/"))
        //  .fail(() => this.setState({ errors: this.props.errors }));
    }

    // handleSubmit(e) { 
    //   e.preventDefault(); 
    //   const user = Object.assign({}, this.state); 
    //   this.props.processForm(user).then(() => this.props.history.push("/"))
    //    .fail(() => this.setState({ errors: this.props.errors })) 
    // }


    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <p>Sign Up</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-form">
                            {/* <br /> */}
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />
                            {/* <br /> */}
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />
                            {/* <br /> */}
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder="Confirm Password"
                            />
                            {/* <br /> */}
                            {/* <input type="submit" value="Submit" /> */}
                            <button className='auth-button'><span>Submit</span></button>
                            {this.renderErrors()}
                        </div>
                    </form>
                    <div className='bottom-text'>
                        <div onClick={() => this.props.history.push('/login')}>
                            Already have an account? Login Here!
                        </div>
                    </div>
                </div>
                <div className='overlay-area'></div>
                <video onClick={this.handleClick}
                    src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                    autoPlay muted loop className='session-vid' type='video/mp4'></video>
            </div>
        );
    }
}

export default withRouter(SignupForm);