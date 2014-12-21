/*
 * Bice#compare test.
 */

exports.test  = function ( done, assertions ) {
    var log = console.log
        , exit = typeof done === 'function' ? done : function () {}
        , assert = assertions || require( 'assert' )
        , Bice = require( '../' )
        , compare = Bice.compare
        , numbers1 = [ 255, 11, 20, 69, 44, 54, 69, 72, 11, 255 ]
        , numbers2 = [ 255, 11, 20 ]
        , b1 = new Buffer( numbers1 )
        , b2 = new Buffer( numbers2 )
        , r1 = new Buffer( numbers1.reverse() )
        , i = 0
        ;

    log( '- fill 3 Buffers with test data.' );

    log( '\n- b1:', b1 );
    log( '- r1:', r1 );
    log( '- b2:', b2 );

    log( '\n- running comparison tests..' );

    assert.equal( compare( b1, 0, r1, 0, 3 ), -1 );
    assert.equal( compare( r1, 0, b1, 0, 3 ), 1 );

    assert.equal( compare( b1, 0, r1, 0, 2 ), 0 );
    assert.equal( compare( r1, 0, b1, 0, 2 ), 0 );

    assert.equal( compare( b1, 8, r1, 8 ), 0 );
    assert.equal( compare( b1, 8, r1, 8, 2 ), 0 );
    assert.equal( compare( r1, 8, b1, 8 ), 0 );
    assert.equal( compare( r1, 8, b1, 8, 2 ), 0 );


    assert.equal( compare( b2, 0, b1, 0, 3 ), 0 );
    assert.equal( compare( b2, 0, b1, 0 ), 0 );
    assert.equal( compare( b1, 0, b2, 0, 3 ), 0 );
    assert.equal( compare( b2, 0, b1, 0 ), 0 );

    assert.equal( compare( b2, 0, b2, 0 ), 0 );

    assert.equal( compare( b1, 0, r1, 0 ), -1 );
    assert.equal( compare( r1, 0, b1, 0 ), 1 );

    assert.equal( compare( b1, 6, r1, 6 ), 1 );
    assert.equal( compare( r1, 6, b1, 6 ), -1 );

    assert.equal( compare( null, 0, b1, 0 ), null );
    assert.equal( compare( b1, 0, null, 0 ), null );

    assert.equal( compare( b1, 0, b2, 0, 4 ), null );

    assert.equal( compare( b2, 0, b1, 0, 3 ), 0 );
    assert.equal( compare( b2, 0, b1, 3, 3 ), 1 );
    assert.equal( compare( b2, 0, b1, 6, 3 ), 1 );

    exit();
};

// single test execution with node
if ( process.argv[ 1 ] === __filename  ) exports.test = exports.test();