import * as React from 'react';
import { NumberList } from './NumberList';


export class ListWrapper extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    return <NumberList numbers={arr} />

  }

}