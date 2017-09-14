import React, { Component } from 'react';

class MainContainer extends Component {

    constructor(props) {
        super(props);        
    }

    render() {
    	let layoutArray = [NavBar, ProfileImage, Portfolio, Contact];
        return (
            <div className="MainContainer">
                {
                    layoutArray.map((section) => {
                        <div class="container">

                        </div>
                    })
                }
            </div>
        );
    }
}

export default App;
