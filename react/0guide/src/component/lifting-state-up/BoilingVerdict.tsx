import * as React from 'react';

interface IProps {
    celsius: number;
}

export class BoilingVerdict extends React.Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        if (this.props.celsius >= 100) {
            return <p>水会烧开</p>;
        }
        return <p>水不会烧开</p>;
    }

}