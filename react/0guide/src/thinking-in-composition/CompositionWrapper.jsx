import React from 'react';
import SignUpDialog from './specialization/SignUpDialog';
import WelcomeDialog from './specialization/WelcomeDialog';

function CompositonWrapper() {
  return (
    <div>
      <SignUpDialog />
      <WelcomeDialog />
    </div>
  );
}

export default CompositonWrapper;

// 组合 (定制 props) -- Component 之间的代码重用
// 新建一个新的 Component
// 给这个新的 Component  添加 method
// 定制 原 Component props

// Dialog 包含 FancyBorder : 是一种包含关系
// SignUpDialog 为特殊的 Dialaog

// 组合 wrapper C o
