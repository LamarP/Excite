import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }

        // Set or clear errors
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
            password: this.state.password
        };

        this.props.login(user);
    }

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
            <React.Fragment>
            <div>
            <div className='wrapper'>
                <p>Login</p>
                <form onSubmit={this.handleSubmit}>
                    {/* <div> */}
                    {/* <label>Email */}
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                    {/* </label> */}
                        {/* <br /> */}
                    {/* <label>Password */}
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        {/* <br /> */}
                    {/* </label> */}
                        {/* <input type="submit" value="Submit"/> */}
                        <button className='auth-button' ><span>Submit</span></button>
                        {this.renderErrors()}
                    {/* </div> */}
                </form>
                <div className='bottom-text'>
                  {/* Link to other form */}
                </div>
                

                {/* <video src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                  className='session-vid' autoplay muted loop type='video/mp4'>
                </video> */}

                
            </div>
             <div className='overlay-area'></div>
                <video onClick={this.handleClick}
                    src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                    autoPlay muted loop className='session-vid' type='video/mp4'></video>
        </div>
         
    </React.Fragment>
        );
    }
}

export default withRouter(LoginForm);