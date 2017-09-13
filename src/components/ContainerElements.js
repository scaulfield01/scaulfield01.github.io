import React from 'react';
import single from '../images/single.svg';
import monitor from '../images/monitor.svg';
import NeonLabPic from '../images/NeonLabPic.png'
import PocketSFPic from '../images/PocketSFPic.png'
import PortfolioPic from '../images/PortfolioPic.png'
import WixtedGroupPic from '../images/WixtedGroupPic.png'
import ProfilePic from '../images/profilepic.png'
import MusicPic from '../images/MusicPic.jpg'
import { Picture } from 'react-responsive-picture';
import { SocialIcon } from 'react-social-icons';
import UTILS from '../modules/utils';


export function Description(props) {
  return (
     <div className="mt-5 container">
       <img src={ProfilePic} alt="..." className="img-fluid img-thumbnail rounded-circle"/>
       <div className="container">
        <p className="display-5">My Name is Stephen Caulfield, I am an LA based software engineer and musical hobbyist.</p>
       </div>
     </div>
    );
}

export function ComputerImage (props) {
  const array = [NeonLabPic, PocketSFPic, PortfolioPic, WixtedGroupPic];
  const testing = UTILS.decriptions
  return (
     <div className="mt-5 container">
      {testing.map(item => (
        <div>
          <div className="row justify-content-center">
            <div className="col-10">
              <img src={item.image} className="img-fluid" alt="Responsive image"/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="mb-0">{item.title}</h2>
              <p className="display-5">{item.description}</p>
            </div>
          </div>
          <hr className="barrier" />
        </div>
      ))}
    </div>
    )
}

export function ErrorImage (props) {
  return (
    <div>
      <p>ErrorImage</p>
    </div>
    )
}

export function Lightswitch (props) {
  return (
    <div>
      <p>lightswitch</p>
    </div>
    )
}

export function AnimatedVectors (props) {
  const vectors = [single, monitor, single];
  return <div></div>
  // return (
  //   <div className="mt-5 container">
  //     <h2 className="display-3">Welcome!</h2>
  //     <p className="display-5">My Name is Stephen Caulfield, I am an LA based software engineer and musical hobbyist.</p>
  //     <div className="row container justify-content-md-center">
  //       {vectors.map(item => (
  //         <div className="col speaker mx-auto">
  //           <img className="img-fluid" alt="Responsive image" src={item}/>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  //   );
}

export function IconWrapper (props) {
  return (
        <div className="container">
          <div className="jumbotron mt-5 d-flex align-items-lg-center bg-inverse">
              <div className="container">
                <h1 className="display-3">Ways to reach Me</h1>
                <SocialIcon url="https://www.linkedin.com/in/stcaulfield/" network="linkedin" />
                <SocialIcon url="https://github.com/scaulfield01" network="github" />
                <SocialIcon url="mailto:stephentcaulfield@gmail.com?" network="email" />
              </div>
          </div>
        </div>
    )
}

export function MusicInfo (props) {
  return (
    <div className="mt-5 container">
      <div className="row justify-content-center">
        <div className="col-6 mx-auto">
          <img src={MusicPic} alt="..." className="img-fluid img-thumbnail rounded-circle"/>
        </div>
      </div>
      <div className="row">
        <div className="col-11 mx-auto">
          <hr className="barrier" />
          <div className="container">
          <p className="display-5">When moving out of a college apartment, I noticed a guitar sticking out of the trashcan. I brought it home googled 'how to repair a guitar', and proceeded to watch countless videos on how to play. Since then my passion for music evolved into adding numerous tools to my collection and playing with many inspiring people.</p>
          <SocialIcon url="https://soundcloud.com/user-219103652" network="soundcloud" />
          </div>
        </div>
      </div>
    </div>
    );
}

