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

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7O0FBRUEsdUJBQU8sbUJBQVAsQ0FBMkIsWUFBTTtBQUM3QixZQUFJLFVBQVUsSUFBSSxXQUFKLENBQWdCLEVBQUUsU0FBUyxNQUFYLEVBQWhCLENBQWQ7QUFDQSwyQkFBTyxXQUFQLENBQW1CLFFBQVEsU0FBUixFQUFuQjtBQUNILEtBSEQ7O0FBS0EsdUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDcEMsZ0JBQVEsR0FBUixDQUFZLElBQVo7QUFDSCxLQUZEO0FBR0gsQzs7SUFHQyxXO0FBQ0YsK0JBSUU7QUFBQSxZQUhXLENBR1gsUUFIRSxPQUdGO0FBQUEsNkJBRkUsSUFFRjtBQUFBLFlBRlEsQ0FFUiw2QkFGVSxRQUVWO0FBQUEsa0NBREUsU0FDRjtBQUFBLFlBRGEsQ0FDYixrQ0FEZ0IsSUFBSSxJQUFKLEVBQUQsQ0FBYSxPQUFiLEVBQ2Y7O0FBQUE7O0FBQ0UsYUFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OztvQ0FDVztBQUNSLG1CQUFPO0FBQ0gsc0JBQU0sS0FBSyxJQURSO0FBRUgseUJBQVMsS0FBSyxPQUZYO0FBR0gsMkJBQVcsS0FBSztBQUhiLGFBQVA7QUFLSDs7Ozs7O2tCQUVVLE87Ozs7O0FDbkNmOzs7Ozs7QUFDQSxJQUFJLGFBQUo7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDZixhQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDSDs7QUFFRCxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzFDLFdBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ2xCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDSCxLQUhEO0FBSUg7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUM3QyxXQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDdEIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6QjtBQUNBLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLHdCQUFnQixJQUFoQjtBQUNILEtBSkQ7QUFLSDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDMUIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7O2tCQUVjO0FBQ1gsY0FEVztBQUVYLDRDQUZXO0FBR1gsa0RBSFc7QUFJWDtBQUpXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgc29ja2V0IGZyb20gJy4vd3MtY2xpZW50JztcblxuY2xhc3MgQ2hhdEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XG5cbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93ISd9KTtcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNsYXNzIENoYXRNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcih7XG4gICAgICAgIG1lc3NhZ2U6IG0sXG4gICAgICAgIHVzZXI6IHU9J2JhdG1hbicsXG4gICAgICAgIHRpbWVzdGFtcDogdD0obmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSl7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgICAgIHRoaXMudXNlciA9IHU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgICB9XG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7IiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTsiLCJsZXQgc29ja2V0O1xuXG5mdW5jdGlvbiBpbml0KHVybCkge1xuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xufVxuXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xuICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvcGVuJyk7XG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgICBzb2NrZXQub25tZXNzYWdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcbiAgICAgICAgaGFuZGxlckZ1bmN0aW9uKGRhdGEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UocGF5bG9hZCkge1xuICAgIHNvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQsXG4gICAgcmVnaXN0ZXJPcGVuSGFuZGxlcixcbiAgICByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyLFxuICAgIHNlbmRNZXNzYWdlXG59Il19
