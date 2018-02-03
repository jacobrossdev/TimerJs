// TIMER
//---------------------------

var Timer = function(delayMs, callbackFunc) {

  this.delayMs = delayMs;
  this.callbackFunc = callbackFunc;
  this.timerState = 'new';
  this.paused = false;
}

Timer.prototype.start = function() {
    if( this.tmr ) return;

    var self = this;
    this.timerState = 'running';
    this.tmr = setInterval(function() { self._handleTmr(); }, this.delayMs);
}

Timer.prototype.pause = function(){

	this.paused = true;
	console.log('timer paused');
}

Timer.prototype.unpause = function(){

	this.paused = false;
	console.log('timer unpaused');
}

Timer.prototype.cancel = function() {
    if( ! this.tmr ) return;

    clearInterval(this.tmr);
    this.tmr = null;
    this.timerState = 'canceled';
}

Timer.prototype._handleTmr = function() {
    this.tmr = null;
    this.callbackFunc();
}
