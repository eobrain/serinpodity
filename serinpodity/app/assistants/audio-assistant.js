// -*- tab-width:4 -*-
/*
 * Copyright (c) 2010 Eamonn O'Brien-Strain, eob@well.com
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which is available at http://www.eclipse.org/legal/epl-v10.html
 */

/*jslint devel: true */

/* declare globals to keep JSLint happy */
var MojoLoader, Audio;


function AudioAssistant() {
	/* this is the creator function for your scene assistant object. It will be passed all the 
	   additional parameters (after the scene name) that were passed to pushScene. The reference
	   to the scene controller (this.controller) has not be established yet, so any initialization
	   that needs the scene controller should be done in the setup function below. */
}

AudioAssistant.prototype.setup = function () {
	/* this function is for setup tasks that have to happen when the scene is first created */

	this.audioObject = new Audio();
    this.audioObject.src = "http://downloads.bbc.co.uk/podcasts/radio/newspod/newspod_20100716-1702b.mp3";

	// Load the MediaExtension library
	this.libs = MojoLoader.require({ name: "mediaextension", version: "1.0"});
 
	// Instantiate the MediaExtension object
	this.extObj = this.libs.mediaextension.MediaExtension.getInstance(this.audioObject);

		
	/* use Mojo.View.render to render view templates and add them to the scene, if needed */
	
	/* setup widgets here */
	
	/* add event handlers to listen to events from widgets */
};

AudioAssistant.prototype.activate = function (event) {
	/* put in event handlers here that should only be in effect when this scene is active. For
	   example, key handlers that are observing the document */
	this.controller.stageController.getAppController().playSoundNotification("vibrate", "");
	this.audioObject.play();
};

AudioAssistant.prototype.deactivate = function (event) {
	/* remove any event handlers you added in activate and do any other cleanup that should happen before
	   this scene is popped or another scene is pushed on top */
	this.controller.stageController.getAppController().playSoundNotification("vibrate", "");
};

AudioAssistant.prototype.cleanup = function (event) {
	/* this function should do any cleanup needed before the scene is destroyed as 
	   a result of being popped off the scene stack */
};
