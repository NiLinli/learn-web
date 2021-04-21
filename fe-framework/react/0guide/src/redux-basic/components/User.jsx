import * as React from 'react';

const User = ({ name, age, onChangeName, onChangeAge, onResetState }) => (
  <div>
    <p>{name}</p>
    <p>{age}</p>
    <div onClick={() => onChangeName('nixixi123')}>改变名字</div>
    <div onClick={() => onChangeAge('80')}>改变密码</div>
  </div>
);

export default User;
