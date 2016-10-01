'use strict';

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_superagent2.default.get('http://localhost:3000/graphql').query({
  query: '{\n      hello\n    }'
}).end(function (err, res) {
  !err && console.log(res.body.data);
});