import React from 'react'

const VariantSelector = ({ option, handleOptionChange }) => {
  return (
    <div>
      <label onChange={null}>
        {option.name}
        <select
          className="Product__option"
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
            )
          })}
        </select>
      </label>
    </div>
  )
}

export default VariantSelector
