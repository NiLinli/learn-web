import React from 'react';
import { AutoFocusTextInput } from './AutoFocusTextInput';
import { FunctionnalCustomTextInput } from './FunctionnalCustomTextInput';
import { CallbackCustomTextInput } from './CallbackCustomTextInput';

const RefDemoWrapper = () => (
  <div>
    <h4>createRef 方式 v16.3+</h4>
    <AutoFocusTextInput />
    <h4>callback 方式定义 v16.3-</h4>
    <CallbackCustomTextInput />
    <h4>函数式组件自身无法通过 ref 访问, 但是可以通过 ref 访问子组件</h4>
    <FunctionnalCustomTextInput />
  </div>
);

export default RefDemoWrapper;
