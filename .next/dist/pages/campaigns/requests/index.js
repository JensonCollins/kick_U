'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _Layouts = require('../../../components/Layouts');

var _Layouts2 = _interopRequireDefault(_Layouts);

var _campaign = require('../../../eth/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../../routes');

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/U_ETH_1/kickstarter/pages/campaigns/requests/index.js?entry';


var RequestIndex = function (_Component) {
	(0, _inherits3.default)(RequestIndex, _Component);

	function RequestIndex() {
		(0, _classCallCheck3.default)(this, RequestIndex);

		return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(RequestIndex, [{
		key: 'renderRows',
		value: function renderRows() {
			var _this2 = this;

			return this.props.requests.map(function (request, index) {
				return _react2.default.createElement(_RequestRow2.default, {
					request: request,
					key: index,
					id: index,
					address: _this2.props.address,
					approversCount: _this2.props.approversCount,
					__source: {
						fileName: _jsxFileName,
						lineNumber: 32
					}
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var Header = _semanticUiReact.Table.Header,
			    Row = _semanticUiReact.Table.Row,
			    HeaderCell = _semanticUiReact.Table.HeaderCell,
			    Body = _semanticUiReact.Table.Body;

			return _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'All requests'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', style: { marginBottom: 10 }, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, 'Add request'))), _react2.default.createElement(_semanticUiReact.Table, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(Header, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, 'ID'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, 'Description'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Amount'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, 'Recipient'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Approval Count'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, 'Approve'), _react2.default.createElement(HeaderCell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}, 'Finalize'))), _react2.default.createElement(Body, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, this.renderRows())), _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, 'Found ', this.props.requestCount, ' requests')));
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
				var address, campaign, requestCount, approversCount, requests;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								address = props.query.address;
								_context.next = 3;
								return (0, _campaign2.default)(address);

							case 3:
								campaign = _context.sent;
								_context.next = 6;
								return campaign.methods.getRequestCount().call();

							case 6:
								requestCount = _context.sent;
								_context.next = 9;
								return campaign.methods.approversCount().call();

							case 9:
								approversCount = _context.sent;
								_context.next = 12;
								return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
									return campaign.methods.requests(index).call();
								}));

							case 12:
								requests = _context.sent;
								return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

							case 14:
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

	return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkNhbXBhaWduIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiVGFibGUiLCJMaW5rIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbkJvdHRvbSIsInJlbmRlclJvd3MiLCJyZXF1ZXN0Q291bnQiLCJxdWVyeSIsImNhbXBhaWduIiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFFckIsQUFBUyxBQUFRLEFBQVc7O0FBQzVCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFnQjs7Ozs7Ozs7O0lBR2pCLEE7Ozs7Ozs7Ozs7OytCQW9CUTtnQkFDWjs7ZUFBTyxBQUFLLE1BQUwsQUFBVyxTQUFYLEFBQW9CLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ2xEOzJCQUFPLEFBQUM7Y0FBRCxBQUNHLEFBQ1Q7VUFGTSxBQUVELEFBQ0w7U0FITSxBQUdGLEFBQ0o7Y0FBUyxPQUFBLEFBQUssTUFKUixBQUljLEFBQ3BCO3FCQUFnQixPQUFBLEFBQUssTUFMZixBQUtxQjs7Z0JBTHJCO2tCQUFQLEFBQU8sQUFPUDtBQVBPO0FBQ04sS0FETTtBQURSLEFBQU8sQUFTUCxJQVRPOzs7OzJCQVlDO09BQUEsQUFDQSxTQURBLEFBQ2tDLHVCQURsQyxBQUNBO09BREEsQUFDUSxNQURSLEFBQ2tDLHVCQURsQyxBQUNRO09BRFIsQUFDYSxhQURiLEFBQ2tDLHVCQURsQyxBQUNhO09BRGIsQUFDeUIsT0FEekIsQUFDa0MsdUJBRGxDLEFBQ3lCLEFBR2pDOzswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUVDO0FBRkQ7QUFBQSxzQkFFQyxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUZELEFBRUMsQUFDQSxpQ0FBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUVDO0FBRkQ7QUFBQSxzQkFFQyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxPQUFPLEVBQUMsY0FBaEMsQUFBK0IsQUFBZSxNQUFLLFNBQW5EO2VBQUE7aUJBQUE7QUFBQTtNQU5ILEFBR0MsQUFDQyxBQUVDLEFBR0Ysa0NBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNFLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0UsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBQ0EsdUJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFGRCxBQUVDLEFBQ0EsZ0NBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFIRCxBQUdDLEFBQ0EsMkJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFKRCxBQUlDLEFBQ0EsOEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFMRCxBQUtDLEFBQ0EsbUNBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFORCxBQU1DLEFBQ0EsNEJBQUMsY0FBRDs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFUSCxBQUNDLEFBQ0MsQUFPQyxBQUdGLCtCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFDRTtBQURGO0FBQUEsV0FyQkYsQUFTQyxBQVlDLEFBQ0UsQUFBSyxBQUdSLGdDQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQ1EsZUFBQSxBQUFLLE1BRGIsQUFDbUIsY0E1QnRCLEFBQ0MsQUFDQyxBQXlCQyxBQU1IOzs7Ozt3R0FyRTRCLEE7Ozs7O1lBQ3BCO0Esa0JBQVksTSxBQUFNLE0sQUFBbEI7O2VBQ2Usd0JBQUEsQUFBUyxBOztZQUExQjtBOztlQUVxQixTQUFBLEFBQVMsUUFBVCxBQUFpQixrQkFBakIsQSxBQUFtQzs7WUFBeEQ7QTs7ZUFDdUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsaUJBQWpCLEEsQUFBa0M7O1lBQXpEO0E7O2lDQUdpQixBQUFRLFVBQ3hCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFBOEIsT0FBOUIsQUFBcUMsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDNUQ7Z0JBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUN4QztBQUhxQixBQUN0QixBLFNBQUEsQ0FEc0I7O1lBQWpCO0E7eUNBUUMsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixjQUFtQyxnQkFBbkMsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWpCa0IsQSxBQTBFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=