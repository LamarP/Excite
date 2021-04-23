import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import song from '../../One Ok Rock Onion English Sub.mp3';
import ReactAudioPlayer from 'react-audio-player';


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

        this.a = new Audio(song);
    }

    // componentWillMount() {
    //    console.log('hello')
    //    console.log(this.a)
       
    //    this.a.play();
    // }

    // componentDidMount() {
    //     return this.audio()
    // }

    // audio() {
    //     <audio type="audio/mpeg" autoPlay >
    //         <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' type="audio/ogg" />
    //     </audio>
    // }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/profile');
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

    // playAudio() {
    //    return(<audio type="audio/mpeg" autoPlay volume="0.1" controls className='my-audio'
    //     >
    //         <source src='https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' type="audio/ogg" />
    //     </audio>);
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
            <React.Fragment>
            <div>
                <div className='wrapper'>
                    <p>Login</p>
                    <form onSubmit={this.handleSubmit}>

                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                            />

                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                            />

                            <button className='auth-button' ><span>Submit</span></button>
                            {this.renderErrors()}

                    </form>
                    <div className='bottom-text'>
                        <div onClick={() => this.props.history.push('/signup')}>
                            Don't have an account? Sign Up Here!
                        </div>
                    </div>          

                    
                </div>
             <div className='overlay-area'></div>
           

                    

                    <ReactAudioPlayer 
                        autoPlay 
                        src={song} 
                        type="audio/mp3"
                        volume={0.1}
                    />
                    

                    <div className="navbar-parent">
                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <h1  className='header-title' >Excite</h1>
                        </Link>
                    </div>
                   
        </div>
         
    </React.Fragment>
        );
    }
}
//src = 'https://docs.google.com/uc?export=download&id=1hMWQTrgm8jlGhNV2WRiL_2LuVhypMGBP' >
export default withRouter(LoginForm);