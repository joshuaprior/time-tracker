require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Timer from './timer'
import Task from './task';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Timer />
        <Task />
      </div>
    );
  }
}

export {
  AppComponent as default
};
