'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/pam/Documents/U_ETH_1/kickstarter/components/Header.js';

exports.default = function () {
    return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '2em', marginBottom: '2em' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement('link', { async: true, rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), _react2.default.createElement('script', { async: true, src: '//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    })), _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, 'CrowdCoin')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Campaigns')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }, _react2.default.createElement('a', { className: 'item', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'Create a new campaign', icon: 'add circle', primary: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    })))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbInJlYWN0IiwiSGVhZGVyIiwiTWVudSIsIkJ1dHRvbiIsIkhlYWQiLCJMaW5rIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFRLEFBQU07O0FBQ3ZCLEFBQU87Ozs7QUFDUCxBQUFRLEFBQVcsQUFFbkI7Ozs7OztrQkFBZSxZQUFNLEFBQ2pCOzJCQUVJLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQUYsQUFBYSxPQUFPLGNBQWpDLEFBQWEsQUFBa0M7c0JBQS9DO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLE9BQU4sTUFBWSxLQUFaLEFBQWdCLGNBQWEsTUFBN0IsQUFBa0M7c0JBQWxDO3dCQURKLEFBQ0ksQUFDQTtBQURBO2tEQUNRLE9BQVIsTUFBYyxLQUFkLEFBQWtCO3NCQUFsQjt3QkFIUixBQUNJLEFBRUksQUFFSjtBQUZJO3lCQUVKLEFBQUMsOEJBQUssT0FBTixBQUFZO3NCQUFaO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhO3NCQUFiO3dCQUFBO0FBQUE7T0FOUixBQUtJLEFBQ0ksQUFNSiwrQkFBQyxjQUFELHNCQUFBLEFBQU0sUUFBSyxVQUFYLEFBQW9CO3NCQUFwQjt3QkFBQSxBQUdJO0FBSEo7dUJBR0ksQUFBQyw4QkFBSyxPQUFOLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7c0JBQWI7d0JBQUE7QUFBQTtPQUpSLEFBR0ksQUFDSSxBQUtKLCtCQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZO3NCQUFaO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhO3NCQUFiO3dCQUFBLEFBQ0E7QUFEQTt1QkFDQSxBQUFFLHlDQUFPLFNBQVQsQUFBaUIsU0FBUSxTQUF6QixBQUFpQyx5QkFBd0IsTUFBekQsQUFBOEQsY0FBYSxTQUEzRTtzQkFBQTt3QkF6QmhCLEFBRUksQUFZSSxBQVNJLEFBQ0ksQUFDQSxBQU9uQjtBQVBtQjs7QUExQnBCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9wYW0vRG9jdW1lbnRzL1VfRVRIXzEva2lja3N0YXJ0ZXIifQ==