import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import song from '../../One Ok Rock Onion English Sub.mp3';
import fake from '../../250-milliseconds-of-silence (1).mp3';


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
                 {/* <video onClick={this.handleClick}
                        src="https://player.vimeo.com/external/324296639.hd.mp4?s=be09dbee33427d61902b888b25a9c13ac32c8659&profile_id=175&oauth2_token_id=57447761"
                    autoPlay muted loop className='session-vid' type='video/mp4'>
                </video> */}
              
                
                    {/* <audio type="audio/mpeg" autoPlay volume="0.1" id='my-audio' controls>

             <source src={song} type="audio/mp4" />
         </audio>  */}

                    {/* <iframe muted src={fake} type="audio/mp3" allow="autoplay" id="audio" style={{display:'none'}}></iframe> */}
                    
                    <iframe src={fake} allow="autoplay" id="audio" style={{display: 'none'}}></iframe>

                    <audio autoPlay>
                        <source src={song} type="audio/mp3"/>
                    </audio>
                   
        </div>
         
    </React.Fragment>
        );
    }
}
//src = 'https://docs.google.com/uc?export=download&id=1hMWQTrgm8jlGhNV2WRiL_2LuVhypMGBP' >
export default withRouter(LoginForm);