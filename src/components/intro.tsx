import live12Image from "../assets/images/intro-section/454_Live12-Lite.avif";
import takeoverImage from "../assets/images/intro-section/Ableton_Homepage_Takeover_hWhBBAG.avif";
import pushImage from "../assets/images/intro-section/Push_3.avif";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__top">
        <div
          className="live-img container"
          style={{ backgroundImage: `url(${live12Image})` }}
        >
          <p>Live 12 is out now</p>
          <p>Start Exploring</p>
        </div>

        <div
          className="push-img container"
          style={{ backgroundImage: `url(${pushImage})` }}
        >
          <p>Learn about the making of Ableton Push</p>
          <p>Find out more</p>
        </div>
      </div>
      <div className="intro__bottom">
        <div
          className="takeover-img container"
          style={{ backgroundImage: `url(${takeoverImage})` }}
        >
          <p>Our new podcast is here</p>
          <p>Listen to Doing Music now</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
