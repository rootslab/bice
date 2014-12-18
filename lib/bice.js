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
                , s = abs( + bpos || 0 )
                , len = abs( + bytes || blen - s )
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

        // , crossover : function ( buf1, buf2, bpos1, bpos2, bytes ) {}

    };

} )();