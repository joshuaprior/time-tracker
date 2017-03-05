require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Timer from './timer'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Timer />
      </div>
    );
  }
}

export {
  AppComponent as default
};
