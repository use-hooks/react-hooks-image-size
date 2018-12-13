import React from 'react';

import useImageSize from '../src';

export default function App() {
  const url = 'https://cdn.int64ago.org/ogk39i54.png';
  const [width, height] = useImageSize(url);

  return (
    <div>
      <h2>DEMO of <span style={{ color: '#F44336' }}>@use-hooks/image-size</span></h2>
      <div>
        <img src={url} width={100} height={100} alt="" />
        <div>Natural size: {width} x {height}</div>
      </div>
    </div>
  );
}
