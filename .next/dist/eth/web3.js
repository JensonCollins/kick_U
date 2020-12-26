'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // in the browser and metamask is running
    // getting web3 instance from metamask
    window.web3.currentProvider.enable();
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // metamask not available
    var provider = new _web2.default.providers.HttpProvider('https://kovan.infura.io/v3/19b85f951b5a4440923fa8f61eb27245');
    web3 = new _web2.default(provider);
};

// Case when user without metamask accesses our application

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC93ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwiZW5hYmxlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUDs7Ozs7O0FBRUEsSUFBSSxZQUFKOztBQUVBLElBQUcsT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTNELGFBQXVFLEFBQ25FO0FBQ0E7QUFDQTtXQUFPLEFBQVAsS0FBWSxBQUFaLGdCQUE0QixBQUE1QixBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBUCxLQUFZLEFBQXJCLEFBQVAsQUFDSDtBQUxELE9BS08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUNoQixBQURZLGFBQ0MsQUFERCxBQUFqQixBQUVBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLEFBQVQsQUFBUCxBQUNIOzs7QUFFRCxBQUVBOztrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=