import React from 'react';
import OriginWrapper from './origin/OriginWrapper';
import HocWrapper from './hoc/HocWrapper';
import './data-source';

export default function HocDemo() {
  return (
    <div>
      <OriginWrapper />
      <HocWrapper />
    </div>
  );
}
