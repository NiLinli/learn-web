import React from 'react';

// const MyFunctionalComponent = () => <input />;

// export class Parent extends React.Component {

//   textInput: React.RefObject<any>;

//   constructor(props: any) {
//     super(props);
//     this.textInput = React.createRef();
//   }
//   render() {
//     return (
//       // <MyFunctionalComponent ref={this.textInput} />
//       //  编译不能通过, 没有 instance , 没有 refs 属性
//       //  可以传递一个函数去保存 DOM or React Componet
//     );
//   }
// }

export const FunctionnalCustomTextInput = (props) => {
  // 这里必须声明 textInput，这样 ref 回调才可以引用它
  let textInput;

  function handleClick() {
    console.log(textInput);
    textInput.focus();
  }

  return (
    <div>
      <input
        type="text"
        ref={(input) => {
          textInput = input;
        }}
        // ref={textInput}    // error
      />
      <button onClick={handleClick}>Focus the text input</button>
    </div>
  );
};

// 1. 不能访问 函数式 组件的 ref , 因为没有
// 2. 函数式组件 可以访问其他 有 instance 的组件, 需要通过回调函数
