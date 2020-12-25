'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Preconfigured instance of CampaignFactory
var factory = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), '0xCC0F8a34B0e4ce5baac80c50E5bB1E4042dDED67');

exports.default = factory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9mYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJmYWN0b3J5IiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQXFCOzs7Ozs7QUFGNUI7QUFJQSxJQUFNLFVBQVUsSUFBSSxjQUFBLEFBQUssSUFBVCxBQUFhLFNBQ3pCLEtBQUEsQUFBSyxNQUFNLDBCQURDLEFBQ1osQUFBMkIsWUFEL0IsQUFBZ0IsQUFFWixBQUdKOztrQkFBQSxBQUFlIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvcGFtL0RvY3VtZW50cy9VX0VUSF8xL2tpY2tzdGFydGVyIn0=