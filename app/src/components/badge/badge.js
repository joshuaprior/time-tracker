import React from 'react';
import classNames from 'classnames';
import './style.scss';

function Badge(props) {
  const className = classNames({
    badge: true,
    clickable: props.onClick
  });

  return <div className={className} onClick={props.onClick}>{props.count}</div>;
}

Badge.propTypes = {
  count: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func
};

export {
  Badge as default
}
