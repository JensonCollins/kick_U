'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Campaign = require('./build/Campaign.json');

var _Campaign2 = _interopRequireDefault(_Campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
	console.log('Address in campaign file: ', address);
	return new _web2.default.eth.Contract(JSON.parse(_Campaign2.default.interface, address));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aC9jYW1wYWlnbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY29tcGlsZWRDYW1wYWlnbiIsImFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUE2QixBQUE3QixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDM0I7U0FBUSxBQUFSLElBQVksQUFBWiw4QkFBMEMsQUFBMUMsQUFDQTtRQUFPLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNOLEtBQUssQUFBTCxNQUNDLG1CQUFpQixBQURsQixXQUVDLEFBRkQsQUFETSxBQUFQLEFBTUE7QUFSRCIsImZpbGUiOiJjYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYW0vRG9jdW1lbnRzL1VfRVRIXzEva2lja3N0YXJ0ZXIifQ==