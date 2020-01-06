import * as React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';
export function ProductTable(props: any) {

    const rows: any = [];
    let lastCategory: any;
    console.log(props.inStockOnly)

    props.products.forEach((product: any) => {
        if (product.name.indexOf(props.filterText) === -1 || (!product.stocked && props.inStockOnly)) {
            return;
        }
        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
