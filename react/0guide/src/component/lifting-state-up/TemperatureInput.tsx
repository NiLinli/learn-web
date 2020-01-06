import * as React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

interface IProps {
    scale: string;
    temperature: string;
    onTemperatureChange: any;
}

interface IState {
    temperature: string;
}

export class TemperatureInput extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            temperature: ''
        };
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }

    private handleChange = (e: any) => {
        this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }
}