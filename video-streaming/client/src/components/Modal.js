/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => ReactDOM.createPortal(
  <div onClick={props.onDismiss} className="ui dimmer modals visible active">
    <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
      <div className="header">{props.title}</div>
      <div className="content">
        {props.content}
      </div>
      <div className="actions">
        {props.actions}
      </div>
    </div>
  </div>,
  document.querySelector('#modal'),
);

export default Modal;
