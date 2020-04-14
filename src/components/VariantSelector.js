import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const VariantSelector = ({ option, handleOptionChange }) => {
  return (
    <div>
      <label onChange={null}>
        {option.name}
        <select
          className={css(styles.selector)}
          name={option.name}
          key={option.name}
          onChange={handleOptionChange}
        >
          {option.values.map(value => {
            return (
              <option
                value={value}
                key={`${option.name}-${value}`}
              >{`${value}`}</option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default VariantSelector;

const styles = StyleSheet.create({
  selector: {
    display: 'block',
    borderRadius: 0,
    WebkitAppearance: 'none',
    background: 'transparent',
    padding: '2px 5px',
    minWidth: 300,
  },
});
