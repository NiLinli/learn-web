import * as React from 'react';

export function GuestGreeting(props: any) {
    return (
        <div>
            <h1>Please sign up.</h1>
            <button onClick={props.onClick}>
                LogIn
            </button>
        </div>
    );
}