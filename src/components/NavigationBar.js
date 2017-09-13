import React, { Component, PropTypes  } from 'react';
import UTILS from '../modules/utils';

const propTypes = {
  onNavClick: React.PropTypes.func.isRequired,
  onNavHover: React.PropTypes.func.isRequired,
  displayPage: React.PropTypes.string.isRequired
};

const defaultProps = {
  displayPage: 'landing'
};

function NavigationBar(props) {
  return (
    <nav className="nav nav-pills nav-fill justify-content-center bg-inverse">
      <ul className="nav nav-pills">
        {UTILS.displayPages.map(displayName => (
          <li className={props.displayPage === displayName ? " nav-item active" : "nav-item"}>
            <a
              className="nav-link bg-inverse text-white"
              href={"/" + displayName}
              key={displayName}
              onClick={props.onNavClick}
              onMouseOver={props.onNavHover}
              data-displayPage={displayName} >
               {displayName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavigationBar.propTypes = propTypes;
NavigationBar.defaultProps = defaultProps;

export default NavigationBar;
