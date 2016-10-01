'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _graphql = require('graphql');

var _cli = require('../utils/cli');

var _cli2 = _interopRequireDefault(_cli);

var _schema = require('./data/schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _cli2.default || process.env || {};

var _ref$PORT = _ref.PORT;
var PORT = _ref$PORT === undefined ? 3000 : _ref$PORT;

var router = new _koaRouter2.default();
var app = new _koa2.default();

router.get('/graphql', function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
    var query, params;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = ctx.query.query;
            params = ctx.params;
            _context.next = 4;
            return (0, _graphql.graphql)(_schema2.default, query, '', params);

          case 4:
            ctx.body = _context.sent;

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

app.use(router.routes());
_mongoose2.default.connect('mongodb://localhost/graphql');

app.listen(PORT, function () {
  console.log('app is listening on ' + PORT);
});