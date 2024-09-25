# TimerJs

Example usage:

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Simple HTML Server
	</title>
	<style>
		html, body {padding: 0; margin: 0;}
		html {height: 100%;}
		body {min-height: 100%; font-family: sans-serif;}
		.layout {
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
		}
		label { font-size: 24px; font-weight: bold;}
		input { height: 60px; font-size: 40px; margin-top: 10px; color: #666; padding: 8px 12px;}
		.message {padding: 15px 0; font-size: 18px; }
	</style>
</head>
<body>

	<div class="layout">
		<div class="interaction-container">
			<div class="input-container">
				<label for="input">Give me input:<br />
				<input type="text" id="input"></label>
			</div>		
			<div class="message"></div>
		</div>
	</div>

	<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
	<script>
		
		jQuery(document).ready(function($){

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
				$('.interaction .message').html('Processing input');
				this.callbackFunc();
				this.cancel();
			}

			// Create a new Timer handler
			var timer = new Timer(1500, process_input);

			// Run AJAX or whatever you want after the user is finished typing
			function process_input(){
				$('.interaction-container .message').html('Input has been processed.');
			}

			// Run this in the input keyup event
			function keyup_handler(){
				$('.interaction-container .message').html('Listening to input...');
				timer.cancel();
				timer.start();
			}

			$('#input').on('keyup', function(){
				keyup_handler()
			})
		})
	</script>
</body>
</html>

```
