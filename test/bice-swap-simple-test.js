/*
 * Bice#swap test, mix pieces of a Buffer.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Bice = require( '../' )
        , swap = Bice.swap
        , numbers = [ 0, 11, 20, 36, 44, 54, 69, 72, 83, 255 ]
        , b = new Buffer( numbers )
        , t = new Buffer( numbers )
        , tlen = t.length
        , i = 0
        ;

log( '- testing swap with test buffer :', t );

for ( ; i < tlen; i += 4 ) swap( t, i, i + 2, 2 );

log( '- check 2-bytes swap result:', t );

assert.deepEqual( t, new Buffer( [ 20, 36, 0, 11, 69, 72, 44, 54, 83, 255 ] ) );

for ( i = 0; i < tlen; i += 4 ) swap( t, i, i + 2, 2 );

log( '- check 2-bytes swap result:', t );

assert.deepEqual( b, t );

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();