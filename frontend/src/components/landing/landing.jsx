import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {



  render() {
    return (
      <div>
        <video 
            // src="https://player.vimeo.com/external/368320203.hd.mp4?s=ed62dd31538d7ef092250598fdb13c3cd0857812&profile_id=172&oauth2_token_id=57447761"
            src='https://player.vimeo.com/external/368320203.sd.mp4?s=38b1bac5d627b94fb902597643461ee5f233d00a&profile_id=165&oauth2_token_id=57447761'
            autoPlay muted loop className='session-vid' type='video/mp4'>
        </video>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <h1  className='landing-title' >Excite</h1>
        </Link>
      </div>
    )
  }

}

export default Landing;