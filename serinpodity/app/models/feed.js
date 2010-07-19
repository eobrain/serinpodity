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
var Show;  //model

/** Initialize
@class A podcast feed */

function Feed(name, url, constructed) {

	var self, req, theShows;

	self = this;
	theShows = [];

    req = new Ajax.Request(url, {
		method: 'get',
		onSuccess: function (transport) {
			var xml, items, i, n, item;
			console.log("text=" + transport.responseText);
			xml = (new DOMParser()).parseFromString(transport.responseText, "text/xml");
			console.log("xml=" + xml);
			items = xml.getElementsByTagName('item');
			n = items.length;
			console.log('n=' + n);
			for (i = 0; i < n; i += 1) {
				item  = items[i];
				theShows[i] = new Show(
					item.getElementsByTagName('title')[0].firstChild.nodeValue,
					item.getElementsByTagName('description')[0].firstChild.nodeValue,
					item.getElementsByTagName('pubDate')[0].firstChild.nodeValue,
					item.getElementsByTagName('enclosure')[0].getAttribute('url')
				);
			}
			constructed(self);
		},
		onFailure: function () {
			console.log("Cannot open feed for " + name);
		}

	});
}
