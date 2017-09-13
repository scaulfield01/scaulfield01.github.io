import React, { Component} from 'react';
import {Description, ComputerImage, ErrorImage, Lightswitch, AnimatedVectors, IconWrapper, MusicInfo} from './ContainerElements';

class MainContainer extends Component {

  // static propTypes = {
  //   displayPage: React.PropTypes.string.isRequired
  // }

  // static defaultProps = {
  //   displayPage: 'landing'
  // }

  render() {

    switch(this.props.displayPage) {
      case 'splash':
        return (
          <Lightswitch />
        );
      case 'landing':
        return (
          <AnimatedVectors />
        );
      case 'about':
        return (
          <Description />
        );
      case 'portfolio':
        return (
            <ComputerImage />
        );
      case 'music':
        return (
            <MusicInfo/>
        );
      case 'contact':
        return (
            <IconWrapper/>
        );
      case 'error':
        return (
          <div>
            <ErrorImage />
            <Description />
          </div>
        );
      default:
        return <h1>hi</h1>;
    }
  }
}

export default MainContainer;