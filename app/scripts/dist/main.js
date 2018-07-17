(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');

    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({ message: 'pow!' });
        _wsClient2.default.sendMessage(message.serialize());
    });

    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });

    _wsClient2.default.registerCloseHandler(function () {
        console.log('connection closed');
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function registerCloseHandler(handlerFunction) {
    socket.onclose = function () {
        console.log('close');
        handlerFunction();
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage,
    registerCloseHandler: registerCloseHandler
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7O0FBRUEsdUJBQU8sbUJBQVAsQ0FBMkIsWUFBTTtBQUM3QixZQUFJLFVBQVUsSUFBSSxXQUFKLENBQWdCLEVBQUUsU0FBUyxNQUFYLEVBQWhCLENBQWQ7QUFDQSwyQkFBTyxXQUFQLENBQW1CLFFBQVEsU0FBUixFQUFuQjtBQUNILEtBSEQ7O0FBS0EsdUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDcEMsZ0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSCxLQUZEOztBQUlBLHVCQUFPLG9CQUFQLENBQTRCLFlBQU07QUFDOUIsZ0JBQVEsR0FBUixDQUFZLG1CQUFaO0FBQ0gsS0FGRDtBQUdILEM7O0lBR0MsVztBQUNGLCtCQUlFO0FBQUEsWUFIVyxDQUdYLFFBSEUsT0FHRjtBQUFBLDZCQUZFLElBRUY7QUFBQSxZQUZRLENBRVIsNkJBRlUsUUFFVjtBQUFBLGtDQURFLFNBQ0Y7QUFBQSxZQURhLENBQ2Isa0NBRGdCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNmOztBQUFBOztBQUNFLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7b0NBQ1c7QUFDUixtQkFBTztBQUNILHNCQUFNLEtBQUssSUFEUjtBQUVILHlCQUFTLEtBQUssT0FGWDtBQUdILDJCQUFXLEtBQUs7QUFIYixhQUFQO0FBS0g7Ozs7OztrQkFFVSxPOzs7OztBQ3ZDZjs7Ozs7O0FBQ0EsSUFBSSxhQUFKOzs7Ozs7OztBQ0RBLElBQUksZUFBSjs7QUFFQSxTQUFTLElBQVQsQ0FBYyxHQUFkLEVBQW1CO0FBQ2YsYUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0g7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUMxQyxXQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNsQixnQkFBUSxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0gsS0FIRDtBQUlIOztBQUVELFNBQVMsc0JBQVQsQ0FBZ0MsZUFBaEMsRUFBaUQ7QUFDN0MsV0FBTyxTQUFQLEdBQW1CLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLGdCQUFRLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEVBQUUsSUFBekI7QUFDQSxZQUFJLE9BQU8sS0FBSyxLQUFMLENBQVcsRUFBRSxJQUFiLENBQVg7QUFDQSx3QkFBZ0IsSUFBaEI7QUFDSCxLQUpEO0FBS0g7O0FBRUQsU0FBUyxvQkFBVCxDQUE4QixlQUE5QixFQUErQztBQUMzQyxXQUFPLE9BQVAsR0FBaUIsWUFBTTtBQUNuQixnQkFBUSxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0gsS0FIRDtBQUlIOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUMxQixXQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDSDs7a0JBRWM7QUFDWCxjQURXO0FBRVgsNENBRlc7QUFHWCxrREFIVztBQUlYLDRCQUpXO0FBS1g7QUFMVyxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XG5cbmNsYXNzIENoYXRBcHAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbmV3IENoYXRNZXNzYWdlKHsgbWVzc2FnZTogJ3BvdyEnfSk7XG4gICAgICAgICAgICBzb2NrZXQuc2VuZE1lc3NhZ2UobWVzc2FnZS5zZXJpYWxpemUoKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyQ2xvc2VIYW5kbGVyKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25uZWN0aW9uIGNsb3NlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG1lc3NhZ2U6IG0sXG4gICAgICAgIHVzZXI6IHU9J2JhdG1hbicsXG4gICAgICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgICAgIHRoaXMudXNlciA9IHU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgICB9XG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7IiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTsiLCJsZXQgc29ja2V0O1xuXG5mdW5jdGlvbiBpbml0KHVybCkge1xuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZS5kYXRhKTtcbiAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNsb3NlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgICBzb2NrZXQub25jbG9zZSA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlJyk7XG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbml0LFxuICAgIHJlZ2lzdGVyT3BlbkhhbmRsZXIsXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcbiAgICBzZW5kTWVzc2FnZSxcbiAgICByZWdpc3RlckNsb3NlSGFuZGxlclxufSJdfQ==
