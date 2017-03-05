import React from 'react';
import classNames from 'classnames';
import './style.scss';

function Tag(props) {
  const className = classNames('tag', props.color, props.className, {
    clickable: props.onClick
  });

  return (
    <div className={className} onClick={props.onClick}>
      {props.label}
    </div>
  );
}

Tag.propTypes = {
  label: React.PropTypes.string,
  onClick: React.PropTypes.func,
  color: React.PropTypes.oneOf([
    'green'
  ]),
  className: React.PropTypes.string
};

Tag.defaultProps = {
  color: 'green'
};

export {
  Tag as default
};
