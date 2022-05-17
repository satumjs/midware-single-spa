# @satumjs/midware-single-spa

[![NPM version](https://img.shields.io/npm/v/@satumjs/midware-single-spa.svg)](https://www.npmjs.com/package/@satumjs/midware-single-spa) [![NPM downloads](https://img.shields.io/npm/dt/@satumjs/midware-single-spa.svg)](https://www.npmjs.com/package/@satumjs/midware-single-spa) [![LICENSE](https://img.shields.io/npm/l/@satumjs/midware-single-spa.svg)](https://github.com/satumjs/midware-single-spa/blob/master/LICENSE) <!-- [![gitter](https://badges.gitter.im/satumjs/midware-single-spa.svg)](https://gitter.im/satumjs/midware-single-spa) --> [![CircleCI](https://circleci.com/gh/satumjs/midware-single-spa/tree/master.svg?style=svg)](https://circleci.com/gh/satumjs/midware-single-spa/tree/master) [![coveralls coverage](https://coveralls.io/repos/github/satumjs/midware-single-spa/badge.svg?branch=master)](https://coveralls.io/github/satumjs/midware-single-spa?branch=master) <!-- [![Install size](https://badgen.net/packagephobia/install/@satumjs/midware-single-spa)](https://packagephobia.now.sh/result?p=@satumjs/midware-single-spa) [![brotli](https://badgen.net/bundlephobia/minzip/@satumjs/midware-single-spa)](https://bundlephobia.com/result?p=@satumjs/midware-single-spa) -->

single-spa midware for satum-micro

## Usage

```js
import midwareSingleSpa from '@satumjs/midware-single-spa';

satumCore.use(midwareSingleSpa);

// use options
// satumCore.use(midwareSingleSpa, { timeout: 5 * 60 * 1000, urlRerouteOnly: true });
```
