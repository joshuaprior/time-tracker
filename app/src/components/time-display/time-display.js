import React from 'react';
import './style.scss';

const MS_PER_SECOND = 1000;
const MS_PER_MINUTE = MS_PER_SECOND * 60;
const MS_PER_HOUR = MS_PER_MINUTE * 60;

class TimeDisplay extends React.Component {
  static propTypes = {
    startTime: React.PropTypes.number,
    isRunning: React.PropTypes.bool
  };

  state = {
    timer: 0
  };

  componentDidMount() {
    this.setTimeout();
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  setTimeout = () => {
    const delay = Math.floor(Math.random() * 100);
    this.timer = setTimeout(this.onTimer, delay);
  }

  onTimer = () => {
    this.setTimeout();
    this.updateTimer();
  }

  updateTimer() {
    const currentTime = (new Date()).getTime();
    const timer = currentTime - this.props.startTime;
    this.setState({timer});
  }

  render() {
    const timer = this.props.isRunning ? this.state.timer : 0;
    return <DurationDisplay duration={timer} />;
  }
}

function DurationDisplay(props) {
  const {hours, minutes, seconds, ms} = parseDuration(props.duration);

  return (
    <div className="duration-display">
      <span>{pad(hours)}</span>
      :
      <span>{pad(minutes)}</span>
      :
      <span>{pad(seconds)}</span>
      .
      <span>{pad(ms, 3)}</span>
    </div>
  );
}

DurationDisplay.propTypes = {
  duration: React.PropTypes.number
};

function parseDuration(time) {
  const hours = Math.floor(time / MS_PER_HOUR);
  time -= hours * MS_PER_HOUR;

  const minutes = Math.floor(time / MS_PER_MINUTE);
  time -= minutes * MS_PER_MINUTE;

  const seconds = Math.floor(time / MS_PER_SECOND);
  time -= seconds * MS_PER_SECOND;

  const ms = time;

  return {hours, minutes, seconds, ms};
}

function pad(n, minLength = 2) {
  const str = '' + n;
  const padding = minLength > str.length ? minLength - str.length : 0;
  return '0'.repeat(padding) + str;
}

export {
  TimeDisplay as default,
  DurationDisplay
};
