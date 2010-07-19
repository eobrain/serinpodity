/* -*- tab-width:4 -*- */

/*
 * Copyright (c) 2010 Eamonn O'Brien-Strain, eob@well.com
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which is available at http://www.eclipse.org/legal/epl-v10.html
 */

/*jslint devel: true */
/* declare globals to keep JSLint happy */
var describe, it, expect, spyOn, jasmine;  //jasmine test framework  
var Opml;                //code being tested

describe('Opml', function () {

	//Mojo   = jasmine.createSpyObj('Mojo', ['requireProperty', 'requireFunction']);
	
    it('can read from file', function () {
		readOpml(function (opml) {
			expect(opml.feeds().length).toEqual(7);
		}); 
    });

    it('can read from file', function () {
		readOpml(function (opml) {
			expect(opml.feeds().length).toEqual(7);
		}); 
    });


});
