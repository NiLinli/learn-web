import * as React from 'react';

export class LoggingButton extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }

    // e 隐式绑定了, 不需要绑定
    // e 必须在参数最后一个
    handleClick(name: string, e: Event) {
        console.log('this is:', this);
        console.log('name:', name);
        console.log(e);                 // 封装的 Event 对象
    }

    render() {
        // handleClick 执行时候并不是直接在该 class 的 instance 里面
        return (
            <button onClick={this.handleClick.bind(this, 'nixixi')}>
                Click me
        </button>
        );
    }
}