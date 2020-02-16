import React, { Component }  from "react";
import '../css/landing-page.css';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>

        <header>
          <img alt="blue-logo" src="https://maritimeblue.org/wp-content/uploads/2019/01/WAMarBlue_CLR_v3.1C.110717.png" />
          <nav>
              <li><a href="#overview">OVERVIEW</a></li>
              <li><a href="#features">WORK</a></li>
              <li><a href="#team">TEAM</a></li>
          </nav>
        </header>


        <section className="hero">
          <div className="background-image"></div>
          <h1>BLUE FUNDER PORTAL</h1>
          <h3>Connects Maritime entrepreneurs to a variety of investment resources</h3>
          <a href="https://github.com/evaingith/MaritimeBlue" className="btn">Explore Blue Funder Portal</a>
        </section>


        <a name="overview"></a>
        <section className="overview">
          <h3 className="title">Overview</h3>
          <p>Currently entrepreneurs in the Maritime industry are facing the problem of spending too much time searching across many different resources/avenues to find funding that supports “Blue” growth within the industry. Our Blue Funder Portal aims to provide one central location for Maritime innovators to find and search for a wide range of currently available funding opportunities in order to fund their projects.</p>
        </section>


        <a name="features"></a>
        <section className="features">
          <h3 className="title">How It Works</h3>
          <p>Currently this section is reserved for images and information about various features of our application, but we are still implementing those features! Check back later...</p>
          <hr></hr>
        </section>


        <a name="team"></a>
        <section className="team">
          <h3 className="title">Our Team</h3>
          <div className="team-banner">
            <div className="team-card">
              <img alt="team member" src="https://i.redd.it/wissuwm1o8521.jpg" />
              <p className="team-name">Eva (Yuan) Yin</p>
              <p>Data Analyst, Front End Developer</p>
              <p>yin7@uw.edu</p>
            </div>
            <div className="team-card">
              <img alt="team member" src="https://i.redd.it/wissuwm1o8521.jpg" />
              <p className="team-name">Changyu Li</p>
              <p>Data Analyst, Front End Developer</p>
              <p>Changl28@uw.edu</p>
            </div>
            <div className="team-card">
              <img alt="team member" src="https://i.redd.it/wissuwm1o8521.jpg" />
              <p className="team-name">Ashley (Yufei) Zhou</p>
              <p>Data Analyst, UX Designer</p>
              <p>zhouy58@uw.edu</p>
            </div>
            <div className="team-card">
              <img alt="team member"  src="https://i.redd.it/wissuwm1o8521.jpg" />
              <p className="team-name">Keith Roberts</p>
              <p>Software Engineer</p>
              <p>keithrob@uw.edu</p>
            </div>
          </div>
        </section>

        <section className="sponsor">
          <h3 className="title">Our Sponsor</h3>
          <div className="sponsor-banner">
            <div>
              <img alt="sponsor logo" className="sponsor-img" src="https://maritimeblue.org/wp-content/uploads/2019/01/WAMarBlue_CLR_v3.1C.110717.png" />
            </div>
            <div>
              <p>Department of Commerce - Washington State & The Maritime Blue Project</p>
            </div>
          </div>
        </section>

        <footer>
          <p>This project is a part of the Capstone Project course at the University of Washington Information School</p>
        </footer>

      </div>
    )
  }
}

export default LandingPage;