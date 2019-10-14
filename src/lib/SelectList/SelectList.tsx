import React, { useState, useEffect, useRef, ComponentType } from 'react';
// import PropTypes from 'prop-types';
import cx from 'classnames';
import './SelectList.scss';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Badge from '../Badge/Badge';

interface Options {
  value: string;
}

interface IProps {
  /**
   * This function gets triggered every time the
   * selected options change and lift the selected
   * options to the parent component.
   */
  onChangeSelected: (optionsSelected: string[]) => void;

  /**
   * List of select options
   */
  options: Options[];

  /**
   * Specifies the select list with
   */
  selectWidth: string;

  /**
   * Specifies the background color of the select
   */
  bgColor: string;

  /**
   * Specifies the placeholder text
   */
  placeholder: string;

  /**
   * Optional class names
   */
  className: string;

  /**
   * Specifies the dropdown label text
   */
  label: string;

  /**
   * Specifies the dropdown Material UI icon
   */
  icon: ComponentType;

  /**
   * Specifies wether the dropdown allows to select multiple options
   */
  isMultiSelect: boolean;
}

const SelectList: React.FC<IProps> = props => {
  const {
    onChangeSelected = () => {},
    className: customClasses = '',
    options,
    selectWidth,
    bgColor,
    icon: Icon,
    placeholder,
    label = '',
    isMultiSelect
  } = props;

  const [isOpen, setOpen] = useState<Boolean>(false);
  const [optionsSelected, setOptionsSelected] = useState<string[]>([]);
  const selectListContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', onClickOutside);
    } else {
      document.removeEventListener('mousedown', onClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    onChangeSelected(optionsSelected);
  }, [onChangeSelected, optionsSelected]);

  const selectListClasses = cx(
    'rc-select',
    `${isOpen ? 'rc-select-list--open' : ''}`
  );

  const onToggleSelect = () => {
    setOpen(!isOpen);
  };

  const onClickOutside = (event: Event) => {
    if (
      !selectListContainer.current ||
      !(event.target instanceof HTMLElement) ||
      selectListContainer.current.contains(event.target)
    ) {
      // click inside
      return;
    }
    // click outside
    setOpen(false);
  };

  const onHandleSelectOption = (event: React.MouseEvent<HTMLElement>) => {
    const { value } = event.currentTarget.dataset;
    if (isMultiSelect) {
      if (optionsSelected && optionsSelected.includes(value)) {
        const updatedOptions = [...optionsSelected];
        const optionIndex = optionsSelected.indexOf(value);
        updatedOptions.splice(optionIndex, 1);
        setOptionsSelected(updatedOptions);
      } else {
        setOptionsSelected([...optionsSelected, value]);
      }
    } else {
      setOptionsSelected([value]);
      setOpen(!isOpen);
    }
  };

  const deselectOption = (
    event: React.MouseEvent<HTMLElement>,
    option: string
  ) => {
    event.stopPropagation();
    const updatedOptions = [...optionsSelected];
    const optionIndex = optionsSelected.indexOf(option);
    updatedOptions.splice(optionIndex, 1);
    setOptionsSelected(updatedOptions);
  };

  const renderSelected = () => {
    if (isMultiSelect) {
      return optionsSelected.map((option: string) => (
        <Badge
          key={option}
          text={option}
          handleOnClick={deselectOption}
          bgColor={'#FFCC00'}
        />
      ));
    } else {
      return optionsSelected[0];
    }
  };

  const renderOptions = () => {
    return options.map(item => (
      <li
        style={{ borderBottom: `1px solid ${bgColor}` }}
        className="rc-select-list__option"
        key={item.value}
        data-value={item.value}
        onClick={onHandleSelectOption}
      >
        {isMultiSelect && optionsSelected ? (
          optionsSelected.includes(item.value) ? (
            <CheckBoxIcon />
          ) : (
            <CheckBoxOutlineBlankIcon />
          )
        ) : null}
        {item.value}
      </li>
    ));
  };

  return (
    <div
      className={`${selectListClasses} ${customClasses}`}
      style={{ width: selectWidth }}
      ref={selectListContainer}
    >
      {label ? <label className="rc-select__label">{label}</label> : null}
      <div
        className="rc-select-list"
        style={{ backgroundColor: bgColor }}
        onClick={onToggleSelect}
      >
        {optionsSelected && optionsSelected.length > 0 ? (
          <div className="rc-select-list__selected">{renderSelected()}</div>
        ) : (
          placeholder
        )}
        <div className="rc-select-list__icon">{<Icon />}</div>
      </div>
      <ul
        className="rc-select-list__options"
        style={{ border: `1px solid ${bgColor}` }}
      >
        {renderOptions()}
      </ul>
    </div>
  );
};

export default SelectList;
