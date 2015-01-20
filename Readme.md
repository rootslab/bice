### Bice

[![NPM VERSION](http://img.shields.io/npm/v/bice.svg?style=flat)](https://www.npmjs.org/package/bice)
[![CODACY BADGE](https://img.shields.io/codacy/b18ed7d95b0a4707a0ff7b88b30d3def.svg?style=flat)](https://www.codacy.com/public/44gatti/bice)
[![CODECLIMATE](http://img.shields.io/codeclimate/github/rootslab/bice.svg?style=flat)](https://codeclimate.com/github/rootslab/bice)
[![CODECLIMATE-TEST-COVERAGE](https://img.shields.io/codeclimate/coverage/github/rootslab/bice.svg?style=flat)](https://codeclimate.com/github/rootslab/bice)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/rootslab/bice#mit-license)

[![TRAVIS CI BUILD](http://img.shields.io/travis/rootslab/bice.svg?style=flat)](http://travis-ci.org/rootslab/bice)
[![BUILD STATUS](http://img.shields.io/david/rootslab/bice.svg?style=flat)](https://david-dm.org/rootslab/bice)
[![DEVDEPENDENCY STATUS](http://img.shields.io/david/dev/rootslab/bice.svg?style=flat)](https://david-dm.org/rootslab/bice#info=devDependencies)
[![NPM DOWNLOADS](http://img.shields.io/npm/dm/bice.svg?style=flat)](http://npm-stat.com/charts.html?package=bice)

[![NPM GRAPH1](https://nodei.co/npm-dl/bice.png)](https://nodei.co/npm/bice/)

[![NPM GRAPH2](https://nodei.co/npm/bice.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bice/)

[![status](https://sourcegraph.com/api/repos/github.com/rootslab/bice/.badges/status.png)](https://sourcegraph.com/github.com/rootslab/bice)
[![views](https://sourcegraph.com/api/repos/github.com/rootslab/bice/.counters/views.png)](https://sourcegraph.com/github.com/rootslab/bice)
[![views 24h](https://sourcegraph.com/api/repos/github.com/rootslab/bice/.counters/views-24h.png)](https://sourcegraph.com/github.com/rootslab/bice)

> __Bice__, a tiny module that offers a fast way to swap arbitrary length sequences of bytes within a Buffer, using only the Buffer itself and the bitwise __XOR__ operator.

###Install

```bash
$ npm install bice [-g]
```

> __require__ returns an helper hash/obj.

```javascript
var Bice  = require( 'bice' );
```
###Run Tests

> __to run all test files, install devDependecies:__

```bash
 $ cd bice/
 # install or update devDependecies 
 $ npm install --dev
 # run tests
 $ npm test
```
> __to execute a single test file simply do__:

```bash
 $ node test/file-name.js
```

### Methods

> Arguments within [ ] are optional.

```javascript
/*
 * Swap 2 sequences in a Buffer, swapping 1 byte at the time.
 * It returns true if swapping was successfull, false otherwise.
 *
 * NOTE:
 * - sequences shouldn't overlap.
 * - sequences shouldn't overflow Buffer length.
 * - sequence 1 starts from pos1 and ends to pos1 + bytes - 1.
 * - sequence 2 starts from pos2 and ends to pos2 + bytes - 1.
 * - pos1 could be > than pos2, the order of indexes doesn't matter.
 */
Bice#swap : function ( Buffer buffer, Number pos1, Number pos2 , Number bytes ) : Boolean

/*
 * Reverse an entire Buffer or a part of it, swapping 1 byte at the time.
 * It returns true if reversing was successfull, false otherwise.
 */
Bice#reverse : function ( Buffer buffer [, Number pos [, Number bytes ] ] ) : Boolean

/*
 * Compares values from 2 buffers.
 * Optionally, it accepts the number of bytes to read; if it is not specified,
 * it compares a number of bytes equals to the length of the smaller Buffer.
 *
 * It returns:
 *
 * -  0 when b1 === b2
 * - +1 when b1 > b2
 * - -1 when b1 < b2
 * - null otherwise (read index overflow, 0-length Buffers, ..)
 *
 */
Bice#compare : function ( Buffer b1, Number p1, Buffer b2, Number p2 [, Number bytes ] ) : Number
```

### MIT License

> Copyright (c) 2014 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![GA](https://ga-beacon.appspot.com/UA-53998692-1/bice/Readme?pixel)](https://github.com/igrigorik/ga-beacon)