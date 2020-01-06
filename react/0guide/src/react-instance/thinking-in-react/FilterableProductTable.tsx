import * as React from 'react';
import { ProductTable } from './ProductTable';
import { SearchBar } from './SearchBar';

const MOCK_DATA = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

interface IProps {
    products: any[];
}

interface IState {
    filterText: string;
    inStockOnly: boolean;
    products: any[];
}

export class FilterableProductTable extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
            products: MOCK_DATA
        };
    }

    handleFilterTextInput = (filterText: string) => {
        this.setState({
            filterText
        });
    }

    handleInStockInput = (inStockOnly: boolean) => {
        this.setState({
            inStockOnly
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextInput={this.handleFilterTextInput}
                    onInStockInput={this.handleInStockInput}
                />
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        );
    }
}
