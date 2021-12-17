import React from 'react';
import './Modal.scss';
import { useHistory } from 'react-router-dom';

const Modal = ({ active, setActive, children }) => {
  const history = useHistory();
  window.addEventListener(
    'popstate',
    (event) => {
      if (event.state) {
        setActive(false);
        history.push('/');
      }
    },
    false
  );

  return (
    <div
      className={active ? 'Modal active' : 'Modal'}
      onClick={() => {
        history.push('/');
        setActive(false);
      }}
    >
      <div
        className={active ? 'Modal__content active' : 'Modal__content'}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="Modal__close"
          onClick={() => {
            history.push('/');
            setActive(false);
          }}
        >
          ×
        </div>
        <p className="Modal__title">Оставить заявку на поддержку сайта</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
