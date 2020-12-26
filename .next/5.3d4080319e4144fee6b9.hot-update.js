webpackHotUpdate(5,{

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(531);

var _Layouts = __webpack_require__(1201);

var _Layouts2 = _interopRequireDefault(_Layouts);

var _web = __webpack_require__(812);

var _web2 = _interopRequireDefault(_web);

var _factory = __webpack_require__(1480);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/pam/Documents/U_ETH_1/kickstarter/pages/campaigns/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/pam/Documents/U_ETH_1/kickstarter/pages/campaigns/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4zZDQwODAzMTllNDE0NGZlZTZiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lZmM3ZGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENvbnRhaW5lciwgQnV0dG9uLCBGb3JtLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dHMnXG5cbmltcG9ydCB3ZWIzIGZyb20gJy4uLy4uL2V0aC93ZWIzJ1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vLi4vZXRoL2ZhY3RvcnknXG5cbmNsYXNzIENhbXBhaWduTmV3IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGUgPSB7XG5cdFx0bWluaW11bUNvbnRyaWJ1dGlvbjogJycsXG5cdFx0ZXJyb3JNZXNzYWdlOiAnJyxcblx0XHRzdWNjZXNzTWVzc2FnZTogJycsXG5cdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0c2hvd1N1Y2Nlc3M6IGZhbHNlLFxuXHR9O1xuXHRcblx0b25TdWJtaXQgPSBhc3luYyAoZXZlbnQpPT57XG5cdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuXHRcdFxuXHRcdFxuXHRcdHRyeSB7XG5cdFx0XHQvLyBGb3JtIHN1Ym1pdHRhbFxuXHRcdFx0XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCBuZXcgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcblx0XHRcdGNvbnNvbGUubG9nKCdBY2NvdW50cyByZXR1cm5lZCBhcmU6ICcsIGFjY291bnRzKTtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZhY3RvcnkubWV0aG9kc1xuXHRcdFx0LmNyZWF0ZUNhbXBhaWduKHRoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbilcblx0XHRcdC5zZW5kKHtcblx0XHRcdFx0ZnJvbTogYWNjb3VudHNbMF1cblx0XHRcdH0pO1xuXHRcdFx0Y29uc29sZS5sb2coJ1RyYW5zYWN0aW9uIHN1Y2Nlc3NmdWwuJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdFxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogdHJ1ZX0pO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdHN1Y2Nlc3NNZXNzYWdlOiBcblx0XHRcdFx0J1lvdXIgdHJhbnNhY3Rpb24gd2FzIHN1Y2Nlc3NmdWwuJ1xuXHRcdFx0XHQvLyAnYmxvY2tIYXNoOiAnICsgcmVzLmJsb2NrSGFzaCArXG5cdFx0XHRcdC8vICdibG9ja051bWJlcjogJyArIHJlcy5ibG9ja051bWJlciArXG5cdFx0XHRcdC8vICdjb250YWN0QWRkcmVzcycgKyByZXMuY29udGFjdEFkZHJlc3MgK1xuXHRcdFx0XHQvLyAnY3VtdWxhdGl2ZUdhc1VzZWQnICsgcmVzLmN1bXVsYXRpdmVHYXNVc2VkXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dTdWNjZXNzOiB0cnVlfSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlfSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2V9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PExheW91dD5cblx0XHRcdFx0XHQ8aDE+Q3JlYXRlIGEgbmV3IENhbXBhaWduIHBhZ2U8L2gxPlxuXHRcdFx0XHRcdDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5GaWVsZD5cblx0XHRcdFx0XHRcdFx0PGxhYmVsPk1pbmltdW0gY29udHJpYnV0aW9uPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PElucHV0IFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsUG9zaXRpb249J3JpZ2h0JyBcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD0nd2VpJyBcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nMCcgXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUubWluaW11bUNvbnRyaWJ1dGlvbn1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7bWluaW11bUNvbnRyaWJ1dGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtlcnJvck1lc3NhZ2U6ICcnfSk7XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PC9Gb3JtLkZpZWxkPlxuXG5cblx0XHRcdFx0XHRcdDxNZXNzYWdlIHBvc2l0aXZlIGVycm9yPXshdGhpcy5zdGF0ZS5zaG93U3VjY2Vzc30gaGVhZGVyPVwiVHJhbnNhY3Rpb24gc3VjY2Vzc2Z1bC5cIiBjb250ZW50PXt0aGlzLnN0YXRlLnN1Y2Nlc3NNZXNzYWdlfSAvPlxuXHRcdFx0XHRcdFx0PE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5DcmVhdGU8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHRcdDwvTGF5b3V0PlxuXG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFKQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBUEE7QUFRQTtBQUNBO0FBREE7QUFSQTtBQUNBO0FBUUE7QUFUQTtBQVVBO0FBR0E7QUFBQTtBQUNBO0FBSkE7QUFWQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQU9BO0FBM0JBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUE2QkE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWpDQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFSQTs7QUFBQTtBQWVBO0FBZkE7QUFDQTtBQWNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFNQTs7Ozs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=