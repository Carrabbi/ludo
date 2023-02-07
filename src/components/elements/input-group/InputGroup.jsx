import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

function InputGroup({ id, type, label, handleChange, inputValue }) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
        <div className={styles.inputClass}>
          <input
            type={type}
            id={id}
            onChange={handleChange}
            value={inputValue}
            className={styles.input}
          />
        </div>
      </label>
    </div>
  );
}

InputGroup.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  handleChange: () => null,
  inputValue: '',
};

InputGroup.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default InputGroup;
