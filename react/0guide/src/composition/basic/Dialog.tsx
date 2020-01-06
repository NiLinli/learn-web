import * as React from 'react';
import { FancyBorder } from './FancyBorder';

const Okbutton = () => (<button>OK</button>);
const Cancelbutton = () => (<button>Cancel</button>);

export function Dialog(props) {
    return (
        <FancyBorder color="blue" left={<Okbutton/>} right={<Cancelbutton/>}>
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}