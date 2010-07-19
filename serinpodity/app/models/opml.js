/* -*- tab-width:4 -*- */

/*
 * Copyright (c) 2010 Eamonn O'Brien-Strain, eob@well.com
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which is available at http://www.eclipse.org/legal/epl-v10.html
 */

/*jslint devel: true */
/* declare globals to keep JSLint happy */
var Ajax, DOMParser;   //framework
var Feed;  //model

/** Initialize from an OPML file.  This must be used as follows:

  newOpml(function (opml) {
    //Use opml object
  }); 

*/
function readOpml(constructed) {

	var req, opml, theFeeds;
	theFeeds = [];

	/** @class A list of podcast feeds */
	opml = {
		/** The list of feeds in this OPML file */
		feeds: function () {
			return theFeeds;
		}
	};


	
	req = new Ajax.Request('file:Podcasts.opml', {
		method: 'get',
		onSuccess: function (transport) {
			var xml, outlines, i, n;
			console.log("text=" + transport.responseText);
			xml = (new DOMParser()).parseFromString(transport.responseText, "text/xml");
			console.log("xml=" + xml);
			outlines = xml.getElementsByTagName('outline');
			n = outlines.length;
			console.log('n=' + n);
			for (i = 0; i < n; i += 1) {
				console.log("feed=" + outlines[i].getAttribute('xmlUrl'));
				theFeeds[i] = new Feed(outlines[i].getAttribute('xmlUrl'),  
									   outlines[i].getAttribute('xmlUrl'));
			}
			constructed(opml);
		},
		onFailure: function () {
			throw "Cannot open OPML file";
		}
	});
	
}
	