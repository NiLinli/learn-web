import React from 'react';
import { MyComponent } from './MyComponent';
import { CustomTextInput } from './CustomTextInput';
import { AutoFocusTextInput } from './AutoFocusTextInput';
import { FunctionnalCustomTextInput } from './Parent';
import { CallbackCustomTextInput } from './CallbackCustomTextInput';

export const RefDemoWrapper = () => (
  <div>
    <MyComponent />
    <CustomTextInput />
    <AutoFocusTextInput />
    <FunctionnalCustomTextInput />
    <CallbackCustomTextInput />
  </div>
);
