import React from 'react';

export default function Columns() {
  return (
    // 不影响结构
    // <React.Fragment key="123">
    //   <td>Hello</td>
    //   <td>World</td>
    // </React.Fragment>

    // 简写
    <>
      <td>Hello</td>
      <td>World</td>
    </>
  );
}
