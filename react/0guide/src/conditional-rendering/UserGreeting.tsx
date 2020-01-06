import * as React from 'react';

export function UserGreeting(props: any) {
    return (
        <div>
            <h1>Welcome back!</h1>
            <button onClick={props.onClick}>
                Logout
            </button>
        </div>
    );
}

