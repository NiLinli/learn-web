import * as React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

export class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
    };
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  };
}
