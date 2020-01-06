import * as React from 'react';

interface IState {
    isToggleOn: boolean;
}

export class Toggle extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // 1. callback 没有绑定 this
        // this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button 
                onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }

    // 属性初始化器语法
    handleClick = () => {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }



    // 1. 
    // private handleClick() {
    //     this.setState((prevState) => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }
}