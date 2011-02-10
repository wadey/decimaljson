# DecimalJSON

Very simple JSON parser that preserves the full precision of numbers. It
is a fork of `json_parse.js` from
[JSON-js](https://github.com/douglascrockford/JSON-js).

Numbers will be parsed into a Decimal class, with `.string` and
`.number` attributes

Example:

    > var array = DJSON.parse('[1.0000000000000001]')
    > array
    [ Decimal(1.0000000000000001) ]
    > array[0].string
    '1.0000000000000001'
    > array[1].number
    1

## TODO

- Try to make a native module for Node.js that uses a modified version of the
  C++ JSON parser. This is harder than I expected as JSON.parse is implemented
  by using a special case of the V8 JS parser. A performance test puts DJSON
  at 50% the speed of V8's JSON.parse.
- Implement a `DJSON.stringify` that isn't lossy (possibly by using the native
  `JSON.stringify` with a `replacer`)
