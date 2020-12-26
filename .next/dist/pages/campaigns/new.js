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
			errorMessage: '',
			successMessage: '',
			loading: false,
			showSuccess: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts, res;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.setState({ loading: true });

								_context.prev = 1;

								// Form submittal

								event.preventDefault();
								_context.next = 5;
								return new _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;

								console.log('Accounts returned are: ', accounts);
								_context.next = 9;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 9:
								res = _context.sent;

								console.log('Transaction successful.');
								console.log(res);

								_this.setState({ loading: true });
								_this.setState({
									successMessage: 'Your transaction was successful.'
									// 'blockHash: ' + res.blockHash +
									// 'blockNumber: ' + res.blockNumber +
									// 'contactAddress' + res.contactAddress +
									// 'cumulativeGasUsed' + res.cumulativeGasUsed
								});
								_this.setState({ showSuccess: true });
								_context.next = 20;
								break;

							case 17:
								_context.prev = 17;
								_context.t0 = _context['catch'](1);

								_this.setState({ errorMessage: _context.t0.message });

							case 20:

								_this.setState({ loading: false });

							case 21:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[1, 17]]);
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
					lineNumber: 54
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Create a new Campaign page'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
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
					lineNumber: 60
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { positive: true, error: !this.state.showSuccess, header: 'Transaction successful.', content: this.state.successMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 76
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, 'Create'))));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDb250YWluZXIiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0Iiwid2ViMyIsImZhY3RvcnkiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImVycm9yTWVzc2FnZSIsInN1Y2Nlc3NNZXNzYWdlIiwibG9hZGluZyIsInNob3dTdWNjZXNzIiwib25TdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwicmVzIiwibWVzc2FnZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFRLEFBQU0sQUFBTzs7QUFDekMsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7Ozs7OztvTixBQUNMO3dCQUFRLEFBQ2MsQUFDckI7aUJBRk8sQUFFTyxBQUNkO21CQUhPLEFBR1MsQUFDaEI7WUFKTyxBQUlFLEFBQ1Q7Z0IsQUFMTyxBQUtNO0FBTE4sQUFDUCxXLEFBT0Q7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO2tCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQUssU0FBUyxFQUFDLFNBREwsQUFDVixBQUFjLEFBQVU7O3dCQUl2Qjs7QUFFQTs7Y0FQUyxBQU9ULEFBQU07d0JBUEc7ZUFRYyxJQUFJLGNBQUEsQUFBSyxJQVJ2QixBQVFjLEFBQWE7O1lBQTlCO0FBUkcsNEJBU1Q7O2dCQUFBLEFBQVEsSUFBUixBQUFZLDJCQVRILEFBU1QsQUFBdUM7d0JBVDlCO2lDQVVTLEFBQVEsUUFBUixBQUNqQixlQUFlLE1BQUEsQUFBSyxNQURILEFBQ1MscUJBRFQsQUFFakI7ZUFDTSxTQWJFLEFBVVMsQUFFWixBQUNDLEFBQVM7QUFEVixBQUNMLFNBSGlCOztZQUFaO0FBVkcsdUJBZVQ7O2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Z0JBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7Y0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVSxBQUN4QjtjQUFBLEFBQUs7eUJBRUosQUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5ELEFBQWMsQUFRZDtBQVJjLEFBQ2I7Y0FPRCxBQUFLLFNBQVMsRUFBQyxhQTNCTixBQTJCVCxBQUFjLEFBQWM7d0JBM0JuQjtBQUFBOztZQUFBO3dCQUFBO3dDQTZCVDs7Y0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBN0JwQixBQTZCVCxBQUFjLEFBQW1COztZQUdsQzs7Y0FBQSxBQUFLLFNBQVMsRUFBQyxTQWhDTCxBQWdDVixBQUFjLEFBQVU7O1lBaENkO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFtQ0Y7Z0JBQ1I7OzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLCtDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0UsY0FBRCxzQkFBQSxBQUFNOztlQUFOO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLHlDQUFBLEFBQUM7bUJBQUQsQUFDZSxBQUNkO1dBRkQsQUFFTyxBQUNOO2lCQUhELEFBR2EsQUFFWjs7V0FBTyxLQUFBLEFBQUssTUFMYixBQUttQixBQUNsQjtjQUFVLHlCQUFTLEFBQ2xCO1lBQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUExQyxBQUFjLEFBQW1DLEFBQ2pEO1lBQUEsQUFBSyxTQUFTLEVBQUMsY0FBZixBQUFjLEFBQWUsQUFDN0I7QUFURjs7ZUFBQTtpQkFIRixBQUNDLEFBRUMsQUFlRDtBQWZDO0FBQ0Msd0JBY0YsQUFBQywwQ0FBUSxVQUFULE1BQWtCLE9BQU8sQ0FBQyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsYUFBYSxRQUFsRCxBQUF5RCwyQkFBMEIsU0FBUyxLQUFBLEFBQUssTUFBakcsQUFBdUc7ZUFBdkc7aUJBbEJELEFBa0JDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7ZUFBbEQ7aUJBbkJELEFBbUJDLEFBR0E7QUFIQTt1QkFHQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7ZUFBQTtpQkFBQTtBQUFBO01BMUJKLEFBQ0MsQUFDQyxBQUVDLEFBc0JDLEFBTUo7Ozs7O0FBN0V3QixBLEFBZ0YxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=