# DecimalJSON

Very simple JSON parser that preserves the full precision of numbers. It
is a fork of `json_parse.js` from
[JSON-js](https://github.com/douglascrockford/JSON-js). This module should
work in browsers and any CommonJS system (tested with Node.js)

Numbers will be parsed into a Decimal class, with `.string` and
`.number` attributes

## Installation

For Node.js:

    npm install decimaljson

For browser use:

    <script src='decimaljson.js' />
    <!-- DJSON will be available as a global now -->

## Example

    // Only for Node.js
    > var DJSON = require('decimaljson')

    > var array = DJSON.parse('[1.0000000000000001]')
    > array
    [ Decimal(1.0000000000000001) ]
    > array[0].string
    '1.0000000000000001'
    > array[1].number
    1

## Benchmarks

Benchmarks for `DJSON.parse` and `DJSON.stringify` are provided. Here are some
example results from my laptop:

    node 0.2.6 (x86, v8 2.3.8):
      - JSON.parse is 2x faster than DJSON.parse
      - JSON.stringify and DJSON.stringify are the same speed

    node 0.4.1 (x86, v8 3.1.5):
      - JSON.parse is 4.5x faster than DJSON.parse
      - JSON.stringify is 3x faster than DJSON.stringify

## Changelog

- 0.2.0: Added DJSON.stringify. Added benchmarks.
- 0.1.0: Initial release, DJSON.parse.

## TODO

- Try to make a native module for Node.js that uses a modified version of the
  v8 JSON parser. This is harder than I expected as JSON.parse is implemented
  by using a special case of the V8 JS parser.
