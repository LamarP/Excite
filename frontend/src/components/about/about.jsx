import React from 'react';


class About extends React.Component {

  render() {
    const devs = [
      {
        name: 'Lamar Poole', 
        git: 'https://github.com/LamarP', 
        link: 'https://www.linkedin.com/in/lamar-poole-19148b96/'
      },
      {
        name: 'Frank Mendez', 
        git: 'https://github.com/frmendez21', 
        link: 'https://www.linkedin.com/in/frank-mendez-96025a1b3/',
        angel: 'https://angel.co/u/frank-mendez-1'
      },
      {
        name: 'Reginald Dunlap', 
        git: 'https://github.com/Flatout007',
        link: 'https://www.linkedin.com/in/reginald-dunlap-591612202/',
        angel: 'https://angel.co/u/reggie-dunn'
      },
      {
        name: 'Terry Thind', 
        git: 'https://github.com/terryt925', 
        link: 'https://www.linkedin.com/in/terry-thind-42a8591a1',
        angel: 'https://angel.co/u/terry-thind'
      }
    ]

    return(
      <div className="about-container">

        <h1 className="about-head">About</h1>

        <p className="about-intro">Have you ever felt unmotivated, unprepared for the day, or generally 
          unexcited? Then we have the perfect app for you! Get excited with 
          Excite!!!
        </p>
        <p className="about-intro">Excite tackles the problem mentioned above. Excite aims to get you motivated for any activity or chore you're 
            dreading, by providing you with adrenaline-inducing jams and 
            scenery. Stimulating your senses to bring out your inner beast to tackle 
            any task in your path. Choose from premade scenes paired with music and motivational 
            speeches or mix and match scenes and sounds of your choosing. Excite was built using the MERN stack: MongoDB, Express, React, Node
        </p>

        <h1 className="about-head">Meet The Devs</h1>
        <div className="meet-dev-container">
          {devs.map((dev, idx) => (
              <div key={idx} className="about-dev-container">
                <p className="about-dev-name">{dev.name}</p>

                <a href={dev.git} target='_blank' rel="noreferrer" className="about-dev-link" >
                  <i className="fab fa-github"></i>
                </a>

                <a href={dev.link} target='_blank' rel="noreferrer" className="about-dev-link">
                  <i className="fab fa-linkedin"></i>
                </a>


                <a href={dev.angel} target='_blank' rel="noreferrer" className="about-dev-link">
                  <i className="fab fa-angellist"></i>
                </a>

              </div>
            ))}

        </div>

      </div>
    )
  }

}

export default About;