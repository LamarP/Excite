import React from 'react';
import { Link } from 'react-router-dom';

class Landing extends React.Component {


  render() {
    return (
      <div>
        <Link to={'/login'} style={{ textDecoration: 'none' }}>
            <h1  className='landing-title' >Excite</h1>
        </Link>
        <video onClick={this.handleClick}
            src="https://player.vimeo.com/external/368320203.hd.mp4?s=ed62dd31538d7ef092250598fdb13c3cd0857812&profile_id=172&oauth2_token_id=57447761"
            autoPlay muted loop className='session-vid' type='video/mp4'>
        </video>
        {/* https://player.vimeo.com/external/350442134.hd.mp4?s=c5efb96f0abf16835320b834a04a86990752604e&profile_id=172&oauth2_token_id=57447761 */}
        {/* https://player.vimeo.com/external/480942871.hd.mp4?s=9a445e0c6fb355ca41f796eff01ad63d03c2e5aa&profile_id=175&oauth2_token_id=57447761 */}
        {/* https://player.vimeo.com/external/368320203.hd.mp4?s=ed62dd31538d7ef092250598fdb13c3cd0857812&profile_id=172&oauth2_token_id=57447761 */}
      </div>

    )
  }

}

export default Landing;