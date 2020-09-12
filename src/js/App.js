import React from 'react';
import '../css/App.css';
import {socialMediaLinks, importAll} from './utils';

function App() {
  // import all the images from the logos folder
  const images = importAll(require.context('../logos', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="App">
      <header className="App-header">
        <img src={images["flopperamLogo.png"]} className="App-logo-display" alt="Flopperam Logo" />
        <p>
          A couple of guys who like computer programming
        </p>
      </header>
      <section className="App-section">
        <a
          href= {socialMediaLinks["youtube"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images['youtubeLogo.png']} className="App-logo-button" alt="Youtube Logo" />
        </a>
        <a
          href={socialMediaLinks["discord"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images['discordLogo.png']} className="App-logo-button" alt="Discord Logo" />
        </a>
        <a
          href={socialMediaLinks["twitter"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images['twitterLogo.png']} className="App-logo-button" alt="Twitter Logo" />
        </a>
      </section>
    </div>
  );
}

export default App;
