/*
 * Bice#reverse test, reverse an entire buffer.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Bice = require( '../' )
        , numbers = [ 0, 11, 20, 36, 44, 54, 69, 72, 83, 255 ]
        , b = new Buffer( numbers )
        , r = new Buffer( numbers.reverse() )
        ;

log( '- fill a Buffer with %d values within [0-255]:', numbers.length, b );

log( '\n- reverse Buffer values/bytes.' );
var bool = Bice.reverse( b );

log( '\n- check operation result:', bool );
assert.ok( bool );

log( '\n- check values inside Buffer:', b );
assert.deepEqual( b, r );

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();