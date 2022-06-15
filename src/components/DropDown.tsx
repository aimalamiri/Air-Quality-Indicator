import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
  name: string
  options: Array<string>
}

const DropDown: React.FC<Props> = ({ name, options }): ReactElement => {
  return (
    <select name={name}>
      {options.map((option: string, i: number) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default DropDown
