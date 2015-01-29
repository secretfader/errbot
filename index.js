var http = require('http');

exports.wrap = function (err, code, message, data) {
  if (!err instanceof Error) {
    throw new Error('errbot cannot wrap non-Error objects.');
  }

  if (err.isBot) return err;

  return exports.initialize(err, code, message, data);
};

exports.create = function (code, message, data) {
  if ('object' === typeof(message)) {
    data = message;
    message = null;
  }

  var error = new Error(message ? message : undefined);

  error.isBot  = true;
  error.status = http.STATUS_CODES[code] || 'Unknown';
  error.code   = code;

  if (data) error.data = data;

  return error;
};

exports.initialize = function (err, code, message, data) {
  err.isBot    = true;
  err.message  = message;
  err.isServer = code >= 500;
  err.status   = http.STATUS_CODES[code] || 'Unknown';
  err.code     = code;

  if (data) err.data = data;

  if (!err.hasOwnProperty('data')) {
    err.data = null;
  }

  return err;
};

exports.badRequest = function (message, data) {
  return exports.create(400, message, data);
};

exports.unauthorized = function (message, data) {
  return exports.create(401, message, data);
};

exports.forbidden = function (message, data) {
  return exports.create(403, message, data);
};

exports.notFound = function (message, data) {
  return exports.create(404, message, data);
};

exports.methodNotAllowed = function (message, data) {
  return exports.create(405, message, data);
};

exports.notAcceptable = function (message, data) {
  return exports.create(406, message, data);
};

exports.proxyAuthRequired = function (message, data) {
  return exports.create(407, message, data);
};

exports.clientTimeout = function (message, data) {
  return exports.create(408, message, data);
};

exports.conflict = function (message, data) {
  return exports.create(409, message, data);
};

exports.resourceGone = function (message, data) {
  return exports.create(410, message, data);
};

exports.lengthRequired = function (message, data) {
  return exports.create(411, message, data);
};

exports.preconditionFailed = function (message, data) {
  return exports.create(412, message, data);
};

exports.entityTooLarge = function (message, data) {
  return exports.create(413, message, data);
};

exports.uriTooLong = function (message, data) {
  return exports.create(414, message, data);
};

exports.unsupportedMediaType = function (message, data) {
  return exports.create(415, message, data);
};

exports.rangeNotSatisfiable = function (message, data) {
  return exports.create(416, message, data);
};

exports.expectationFailed = function (message, data) {
  return exports.create(417, message, data);
};

exports.error = function (message, data) {
  return exports.create(500, message, data);
};

exports.notImplemented = function (message, data) {
  return exports.create(501, message, data);
};

exports.badGateway = function (message, data) {
  return exports.create(502, message, data);
};

exports.serverTimeout = function (message, data) {
  return exports.create(503, message, data);
};

exports.gatewayTimeout = function (message, data) {
  return exports.create(504, message, data);
};
