import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

function Button({ className, btnColor, btnType, onClick, btnId, children }) {
  let btnClasses = {};
  let classBtn = {};

  if (className === null)
    classBtn = styles.btn;
  else
    classBtn = className;
    

  if (btnColor === '.yellowBtn')
    btnClasses = `${classBtn} ${styles.yellowBtn}`;

  if (btnColor === '.redBtn')
    btnClasses = ` ${classBtn} ${styles.redBtn}`;

  if (btnColor === '.blueBtn')
    btnClasses = `${classBtn} ${styles.blueBtn}`;

  if (btnColor === '.greenBtn')
    btnClasses = `${classBtn} ${styles.greenBtn}`;

  if (btnColor === '.blackBtn')
    btnClasses = `${classBtn} ${styles.blackBtn}`;

  return (
    <button className={btnClasses} type={btnType} onClick={onClick} id={btnId}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  btnColor: '.yellowBtn',
  btnType: 'submit',
  onClick: null,
  className: null,
  id: null,
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  btnColor: PropTypes.string,
  btnType: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
