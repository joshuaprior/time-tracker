import React from 'react';
import TimeDisplay from './time-display';
import Tag from '../tag';
import './style.scss';

class Timer extends React.Component {
  state = {
    startTime: (new Date()).getTime()
  };

  onCurrentTaskClick = () => {
    console.log('Current task clicked.');
  }

  render() {
    const currentTask = 'Employee list scroll bar.';
    return (
      <div className="timer">
        <Tag label={currentTask} onClick={this.onCurrentTaskClick} />
        <TimeDisplay running={false} startTime={this.state.startTime} />
        <button>Next</button>
      </div>
    );
  }
}

export {
  Timer as default
};
