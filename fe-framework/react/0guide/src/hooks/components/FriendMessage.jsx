import React, { useState, useEffect } from 'react';
import ChatAPI from './ChatAPI';

class FriendMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  // 第一次视图更新完成
  componentDidMount() {
    ChatAPI.subscribeToFriendMessage(this.props.pid, this.receiveMessage);
  }

  receiveMessage = (e) => {
    this.setState({ message: e });
  };

  // > 1 次视图更新完成/上一次视图销毁
  componentDidUpdate(prevProps, prevStates) {
    if (prevProps.pid !== this.props.pid) {
      // 解除旧的订阅
      ChatAPI.unsubscribeFromFriendMessage(prevProps.pid, this.receiveMessage);

      // 更新新的订阅
      ChatAPI.subscribeToFriendMessage(this.props.pid, this.receiveMessage);
    }
  }

  // 最后一次视图销毁
  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendMessage(this.props.pid, this.receiveMessage);
  }

  render() {
    const { pid } = this.props;
    const { message } = this.state;
    return (
      <div>
        <div className="pid">user: {pid}</div>
        <div className="message">message: {message}</div>
      </div>
    );
  }
}

// useEffect 可以写多个
// 视图更新完成后, 做一些操作 渲染完成 -> DOM 更新 -> 执行 effect 里面的函数
// 包含 执行 effect 和 清除 effect
// 概念上面不像生命周期一样区分第一次和非第一次还有最后一次视图更新

function FriendMessageWithHooks(props) {
  const [message, setMessage] = useState('');

  // effect 是渲染的一部分
  // 渲染执行到这里, 清除上一个 effect(cleanup function), 建立一个新的 effect

  useEffect(() => {
    document.title = `You clicked ${props.pid} times`;
    return () => {
      console.log('组件销毁时候清除副作用');
    };
  }, []); // [] 依赖模拟 componentDidMount & componentWillUnmout

  useEffect(() => {
    function receiveMessage(e) {
      setMessage(e);
    }

    ChatAPI.subscribeToFriendMessage(props.pid, receiveMessage);

    return () => {
      ChatAPI.unsubscribeFromFriendMessage(props.pid, receiveMessage);
    };
  }, [props.pid]);

  return (
    <div>
      <div className="pid">user: {props.pid}</div>
      <div className="message">message: {message}</div>
    </div>
  );
}

export default function FriendMessges() {
  const [pid, setPid] = useState(1);

  function changePid() {
    setPid(Math.floor(Math.random() * 10) + 1);
  }

  return (
    <>
      <FriendMessage pid={pid + '(default)'} />
      -----
      <FriendMessageWithHooks pid={pid + '(hooks)'} />
      -----
      <div>
        <button onClick={changePid}>改变用户 ID</button>
      </div>
    </>
  );
}
