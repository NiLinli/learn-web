import * as React from 'react';
import { toCelsius, toFahrenheit, tryConvert } from './util';
import { BoilingVerdict } from './BoilingVerdict';
import { TemperatureInput } from './TemperatureInput';

interface IState {
    temperature: string;
    scale: string;
}

export class Calculator extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            scale: 'c',
            temperature: ''
        };
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </div>
        );
    }

    private handleCelsiusChange = (temperature: string) => {
        this.setState({ scale: 'c', temperature });
    }

    private handleFahrenheitChange = (temperature: string) => {
        this.setState({ scale: 'f', temperature });
    }
}

// 状态提升
// 几个组件需要共用状态数据的情况
// 这部分共享的状态提升至他们最近的父组件当中进行管理
// 好处: 好追踪数据出错的源头

