import React from 'react';
import TimeDisplay from './time-display';

class Timer extends React.Component {
  state = {
    startTime: (new Date()).getTime()
  };

  render() {
    return (
      <div>
        <TimeDisplay running={false} startTime={this.state.startTime} />
      </div>
    );
  }
}

export {
  Timer as default
};
