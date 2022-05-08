# @satumjs/midware-single-spa

<p>
  <a href="https://www.npmjs.com/package/@satumjs/midware-single-spa">
    <img src="https://img.shields.io/npm/v/@satumjs/midware-single-spa.svg" alt="version"/>
  </a>
  <a href="https://www.npmjs.com/package/@satumjs/midware-single-spa">
    <img src="https://img.shields.io/npm/dt/@satumjs/midware-single-spa.svg" alt="downloads"/>
  </a>
  <a href="https://github.com/satumjs/midware-single-spa/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@satumjs/midware-single-spa.svg" alt="license"/>
  </a>
  <a href="https://gitter.im/satumjs/midware-single-spa">
    <img src="https://badges.gitter.im/satumjs/midware-single-spa.svg" alt="gitter">
  </a>
  <a href="https://travis-ci.com/github/satumjs/midware-single-spa">
    <img src="https://api.travis-ci.com/satumjs/midware-single-spa.svg?branch=master" alt="travis"/>
  </a>
  <a href="https://coveralls.io/github/satumjs/midware-single-spa?branch=master">
    <img src="https://coveralls.io/repos/github/satumjs/midware-single-spa/badge.svg?branch=master" alt="coveralls"/>
  </a>
</p>

single-spa midware for satum-micro

## Usage

```js
import midwareSingleSpa from '@satumjs/midware-single-spa';

satumCore.use(midwareSingleSpa);

// use options
// satumCore.use(midwareSingleSpa, { timeout: 5 * 60 * 1000, urlRerouteOnly: true });
```
