import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {

  render() {
    const devs = [
      {
        name: 'Lamar', 
        git: 'https://github.com/LamarP', 
        link: 'https://www.linkedin.com/in/lamar-poole-19148b96/'
      },
      {
        name: 'Frank', 
        git: 'https://github.com/frmendez21', 
        link: 'https://www.linkedin.com/in/frank-mendez-96025a1b3/',
        angel: 'https://angel.co/u/frank-mendez-1'
      },
      {
        name: 'Reginald', 
        git: 'https://github.com/Flatout007'
      },
      {
        name: 'Terry', 
        git: 'https://github.com/terryt925', 
        link: 'www.linkedin.com/in/terry-thind-42a8591a1',
        angel: 'https://angel.co/u/terry-thind'
      }
    ]

    return(
      <div>

        <h1>About</h1>

        <p>Have you ever felt unmotivated, unprepared for the day, or generally 
          unexcited? Then we have the perfect app for you! Get excited with 
          Excite!!!
        </p>

        <ul>

          <li>Excite tackles the problem mentioned above.</li>

          <li>Excite aims to get you motivated for any activity or chore you're 
            dreading, by providing you with adrenaline-inducing jams and 
            scenery.
          </li>

          <li>Stimulating your senses to bring out your inner beast to tackle 
            any task in your path.
          </li>

          <li>Choose from premade scenes paired with music and motivational 
            speeches or mix and match scenes and sounds of your choosing.
          </li>

        </ul>

        <p>Excite was built using the MERN stack: MongoDB, Express, React, Node.</p>

        {devs.map(dev => (
            <div>
              <p>{dev.name}</p>

              <a href={dev.git} target='_blank'>
                <i class="fab fa-github"></i>
              </a>
              
              <a href={dev.link} target='_blank'>
                <i class="fab fa-linkedin"></i>
              </a>


              <a href="">
                <i class="fab fa-angellist"></i>
              </a>

            </div>
          ))}

      </div>
    )
  }

}

export default About;