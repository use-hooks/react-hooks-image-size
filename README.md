# react-hooks-image-size

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Build Status][travis-image]][travis-url]

Custom React Hooks for image natural size.

## Install

>**Note:** Make sure that you have installed the correct version of `react(>= v16.8.0)` and `react-dom(>= v16.8.0)`.

### npm

```bash
npm install --save @use-hooks/image-size
```

### yarn

```bash
yarn add @use-hooks/image-size
```

## API

### Params

```js
/**
 * Params
 * @param {string} url - The image url
 */
```

### Returns

```js
/**
 * Returns
 * @param {array} size - The image size [width, height]
 */
```

## Usage

```js
import React from 'react';

import useImageSize from '@use-hooks/image-size';

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

```

[Live Show](https://use-hooks.github.io/react-hooks-image-size/)

## Development

> Node >= v8 LTS

 - Clone the project to local disk
 - `npm install`
 - `npm start`

## License

MIT

> Generated by [create-react-hooks](https://github.com/use-hooks/create-react-hooks).

 [npm-image]: https://img.shields.io/npm/v/@use-hooks/image-size.svg?style=flat-square
 [npm-url]: https://npmjs.org/package/@use-hooks/image-size
 [download-image]: https://img.shields.io/npm/dm/@use-hooks/image-size.svg?style=flat-square
 [download-url]: https://npmjs.org/package/@use-hooks/image-size
 [travis-url]: https://travis-ci.com/use-hooks/react-hooks-image-size
 [travis-image]: https://img.shields.io/travis/com/use-hooks/react-hooks-image-size.svg?style=flat-square
