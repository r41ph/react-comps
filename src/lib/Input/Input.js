import './Input.scss';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const propTypes = {
  /**
   * Specifies input onChange action
   */
  onChange: PropTypes.func,

  /**
   * Sets custom element classnames
   */
  className: PropTypes.string,

  /**
   * Sets element id
   */
  id: PropTypes.string,

  /**
   * Sets input type
   */
  type: PropTypes.string,

  /**
   * Sets the label text
   */
  labelText: PropTypes.string,

  /**
   * Sets the aria-label text
   */
  ariaLabelText: PropTypes.string,

  /**
   * Sets the placeholder text
   */
  placeholder: PropTypes.string,

  /**
   * Sets the input value
   */
  value: PropTypes.string,

  /**
   * Sets whether the input is required
   */
  required: PropTypes.bool,

  /**
   * Sets whether the input is disabled
   */
  disabled: PropTypes.bool
};

const Input = props => {
  const {
    placeholder,
    labelText = '',
    ariaLabelText = '',
    value,
    className = '',
    id = '',
    onChange = () => {},
    type = 'text',
    required = false,
    disabled = false
  } = props;

  const handleChange = event => {
    onChange(event.target.value);
  };

  const inputClasses = cx('input-field', `${className}`);

  return (
    <>
      {labelText ? (
        <label htmlFor={id} className="input-field__label">
          {labelText}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        aria-label={ariaLabelText}
        aria-required={required}
        required={required}
        disabled={disabled}
        className={`${inputClasses}`}
        placeholder={placeholder}
      />
    </>
  );
};

Input.propTypes = propTypes;

export default Input;
