import React, { Component } from 'react';
import './App.css';
// import UTILS from './modules/utils';
import MainContainer from './components/MainContainer';
import NavigationBar from './components/NavigationBar';
import leftSymbol from './images/leftSymbol.png';
import rightSymbol from './images/rightSymbol.png';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayPage: 'about', // splash, landing, portfolio, about, music, contact,
      imageFlip: 'right'  //portfolio, about, music, contact,
    };
    this.onNavClick = this.onNavClick.bind(this); // change display when link clicked
    this.onNavHover = this.onNavHover.bind(this);
  }

  onNavClick(e) {
    e.preventDefault();
    let targetDisplayPage = e.target.dataset.displaypage;
    this.setState({ displayPage: targetDisplayPage });
  }

  onNavHover(e) {
    e.preventDefault();
    let hoverDisplay = e.target.dataset.displaypage;
    if( hoverDisplay === 'about'|| hoverDisplay === 'portfolio' ) {
      this.setState({imageFlip: 'left'});
    } else {
      this.setState({imageFlip: 'right'});
    };
  }

  render() {
    let symbolImage = this.state.imageFlip === 'left' ? leftSymbol : rightSymbol;
    return (
      <div className="App">
        <div className="imageWrapper">
          <img className="symbolImage" src={symbolImage}/>
        </div>
        <div className="pageWrapper">
          <NavigationBar
            onNavClick={this.onNavClick}
            displayPage={this.state.displayPage}
            onNavHover={this.onNavHover}
          />
          <div className="itemWrap">
            <MainContainer displayPage={this.state.displayPage} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
