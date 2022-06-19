import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  options: Array<string>
}

const DropDown: React.FC<Props> = ({ name, value, onChange, options }): ReactElement => {
  const [selected, setSelected] = React.useState<string>(value)

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): string => {
    onChange(event);
    setSelected(event.target.value)
    return selected
  }

  return (
    <select value={selected} name={name} onChange={(e) => handleChange(e)}>
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
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default DropDown
