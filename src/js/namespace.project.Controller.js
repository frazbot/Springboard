goog.provide('namespace.project.Controller');

goog.require('namespace.project.Model');
goog.require('namespace.project.Command');
goog.require('namespace.project.Notification');

goog.require('Logger');
goog.require('Dispatcher');

/**
 * Controller component of the Model View Controller implementation
 * @param {*} model The data Model for this Controller
 * @constructor
 */
namespace.project.Controller = function( model ) {
	Dispatcher.call(this);
	
	this._model = model;
	
	/**
	 * @private
	 * @type {number}
	 */
	this._timer;
}

goog.inherits(namespace.project.Controller, Dispatcher);

/**
 * Notify sent from view
 * @param {String} type The type of notification
 * @param {Object} data The data sent with notification
 */
namespace.project.Controller.prototype.command = function(type,data) {
	switch(type)
	{
		case(namespace.project.Command.START_TIMER):
			this.startTimer();
		break;
		case(namespace.project.Command.STOP_TIMER):
			this.stopTimer();
		break;
	}
}

/**
 * Starts the timer running
 */
namespace.project.Controller.prototype.startTimer = function() {
	
	var self = this;
	
	var tick = function() {
		self._model.setTime( new Date() );
		self.dispatch(namespace.project.Notification.TIME_UPDATED);
	}
	
	this._timer = setInterval( tick, 1000 );
	tick();
}

/**
 * Stops the current time from running
 */
namespace.project.Controller.prototype.stopTimer = function() {
	clearInterval( this._timer );
}