
import * as React from 'react';

interface IProps {
    onFilterTextInput: any;
    onInStockInput: any;
    filterText: any;
    inStockOnly: any;
}

export class SearchBar extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    handleFilterTextInputChange = (e: any) => {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockInputChange = (e: any) => {
        this.props.onInStockInput(e.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockInputChange}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}
