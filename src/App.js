import './App.css';
import alison from './assets/AlisonMajor.jpg';
import linkedInLogo from './assets/LinkedIn_Logo.png';
import mediumLogo from './assets/Medium_Logo.png';
import gitHubLogo from './assets/GitHub_Logo.png';
import MediumArticlesContainer from './Components/MediumArticlesContainer'

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="row justify-content-md-center" style={{marginTop: '50px'}}>
          <div className="col-md-3">
            <img
              src={alison}
              alt="Alison Major"
              className="img-fluid rounded-circle"
            />
          </div>
        </div>

        <div className="row justify-content-md-center" style={{marginTop: '50px'}}>
          <div className="col">
            <h1 className="h2">Alison Major</h1>
            <h3 className="h5">
              <a href="mailto:hello@alisonmajor.me">
                hello@alisonmajor.me
              </a>
            </h3>
          </div>
        </div>

        <div className="row justify-content-md-center" style={{marginTop: '50px'}}>
          <div className="col-md-6">
            <h3>About</h3>
            <p>
              Alison began her career as a graphic designer and moved into web 
              development and writing custom scripts. She later helped to 
              design and develop a web application for an online web-to-print 
              system.
            </p>
            <p>
              Alison was asked to join the Robotic Process Automation (RPA) team 
              upon its inception at her workplace in January 2018 and worked with 
              business stakeholders to research, design, develop, test, and deploy 
              process automations in vital business areas.
            </p>
            <p>
              In May 2019, Alison was promoted to Senior Developer and led a 
              development pod that was largely responsible for the creation and 
              centralization of one of the company's most popular and successful 
              internal bots which creates and submits orders by reading purchase 
              orders via Optical Character Recognition (OCR) technology.
            </p>
            <p>
              In her current professional role, Alison helps lead the technical 
              development and management of RPA bots as a Technical Delivery Lead.
            </p>
            <p>
              Alison has been married to her husband Chris since 2007 and lives in 
              West Michigan with their two kids. When she’s not working, Alison 
              enjoys sailing with her family on their boat named Fika, learning new 
              things (she’s currently taking graduate classes for a Master's in 
              Computer Science with a focus in Software Engineering), and curling 
              up with a good fantasy or adventure story with a nice cup of tea.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <MediumArticlesContainer />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-1">
            <a href="https://www.linkedin.com/in/amajorendeavor" target="_blank" rel="noreferrer">
              <img className="img-fluid logo__word" src={linkedInLogo} alt="LinkedIn" />
            </a>
          </div>
          <div className="col-md-1">
            <a href="https://medium.com/@amajordeveloper" target="_blank" rel="noreferrer">
              <img className="img-fluid logo__word" src={mediumLogo} alt="Medium" />
            </a>
          </div>
          <div className="col-md-1">
            <a href="https://github.com/amajor/" target="_blank" rel="noreferrer">
              <img className="img-fluid logo__word" src={gitHubLogo} alt="GitHub" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
