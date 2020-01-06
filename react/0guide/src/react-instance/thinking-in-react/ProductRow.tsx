import * as React from 'react';

export function ProductRow(props: any) {
    const name = props.product.stocked ?
        props.product.name :
        <span style={{ color: 'red' }}>
            {props.product.name}
        </span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{props.product.price}</td>
        </tr>
    );
}