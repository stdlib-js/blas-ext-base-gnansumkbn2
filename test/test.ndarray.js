/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var floor = require( '@stdlib/math-base-special-floor' );
var gnansumkbn2 = require( './../lib/ndarray.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gnansumkbn2, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gnansumkbn2.length, 4, 'has expected arity' );
	t.end();
});

tape( 'the function calculates the sum of strided array elements (ignoring NaN values)', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 0.0, NaN, 3.0, 0.0, -3.0, 3.0 ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	x = [ 1.0, -2.0, -4.0, NaN, 5.0, 0.0, 3.0 ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 3.0, 'returns expected value' );

	x = [ -4.0, NaN, -4.0 ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, -8.0, 'returns expected value' );

	x = [ NaN, 4.0 ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 4.0, 'returns expected value' );

	x = [ NaN, NaN ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ NaN ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	x = [ 1.0, 1.0e100, 1.0, -1.0e100 ];
	v = gnansumkbn2( x.length, x, 1, 0 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `0.0`', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = gnansumkbn2( 0, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	v = gnansumkbn2( -1, x, 1, 0 );
	t.strictEqual( v, 0.0, 'returns expected value' );

	t.end();
});

tape( 'if provided an `N` parameter equal to `1`, the function returns the first indexed element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = gnansumkbn2( 1, x, 1, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports a `stride` parameter', function test( t ) {
	var N;
	var x;
	var v;

	x = [
		1.0,  // 0
		2.0,
		2.0,  // 1
		-7.0,
		-2.0, // 2
		3.0,
		4.0,  // 3
		2.0,
		NaN,  // 4
		NaN
	];

	N = floor( x.length / 2 );
	v = gnansumkbn2( N, x, 2, 0 );

	t.strictEqual( v, 5.0, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative `stride` parameter', function test( t ) {
	var N;
	var x;
	var v;

	x = [
		NaN,  // 4
		NaN,
		1.0,  // 3
		2.0,
		2.0,  // 2
		-7.0,
		-2.0, // 1
		3.0,
		4.0,  // 0
		2.0
	];

	N = floor( x.length / 2 );
	v = gnansumkbn2( N, x, -2, 8 );

	t.strictEqual( v, 5.0, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` parameter equal to `0`, the function returns the first indexed element', function test( t ) {
	var x;
	var v;

	x = [ 1.0, -2.0, -4.0, 5.0, 3.0 ];

	v = gnansumkbn2( x.length, x, 0, 0 );
	t.strictEqual( v, 1.0, 'returns expected value' );

	t.end();
});

tape( 'the function supports an `offset` parameter', function test( t ) {
	var N;
	var x;
	var v;

	x = [
		2.0,
		1.0,  // 0
		2.0,
		-2.0, // 1
		-2.0,
		2.0,  // 2
		3.0,
		4.0,  // 3
		NaN,
		NaN   // 4
	];
	N = floor( x.length / 2 );

	v = gnansumkbn2( N, x, 2, 1 );
	t.strictEqual( v, 5.0, 'returns expected value' );

	t.end();
});