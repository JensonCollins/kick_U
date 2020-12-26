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

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _factory = require('../../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/U_ETH_1/kickstarter/pages/campaigns/new.js?entry';


var CampaignNew = function (_Component) {
	(0, _inherits3.default)(CampaignNew, _Component);

	function CampaignNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CampaignNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			minimumContribution: '',
			errorMessage: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts, res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.prev = 0;

								// Form submittal
								event.preventDefault();
								_context.next = 4;
								return new _web2.default.eth.getAccounts();

							case 4:
								accounts = _context.sent;

								console.log('Accounts returned are: ', accounts);
								_context.next = 8;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 8:
								res = _context.sent;

								console.log('Transaction successful.');
								console.log(res);

								_context.next = 16;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context['catch'](0);

								_this.setState({ errorMessage: _context.t0.message });

							case 16:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[0, 13]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CampaignNew, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 41
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Create a new Campaign page'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				labelPosition: 'right',
				label: 'wei',
				placeholder: '0',

				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					_this3.setState({ minimumContribution: event.target.value });
					_this3.setState({ errorMessage: '' });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, 'Create'))));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0Iiwid2ViMyIsImZhY3RvcnkiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJyZXMiLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVcsQUFBUSxBQUFNLEFBQU87O0FBQ3pDLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFhOzs7Ozs7Ozs7SSxBQUVkOzs7Ozs7Ozs7Ozs7Ozs7b04sQUFDTDt3QkFBUSxBQUNjLEFBQ3JCO2lCQUZPLEEsQUFFTztBQUZQLEFBQ1AsV0FJRCxBO3dGQUFXLGlCQUFBLEFBQU8sT0FBUDtrQkFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQUE7d0JBSVQ7O0FBQ0E7Y0FMUyxBQUtULEFBQU07d0JBTEc7ZUFNYyxJQUFJLGNBQUEsQUFBSyxJQU52QixBQU1jLEFBQWE7O1lBQTlCO0FBTkcsNEJBT1Q7O2dCQUFBLEFBQVEsSUFBUixBQUFZLDJCQVBILEFBT1QsQUFBdUM7d0JBUDlCO2lDQVFTLEFBQVEsUUFBUixBQUNqQixlQUFlLE1BQUEsQUFBSyxNQURILEFBQ1MscUJBRFQsQUFFakI7ZUFDTSxTQVhFLEFBUVMsQUFFWixBQUNDLEFBQVM7QUFEVixBQUNMLFNBSGlCOztZQUFaO0FBUkcsdUJBYVQ7O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Z0JBQUEsQUFBUSxJQWRDLEFBY1QsQUFBWTs7d0JBZEg7QUFBQTs7WUFBQTt3QkFBQTt3Q0FpQlQ7O2NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWpCcEIsQUFpQlQsQUFBYyxBQUFtQjs7WUFqQnhCO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkF3QkY7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLCtDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHlDQUFBLEFBQUM7bUJBQUQsQUFDZSxBQUNkO1dBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2EsQUFFWjs7V0FBTyxLQUFBLEFBQUssTUFMYixBQUttQixBQUNsQjtjQUFVLHlCQUFTLEFBQ2xCO1lBQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUExQyxBQUFjLEFBQW1DLEFBQ2pEO1lBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQWUsQUFDN0I7QUFURjs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFhRDtBQWJDO0FBQ0Msd0JBWUYsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO2VBQWxEO2lCQWhCRCxBQWdCQyxBQUNBO0FBREE7dUJBQ0EsQUFBQyx5Q0FBTyxTQUFSO2VBQUE7aUJBQUE7QUFBQTtNQXJCSixBQUNDLEFBQ0MsQUFFQyxBQWlCQyxBQU1KOzs7OztBQTFEd0IsQSxBQTZEMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3BhbS9Eb2N1bWVudHMvVV9FVEhfMS9raWNrc3RhcnRlciJ9