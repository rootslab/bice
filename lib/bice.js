/*
 * Bice, a tiny module that offers a fast way to swap arbitrary length
 * sequences of bytes within a Buffer, using only the Buffer itself
 * and the bitwise XOR operator.
 *
 * Copyright(c) 2014 Guglielmo Ferri <44gatti@gmail.com>
 * MIT Licensed
 */

exports.version = require( '../package' ).version;
exports.Bice = ( function () {
    var log = console.log
        , abs = Math.abs
        , min = Math.min
        , isBuffer = Buffer.isBuffer
        , bcompare = Buffer.compare
        // light check for Buffer#compare existence (iojs)
        , notlegacy = typeof( Buffer.compare ) === 'function'
        ;

    return {

        swap : function ( buffer, bpos1, bpos2, bytes ) {
            var b = isBuffer( buffer ) ? buffer : new Buffer( 0 )
                , blen = b.length
                , len = abs( + bytes )
                , p1 = abs( + bpos1 )
                , p2 = abs( + bpos2 )
                , s1 = min( p1, p2 )
                , s2 = s1 === p2 ? p1 : p2
                , e1 = s1 + len - 1
                , e2 = s2 + len - 1
                , ok = ( s1 < s2 ) && ( e1 < s2 ) && ( e1 < blen ) && ( e2 < blen )
                , i = s1
                , j = s2
                ;
            if ( ! ok ) return false;
            for ( ; i <= e1 ; ++i, ++j ) ( b[ i ] ^= b[ j ] ) & ( b[ j ] ^= b[ i ] ) & ( b[ i ] ^= b[ j ] );
            return true;
        }

        , reverse : function ( buffer, bpos, bytes ) {
             var b = isBuffer( buffer ) ? buffer : new Buffer( 0 )
                , blen = b.length
                , s = abs( + bpos ) || 0
                , len = abs( + bytes ) || blen - s
                , e = s + len - 1
                , ok = ( s < e ) && ( e < blen )
                , i = s
                , j = e
                ;
            if ( ! ok ) return false;
            // swap values, except for the middle element, if it exists, when i === j
            for ( ; i < j ; ++i, --j ) ( b[ i ] ^= b[ j ] ) & ( b[ j ] ^= b[ i ] ) & ( b[ i ] ^= b[ j ] );
            return true;
        }

        , compare : function ( buf1, bpos1, buf2, bpos2, bytes ) {
            var b1 = isBuffer( buf1 ) ? buf1 : new Buffer( 0 )
                , b2 = isBuffer( buf2 ) ? buf2 : new Buffer( 0 )
                , blen1 = b1.length
                , blen2 = b2.length
                , s1 = abs( + bpos1 ) || 0
                , s2 = abs( + bpos2 ) || 0
                , len = abs( + bytes ) || min( blen1 - s1, blen2 - s2 )
                , e1 =  s1 + len - 1
                , e2 =  s2 + len - 1
                , ok = blen1 && blen2 && ( e1 < blen1 ) && ( e2 < blen2 )
                , n1 = null
                , n2 = null
                ;
            if ( ! ok ) return null;
            // use memcmp, slicing is too slow
            // if ( notlegacy ) return bcompare( buf1.slice( s1, e1 + 1 ), buf2.slice( s2, e2 + 1 ) );
            n1 = b1[ s1 ];
            n2 = b2[ s2 ];
            for ( ; s1 <= e1; n1 = b1[ ++s1 ], n2 = b2[ ++s2 ] )
                if ( n1 > n2 ) return 1;
                else if ( n1 < n2 ) return -1;
            return 0;
        }

        // , crossover : function ( buf1, buf2, bpos1, bpos2, bytes ) {}

    };

} )();