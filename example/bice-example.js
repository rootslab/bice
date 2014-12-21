var log = console.log
    , Bice = require( 'bice' )
    , b = new Buffer( [ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ] )
    ;

log( '\n- original order:', b );

Bice.reverse( b );

log( '\n- reverted order:', b );

Bice.swap( b, 0, 5, 5 );

log( '\n- swapped [0-4]<->[5-9]:', b, '\n' );