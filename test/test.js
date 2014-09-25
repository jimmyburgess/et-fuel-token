/* global before, after, describe, it */
'use strict';

var express = require('express');
var origFn = express.session.Session.prototype.save;

var should				= require( 'chai' ).should();
var expect				= require( 'chai' ).expect;
var fuelTokenMiddleware = require('../lib/fuel-token-middleware')({
	'test': {
		appId: '12345',
		clientId: '12345',
		clientSecret: '12345',
		appSignature: '12345',
		authUrl: 'https://auth-qa1s1.exacttargetapis.com/v1/requestToken?legacy=1',
		legacyRestHost: 'rest.s1.qa1.exacttarget.com',
		fuelapiRestHost: 'www.exacttargetapis.com',
		baseUrl: 'http://rest.s1.qa1.exacttarget.com/rest/'
	}
});


describe( 'token middleware', function() {

	it( 'should override express session save', function (done) {
		expect(origFn).to.not.equal(express.session.Session.prototype.save);
		done();
	});


	it( 'should exist', function( done ) {
		should.exist( fuelTokenMiddleware );
		done();
	});

});