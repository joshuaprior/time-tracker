import React from 'react';
import Badge from '../badge';
import TimeDisplay from '../time-display';
import './style.scss';

class Task extends React.Component {
  static propTypes = {
    participants: React.PropTypes.array,
    description: React.PropTypes.string,
    duration: React.PropTypes.shape({
      offset: React.PropTypes.number,
      start: React.PropTypes.number
    }) ,
    isActive: React.PropTypes.bool,
    onClick: React.PropTypes.func
  };

  static defaultProps = {
    participants: [
      'Chris',
      'Nick'
    ],
    description: 'Employee list scroll bar.'
  };

  renderParticipants() {
    return <Badge count={this.props.participants.length} />;
  }

  render() {
    return (
      <div className="task">
        {this.props.participants && this.renderParticipants()}
        <div className="description">{this.props.description}</div>
        <TimeDisplay />
      </div>
    );
  }
}

export {
  Task as default
};
