import * as React from 'react';

interface IProps {
    options: string[];
    value: string;
    onChange: any;
  }

export default class Picker extends React.Component<IProps> {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    )
  }
}

