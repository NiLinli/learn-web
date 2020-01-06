import * as React from 'react';

export function ProductCategoryRow(props: any) {
    return (
        <tr>
            <th colSpan={2}>
                {props.category}
            </th>
        </tr>
    );
}

