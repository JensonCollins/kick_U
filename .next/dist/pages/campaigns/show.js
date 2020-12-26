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

var _web = require('../../eth/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/kickstarter_u/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
	(0, _inherits3.default)(CampaignShow, _Component);

	function CampaignShow() {
		(0, _classCallCheck3.default)(this, CampaignShow);

		return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
	}

	(0, _createClass3.default)(CampaignShow, [{
		key: 'renderCards',
		value: function renderCards() {
			var _props = this.props,
			    balance = _props.balance,
			    manager = _props.manager,
			    minimumContribution = _props.minimumContribution,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount;

			var items = [{
				header: manager,
				meta: 'Address of manager',
				description: 'The manager created this campaign and create request to withdraw money from this fund.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: minimumContribution,
				meta: 'Minimum contribution(wei)',
				description: 'You must contribute this much amount to become a contributor and approve requests'
			}, {
				header: requestsCount,
				meta: 'Number of requests',
				description: 'A request tries to withdraw money from the contract. Request must be approved by approvers.'
			}, {
				header: approversCount,
				meta: 'Number of approvers',
				description: 'Number of people already contributed in this campaign'
			}, {
				header: _web2.default.utils.fromWei(balance, 'ether'),
				meta: 'Campaign Balance(ether)',
				description: 'Total balance of the campaign that manager can spend.'
			}];

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_Layouts2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 77
				}
			}, 'Here we go guys'), _react2.default.createElement(_semanticUiReact.Container, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 78
				}
			}, _react2.default.createElement(_semanticUiReact.Grid, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
					fileName: _jsxFileName,
					lineNumber: 82
				}
			}, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}))), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests ', __source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, _react2.default.createElement('a', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 91
				}
			}, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, 'View Requests'))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			})))));
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
								console.log('Address in show.js file: ', props.query.address);

								_context.next = 3;
								return (0, _campaign2.default)(props.query.address);

							case 3:
								campaign = _context.sent;
								_context.next = 6;
								return campaign.methods.getSummary().call();

							case 6:
								summary = _context.sent;

								console.log(summary);

								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 9:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkNvbnRhaW5lciIsIkdyaWQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkxpbmsiLCJDYW1wYWlnblNob3ciLCJwcm9wcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVcsQUFBTTs7QUFDaEMsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFTLEFBQVk7Ozs7Ozs7SUFHZixBOzs7Ozs7Ozs7OztnQ0FvQlM7Z0JBT1QsS0FQUyxBQU9KO09BUEksQUFFWixpQkFGWSxBQUVaO09BRlksQUFHWixpQkFIWSxBQUdaO09BSFksQUFJWiw2QkFKWSxBQUlaO09BSlksQUFLWix1QkFMWSxBQUtaO09BTFksQUFNWix3QkFOWSxBQU1aLEFBR0Q7O09BQU07WUFDTCxBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBSEQsQUFHYyxBQUNiO1dBQU8sRUFBRSxjQUxHLEFBQ2IsQUFJUSxBQUFnQjtBQUp4QixBQUNDLElBRlk7WUFPYixBQUNTLEFBQ1I7VUFGRCxBQUVPLEFBQ047aUJBVlksQUFPYixBQUdjO0FBSGQsQUFDQztZQUlELEFBQ1MsQUFDUjtVQUZELEFBRU8sQUFDTjtpQkFmWSxBQVliLEFBR2M7QUFIZCxBQUNDO1lBSUQsQUFDUyxBQUNSO1VBRkQsQUFFTyxBQUNOO2lCQXBCWSxBQWlCYixBQUdjO0FBSGQsQUFDQztZQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ1QixBQUNTLEFBQTRCLEFBQ3BDO1VBRkQsQUFFTyxBQUNOO2lCQXpCRixBQUFjLEFBc0JiLEFBR2MsQUFJZjtBQVBDLEFBQ0M7O3dDQU1LLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7ZUFBbkI7aUJBQVAsQUFBTyxBQUNQO0FBRE87SUFBQTs7OzsyQkFHQyxBQUNSOzBCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBRUM7QUFGRDtBQUFBLHNCQUVDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BRkQsQUFFQyxBQUNBLG9DQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDRSxjQUFELHNCQUFBLEFBQU07O2VBQU47aUJBQUEsQUFFQztBQUZEO0FBQUEsc0JBRUUsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtlQUFwQjtpQkFBQSxBQUNFO0FBREY7V0FGRCxBQUVDLEFBQ0UsQUFBSyxBQUdQLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7ZUFBcEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMsMENBQWUsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7ZUFBcEM7aUJBUkgsQUFDQyxBQU1DLEFBQ0MsQUFHRDtBQUhDO3lCQUdELEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0QztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxjQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMseUNBQU8sU0FBUjtlQUFBO2lCQUFBO0FBQUE7TUFiSixBQVdFLEFBQ0MsQUFDQyxBQU1ILGtEQUFBLEFBQUMsc0JBQUQsQUFBTTs7ZUFBTjtpQkF6QkwsQUFDQyxBQUNDLEFBR0MsQUFDQyxBQW1CQyxBQVNMO0FBVEs7QUFBQTs7Ozs7d0dBdEZ1QixBOzs7OztZQUM1QjtnQkFBQSxBQUFRLElBQVIsQUFBWSw2QkFBNkIsTUFBQSxBQUFNLE1BQS9DLEFBQXFEOzs7ZUFFOUIsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQUFBcUIsQTs7WUFBdEM7QTs7ZUFDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7WUFBOUM7QSwyQkFFTjs7Z0JBQUEsQUFBUSxJQUFSLEFBQVk7OztrQkFHRixNQUFBLEFBQU0sTUFEVCxBQUNlLEFBQ3JCOzhCQUFxQixRQUZmLEFBRWUsQUFBUSxBQUM3QjtrQkFBUyxRQUhILEFBR0csQUFBUSxBQUNqQjt3QkFBZSxRQUpULEFBSVMsQUFBUSxBQUN2Qjt5QkFBZ0IsUUFMVixBQUtVLEFBQVEsQUFDeEI7a0JBQVMsUUFBQSxBLEFBTkgsQUFNVztBQU5YLEFBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFWd0IsQSxBQW1HM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYW0vRG9jdW1lbnRzL2tpY2tzdGFydGVyX3UifQ==