'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						console.log('Address in campaign.js file: ', address);

						return _context.abrupt('return', new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface), address));

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this);
	}));

	return function (_x) {
		return _ref.apply(this, arguments);
	};
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9jYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY29tcGlsZWRDYW1wYWlnbiIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBTyxBQUFQLEFBQTZCLEFBQTdCLEFBRUE7Ozs7Ozs7OzhCQUFBO3FGQUFlLGlCQUFNLEFBQU4sU0FBQTtnRUFBQTthQUFBO3FDQUFBO1VBQ2Q7Y0FBUSxBQUFSLElBQVksQUFBWixpQ0FBNkMsQUFBN0MsQUFEYzs7dUNBR1AsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ04sS0FBSyxBQUFMLE1BQVcsbUJBQWlCLEFBQTVCLEFBRE0sWUFFTixBQUZNLEFBSE87O1VBQUE7VUFBQTtzQkFBQTs7QUFBQTtjQUFBO0FBQWY7O3NCQUFBOzBCQUFBO0FBQUEiLCJmaWxlIjoiY2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=