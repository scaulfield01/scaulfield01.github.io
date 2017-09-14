import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import UTILS from '../modules/utils';



export function Portfolio(props)  {
    render() {
        const testing = UTILS.decriptions
            return (
                <div class="container">
                {
                    testing.map((work, i) => {
                        if(i%2 === 0 && this.props.isMobile) {
                            <div className="row" key={i}>
                                <img className="col-md-6 img-responsive" alt="Responsive image" src="./GitHubClone.png" />
                                    <div className="col-md-6 desc-text">
                                    <h2>{work.title}</h2>
                                    <p className="text-justify">{work.description}</p>
                                </div>
                            </div>
                        } else {
                            <div className="row" key={i}>
                                <img className="col-md-6 img-responsive" alt="Responsive image" src="./GitHubClone.png" />
                                <div className="col-md-6 desc-text">
                                    <h2>{work.title}</h2>
                                    <p className="text-justify">{work.description}</p>
                                </div>
                            </div>
                        }
                    });
                }
                </div>
            )
    }
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

export function ProfileImage(props) {
    <div className="container">
        <div className="row">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 desc-text">
                    <h1>Stephen Caulfield <small>Developer | Musician</small></h1>
                </div>
            </div>
            <div align="center" className="col-md-6 col-md-offset-3 embed-responsive embed-responsive-16by9">
                <video autoplay loop className="embed-responsive-item">
                    <source src="source.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
            </div>
        </div>
    </div>
}






