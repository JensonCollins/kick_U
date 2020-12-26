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

var _web = require('../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../eth/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/kickstarter_u/components/RequestRow.js';


var RequestRow = function (_Component) {
	(0, _inherits3.default)(RequestRow, _Component);

	function RequestRow() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, RequestRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return (0, _campaign2.default)(_this.props.address);

						case 2:
							campaign = _context.sent;
							_context.next = 5;
							return _web2.default.eth.getAccounts();

						case 5:
							accounts = _context.sent;
							_context.next = 8;
							return campaign.methods.approveRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 8:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this2);
		})), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			var campaign, accounts;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return (0, _campaign2.default)(_this.props.address);

						case 2:
							campaign = _context2.sent;
							_context2.next = 5;
							return _web2.default.eth.getAccounts();

						case 5:
							accounts = _context2.sent;
							_context2.next = 8;
							return campaign.methods.finalizeRequest(_this.props.id).send({
								from: accounts[0]
							});

						case 8:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		})), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(RequestRow, [{
		key: 'render',
		value: function render() {
			var Row = _semanticUiReact.Table.Row,
			    Cell = _semanticUiReact.Table.Cell;
			var _props = this.props,
			    id = _props.id,
			    request = _props.request,
			    approversCount = _props.approversCount;

			var readyToFinalize = request.approvalCount > approversCount / 2;

			return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, id), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, request.description), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, request.recipient), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 40
				}
			}, request.complete ? _react2.default.createElement(_semanticUiReact.Button, { disabled: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, 'Aprpove') : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, 'Approve')), _react2.default.createElement(Cell, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, request.complete ? _react2.default.createElement(_semanticUiReact.Button, { disabled: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, 'Finalize') : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'Finalize')));
		}
	}]);

	return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsInByb3BzIiwiYWRkcmVzcyIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWxpemVSZXF1ZXN0IiwiUm93IiwiQ2VsbCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJjb21wbGV0ZSIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7a04sQUFDTCxxRkFBWSxtQkFBQTtpQkFBQTtpRUFBQTtjQUFBO3NDQUFBO1dBQUE7dUJBQUE7Y0FDWSx3QkFBUyxNQUFBLEFBQUssTUFEMUIsQUFDWSxBQUFvQjs7V0FBckM7QUFESywyQkFBQTt1QkFBQTtjQUVZLGNBQUEsQUFBSyxJQUZqQixBQUVZLEFBQVM7O1dBQTFCO0FBRkssMkJBQUE7dUJBQUE7dUJBSUwsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQ0w7Y0FDTSxTQU5JLEFBSUwsQUFDQSxBQUNDLEFBQVM7QUFEVixBQUNMLFFBRks7O1dBSks7V0FBQTt1QkFBQTs7QUFBQTtlQUFBO0EsYSxBQVVaLHNGQUFhLG9CQUFBO2lCQUFBO21FQUFBO2NBQUE7d0NBQUE7V0FBQTt3QkFBQTtjQUNXLHdCQUFTLE1BQUEsQUFBSyxNQUR6QixBQUNXLEFBQW9COztXQUFyQztBQURNLDRCQUFBO3dCQUFBO2NBRVcsY0FBQSxBQUFLLElBRmhCLEFBRVcsQUFBUzs7V0FBMUI7QUFGTSw0QkFBQTt3QkFBQTt1QkFJTixBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUNMO2NBQ00sU0FOSyxBQUlOLEFBQ0EsQUFDQyxBQUFTO0FBRFYsQUFDTCxRQUZLOztXQUpNO1dBQUE7d0JBQUE7O0FBQUE7Z0JBQUE7QTs7Ozs7MkJBVUo7T0FBQSxBQUNBLE1BREEsQUFDYyx1QkFEZCxBQUNBO09BREEsQUFDSyxPQURMLEFBQ2MsdUJBRGQsQUFDSztnQkFDeUIsS0FGOUIsQUFFbUM7T0FGbkMsQUFFRCxZQUZDLEFBRUQ7T0FGQyxBQUVHLGlCQUZILEFBRUc7T0FGSCxBQUVZLHdCQUZaLEFBRVksQUFDcEI7O09BQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQStELEFBRS9EOzswQkFDRSxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUEvRCxBQUF1RTtlQUF2RTtpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLE1BREQsQUFDQyxBQUNBLHFCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FGRCxBQUVDLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLG9CQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FIbkMsQUFHQyxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7O2VBQUE7aUJBQUEsQUFBTztBQUFQO0FBQUEsY0FKRCxBQUlDLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztlQUFBO2lCQUFBLEFBQU87QUFBUDtBQUFBLGNBQUEsQUFBZSxlQUFnQixLQUxoQyxBQUtDLEFBRUEsaUNBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQVEsMkJBQ1IsQUFBQyx5Q0FBTyxVQUFSO2VBQUE7aUJBQUE7QUFBQTtJQUFBLEVBREEsQUFDQSw2QkFFQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7ZUFBMUM7aUJBQUE7QUFBQTtJQUFBLEVBWEosQUFPQyxBQUlHLEFBS0gsNkJBQUMsY0FBRDs7ZUFBQTtpQkFBQSxBQUNFO0FBREY7QUFBQSxjQUNFLEFBQVEsMkJBRVIsQUFBQyx5Q0FBTyxVQUFSO2VBQUE7aUJBQUE7QUFBQTtJQUFBLEVBRkEsQUFFQSw4QkFFQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLFNBQVMsS0FBcEMsQUFBeUM7ZUFBekM7aUJBQUE7QUFBQTtJQUFBLEVBdEJKLEFBQ0MsQUFnQkMsQUFLRSxBQU9KOzs7OztBQXZEdUIsQSxBQTBEekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYW0vRG9jdW1lbnRzL2tpY2tzdGFydGVyX3UifQ==