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

var _jquery = require('jquery');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layouts = require('../../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _factory = require('../../eth/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

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
			minimumContribution: ''
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								// Form submittal
								event.preventDefault();

								_context.next = 3;
								return _web2.default.eth.getAccounts();

							case 3:
								accounts = _context.sent;
								_context.next = 6;
								return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
									from: accounts[0]
								});

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2);
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
					lineNumber: 30
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement('h1', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, 'Create a new Campaign page'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement(_semanticUiReact.Form.Field, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('label', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'Minimum contribution'), _react2.default.createElement(_semanticUiReact.Input, {
				labelPosition: 'right',
				label: 'wei',
				placeholder: '0',

				value: this.state.minimumContribution,
				onChange: function onChange(event) {
					return _this3.setState({ minimumContribution: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			})), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Create'))));
		}
	}]);

	return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiZXZlbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFRLEFBQU07O0FBQ2xDLEFBQU8sQUFBWTs7OztBQUVuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7b05BQ0wsQTt3QkFBUSxBLEFBQ2M7QUFEZCxBQUNQLFcsQUFHRDt3RkFBVyxpQkFBQSxBQUFPLE9BQVA7UUFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7QUFDQTtjQUZVLEFBRVYsQUFBTTs7d0JBRkk7ZUFJYSxjQUFBLEFBQUssSUFKbEIsQUFJYSxBQUFTOztZQUExQjtBQUpJLDRCQUFBO3dCQUFBO2lDQUtKLEFBQVEsUUFBUixBQUNMLGVBQWUsTUFBQSxBQUFLLE1BRGYsQUFDcUIscUJBRHJCLEFBRUw7ZUFDTSxTQVJHLEFBS0osQUFFQSxBQUNDLEFBQVM7QUFEVixBQUNMLFNBSEs7O1lBTEk7WUFBQTt3QkFBQTs7QUFBQTtnQkFBQTtBOzs7Ozs7Ozs7OzJCQWNGO2dCQUNSOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSwrQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7ZUFBckI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsc0JBQUEsQUFBTTs7ZUFBTjtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQURELEFBQ0MsQUFDQSx5Q0FBQSxBQUFDO21CQUFELEFBQ2UsQUFDZDtXQUZELEFBRU8sQUFDTjtpQkFIRCxBQUdhLEFBRVo7O1dBQU8sS0FBQSxBQUFLLE1BTGIsQUFLbUIsQUFDbEI7Y0FBVSx5QkFBQTtZQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLE1BQUEsQUFBTSxPQUFuRCxBQUFTLEFBQWMsQUFBbUM7QUFOckU7O2VBQUE7aUJBSEYsQUFDQyxBQUVDLEFBV0Q7QUFYQztBQUNDLHdCQVVGLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFsQkosQUFDQyxBQUNDLEFBRUMsQUFjQyxBQU1KOzs7OztBQTVDd0IsQSxBQStDMUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3BhbS9Eb2N1bWVudHMvVV9FVEhfMS9raWNrc3RhcnRlciJ9