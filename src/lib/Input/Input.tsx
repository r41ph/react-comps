import React, { FC } from 'react';
import cx from 'classnames';
import './Input.scss';

interface IProps {
  /**
   * Specifies input onChange action
   */
  onHandleChange:
    | ((event: React.ChangeEvent<HTMLInputElement> | string) => void)
    | undefined;

  /**
   * Sets custom element classnames
   */
  className: string;

  /**
   * Sets element id
   */
  id: string;

  /**
   * Sets input type
   */
  type: string;

  /**
   * Sets the label text
   */
  labelText: string;

  /**
   * Sets the aria-label attribute
   */
  ariaLabelText: string;

  /**
   * Sets the placeholder text
   */
  placeholder: string;

  /**
   * Sets the input value
   */
  value: string;

  /**
   * Sets whether the input is required
   */
  required: boolean;

  /**
   * Sets whether the input is disabled
   */
  disabled: boolean;
}

const Input: FC<IProps> = props => {
  const {
    placeholder,
    labelText = '',
    ariaLabelText = '',
    value,
    className = '',
    id = '',
    onHandleChange = () => {},
    type = 'text',
    required = false,
    disabled = false
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onHandleChange(event.target.value);
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

export default Input;
