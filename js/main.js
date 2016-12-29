(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _foo = require('./modules/foo.js');

var _bar = require('./modules/bar.js');

console.log((0, _foo.foo)());
console.log((0, _bar.bar)());

},{"./modules/bar.js":2,"./modules/foo.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bar = function bar() {
	return 'bar';
};

exports.bar = bar;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var foo = function foo() {
	return 'foo';
};

exports.foo = foo;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZXM2XFxtYWluLmpzIiwianNcXGVzNlxcbW9kdWxlc1xcYmFyLmpzIiwianNcXGVzNlxcbW9kdWxlc1xcZm9vLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7QUFFQSxRQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksZUFBWjs7Ozs7Ozs7QUNKQSxJQUFJLE1BQU0sU0FBTixHQUFNLEdBQU07QUFDZixRQUFPLEtBQVA7QUFDQSxDQUZEOztRQUlRLEcsR0FBQSxHOzs7Ozs7OztBQ0pSLElBQUksTUFBTSxTQUFOLEdBQU0sR0FBTTtBQUNmLFFBQU8sS0FBUDtBQUNBLENBRkQ7O1FBSVEsRyxHQUFBLEciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHtmb299IGZyb20gJy4vbW9kdWxlcy9mb28uanMnO1xuaW1wb3J0IHtiYXJ9IGZyb20gJy4vbW9kdWxlcy9iYXIuanMnO1xuXG5jb25zb2xlLmxvZyhmb28oKSk7XG5jb25zb2xlLmxvZyhiYXIoKSk7XG4iLCJsZXQgYmFyID0gKCkgPT4ge1xuXHRyZXR1cm4gJ2Jhcic7XG59XG5cbmV4cG9ydCB7YmFyfTtcbiIsImxldCBmb28gPSAoKSA9PiB7XG5cdHJldHVybiAnZm9vJztcbn1cblxuZXhwb3J0IHtmb299O1xuIl19
