
//var gpio = require("pi-gpio");

// gpio.open(12, "output", function(err) { // Open pin 16 for output
//     gpio.write(12, 1, function() { // Set pin 16 high (1)
//         gpio.close(12); // Close pin 16
//     });
// });

var Ping = require('./lib/ping');
Ping.ping();
Ping.flash();
