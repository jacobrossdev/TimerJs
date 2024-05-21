# TimerJs

Example usage:

```
let interval_duration = 1500;

// We only want this to run after interval_duration
functin do_something(){
  console.log('timed/delayed trigger fired');
}

// We set setup the timer and callback
var timer = new Timer( interval_duration, do_something );

// create a handler callback for keyup
function keyup_handler(){
  timer.cancel();
  timer.start();
}

// This is the input we are waiting for users to pause typing
$('#example-input').on('keyup', keyup_handler);

```
