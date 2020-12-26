'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layouts = require('../../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _campaign = require('../../eth/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/U_ETH_1/kickstarter/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 20
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 21
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 23
				}
			}, 'Here we go guys')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var campaign, summary;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log('Address in show function: ', props.query.address);

								campaign = (0, _campaign2.default)(props.query.address);
								_context.next = 4;
								return campaign.methods.getRequestCount().call();

							case 4:
								summary = _context.sent;
								return _context.abrupt('return', {});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImFkZHJlc3MiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0Q291bnQiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7OzJCQVdJLEFBQ1I7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFFQztBQUZEO0FBQUEsc0JBRUMsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFKSCxBQUNDLEFBQ0MsQUFFQyxBQUtIOzs7Ozt3R0FwQjRCLEE7Ozs7O1lBQzVCO2dCQUFBLEFBQVEsSUFBUixBQUFZLDhCQUE4QixNQUFBLEFBQU0sTUFBaEQsQUFBc0QsQUFFbEQ7O0EsbUJBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQSxBQUFxQjs7ZUFFZCxTQUFBLEFBQVMsUUFBVCxBQUFpQixrQixBQUFqQixBQUFtQzs7WUFBbkQ7QTt5Q0FFQyxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUmtCLEEsQUF3QjNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=