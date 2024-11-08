import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

// ========================================
// React 会根据你开发应用数据的变化自动渲染和更新组件
// 一个组件会接受名为 props 的参数

// ========================================
// 小方格
// 受控组件
// 函数定义组件
function Square(props) {
  return (
    <button className="square" 
      onClick={props.onClick}>
      { props.value }
    </button>
  );
}

// board 里面有个 9 个小方格
class Board extends React.Component {

  // 通过 Props 传递数据
  renderSquare(i) {
    return <Square 
    value={this.props.squares[i]}
    onClick={()=>{this.props.onClick(i)}}
    />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    // 如果赢了, 点击失效
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] =   this.state.xIsNext? 'X' : 'O';
    this.setState({
      history: history.concat({
        squares
      }),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    }
   );
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: !(step % 2)
    })
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = `Next player: ${this.state.xIsNext? 'X': 'O'}`;
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares}
            onClick={(i)=>this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
