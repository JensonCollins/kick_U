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

var _index = require('next/dist/lib/router/index.js');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../eth/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../eth/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/kickstarter_u/components/ContributeForm.js';


var ContributeForm = function (_Component) {
	(0, _inherits3.default)(ContributeForm, _Component);

	function ContributeForm() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, ContributeForm);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			value: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var campaign, accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_this.setState({ loading: true, errorMessage: '' });

								event.preventDefault();
								_context.next = 4;
								return (0, _campaign2.default)(_this.props.address);

							case 4:
								campaign = _context.sent;
								_context.prev = 5;
								_context.next = 8;
								return _web2.default.eth.getAccounts();

							case 8:
								accounts = _context.sent;
								_context.next = 11;
								return campaign.methods.contribute().send({
									from: accounts[0],
									value: _web2.default.utils.toWei(_this.state.value, 'ether')
								});

							case 11:

								_index.Router.replaceRoute('/campaigns/' + _this.props.address);

								_context.next = 17;
								break;

							case 14:
								_context.prev = 14;
								_context.t0 = _context['catch'](5);

								_this.setState({ errorMessage: _context.t0.message });

							case 17:

								_this.setState({
									loading: false,
									value: ''
								});

							case 18:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[5, 14]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(ContributeForm, [{
		key: 'render',
		value: function render() {
			var _this3 = this;

			return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: this.state.errorMessage.length, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Amount to contribute'), _react2.default.createElement(_semanticUiReact.Input, {
				value: this.state.value,
				onChange: function onChange(event) {
					return _this3.setState({ value: event.target.value, errorMessage: '' });
				},
				label: 'ether',
				labelPosition: 'right',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			})), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, 'Contribute!'));
		}
	}]);

	return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUm91dGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiQ29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwibGVuZ3RoIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7QUFDVCxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU8sQUFBUzs7QUFDL0IsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBR1gsQTs7Ozs7Ozs7Ozs7Ozs7OzBOLEFBQ0w7VUFBUSxBQUNBLEFBQ1A7aUJBRk8sQUFFTyxBQUNkO1lBSE8sQUFHRSxBO0FBSEYsQUFDUCxXLEFBS0Q7d0ZBQVcsaUJBQUEsQUFBTyxPQUFQO2tCQUFBO2tFQUFBO2VBQUE7dUNBQUE7WUFDVjtjQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBVSxNQUFNLGNBQTlCLEFBQWMsQUFBOEIsQUFFNUM7O2NBSFUsQUFHVixBQUFNO3dCQUhJO2VBSWEsd0JBQVMsTUFBQSxBQUFLLE1BSjNCLEFBSWEsQUFBb0I7O1lBQXJDO0FBSkksNEJBQUE7d0JBQUE7d0JBQUE7ZUFTYyxjQUFBLEFBQUssSUFUbkIsQUFTYyxBQUFTOztZQUExQjtBQVRHLDRCQUFBO3dCQUFBO3dCQVVILEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUNMO2VBQ00sU0FERCxBQUNDLEFBQVMsQUFDZjtnQkFBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BYjNCLEFBVUgsQUFDQSxBQUVFLEFBQW1DO0FBRnJDLEFBQ0wsU0FGSzs7WUFNTjs7c0JBQUEsQUFBTyw2QkFBMkIsTUFBQSxBQUFLLE1BaEI5QixBQWdCVCxBQUE2Qzs7d0JBaEJwQztBQUFBOztZQUFBO3dCQUFBO3dDQW1CVDs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBbkJyQixBQW1CVCxBQUFjLEFBQXNCOztZQUdyQzs7Y0FBQSxBQUFLO2tCQUFTLEFBQ0osQUFDVDtnQkF4QlMsQUFzQlYsQUFBYyxBQUVOO0FBRk0sQUFDYjs7WUF2QlM7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQTRCRjtnQkFDUjs7MEJBQ0MsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQWpELEFBQThEO2VBQTlEO2lCQUFBLEFBQ0M7QUFERDtJQUFBLGtCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFHQSx5Q0FBQSxBQUFDO1dBQ00sS0FBQSxBQUFLLE1BRFosQUFDa0IsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBZixBQUFzQixPQUFPLGNBQXBELEFBQVMsQUFBYyxBQUEyQztBQUY1RSxBQUdBO1dBSEEsQUFHTSxBQUNOO21CQUpBLEFBSWM7O2VBSmQ7aUJBTEYsQUFDQyxBQUlDLEFBT0Q7QUFQQztBQUNBLHdCQU1ELEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtlQUFsRDtpQkFaRCxBQVlDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7ZUFBQTtpQkFBQTtBQUFBO01BZEYsQUFDQyxBQWFDLEFBTUY7Ozs7O0FBeEQyQixBLEFBMkQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYW0vRG9jdW1lbnRzL2tpY2tzdGFydGVyX3UifQ==