import React, { Component } from 'react';
import { ProfilePicture, SocialIcons, PortfolioItems} from './components/StateLess'
import UTILS from './Modules/utils';
import './App.css';

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="container">
                    <ProfilePicture profileProps={UTILS.profilePicture}/>
                </div>
                <div className="container">
                    <SocialIcons socialProps={UTILS.socialObjects} />
                </div>
                <div className="container">
                    <PortfolioItems portfolioProps={UTILS.portfolioList}/>
                </div>
            </div>
        );
    }
}

export default App;
