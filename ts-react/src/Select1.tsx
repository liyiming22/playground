/* eslint-disable react/destructuring-assignment */
import React, { useCallback } from 'react'

export type OptionValue = string | number
export type Option = {
  value: OptionValue
  label: string
}

interface ISelectProps {
  options: Option[]
  value: OptionValue
  onChange: (value: OptionValue) => void
}

const Select = (props: ISelectProps) => {
  const { options, onChange } = props
  const handleOnChange = useCallback((e: React.FormEvent<HTMLSelectElement>) => {
    const { selectedIndex } = e.currentTarget
    const selectedOption = options[selectedIndex]
    onChange(selectedOption.value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // eslint-disable-next-line unicorn/consistent-destructuring
    <select value={props.value} onChange={handleOnChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export default React.memo(Select)
