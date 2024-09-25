// TIMER
//---------------------------

// Create a Timer Class
var Timer = function(delayMs, callbackFunc) {
	this.delayMs = delayMs;
	this.callbackFunc = callbackFunc;
	this.timerState = 'new';
}

// Starts the timer
Timer.prototype.start = function() {
	if( this.tmr ) return;

	var self = this;
	this.timerState = 'running';
	this.tmr = setInterval(function() { 
		console.log('timer running');
		self._handleTmr(); 
	}, this.delayMs);
}

// Cancels the timer
Timer.prototype.cancel = function() {
	if( ! this.tmr ) return;
	console.log('timer canceled');

	clearInterval(this.tmr);
	this.tmr = null;
	this.timerState = 'canceled';
}

// Runs the callback
Timer.prototype._handleTmr = function() {
	this.callbackFunc();
	this.cancel();
}
