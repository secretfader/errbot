var http = require('http');

exports.initialize = function (code, message, data) {
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

exports.badRequest = function (message, data) {
  return exports.initialize(400, message, data);
};

exports.unauthorized = function (message, data) {
  return exports.initialize(401, message, data);
};

exports.forbidden = function (message, data) {
  return exports.initialize(403, message, data);
};

exports.notFound = function (message, data) {
  return exports.initialize(404, message, data);
};

exports.methodNotAllowed = function (message, data) {
  return exports.initialize(405, message, data);
};

exports.notAcceptable = function (message, data) {
  return exports.initialize(406, message, data);
};

exports.proxyAuthRequired = function (message, data) {
  return exports.initialize(407, message, data);
};

exports.clientTimeout = function (message, data) {
  return exports.initialize(408, message, data);
};

exports.conflict = function (message, data) {
  return exports.initialize(409, message, data);
};

exports.resourceGone = function (message, data) {
  return exports.initialize(410, message, data);
};

exports.lengthRequired = function (message, data) {
  return exports.initialize(411, message, data);
};

exports.preconditionFailed = function (message, data) {
  return exports.initialize(412, message, data);
};

exports.entityTooLarge = function (message, data) {
  return exports.initialize(413, message, data);
};

exports.uriTooLong = function (message, data) {
  return exports.initialize(414, message, data);
};

exports.unsupportedMediaType = function (message, data) {
  return exports.initialize(415, message, data);
};

exports.rangeNotSatisfiable = function (message, data) {
  return exports.initialize(416, message, data);
};

exports.expectationFailed = function (message, data) {
  return exports.initialize(417, message, data);
};

exports.error = function (message, data) {
  return exports.initialize(500, message, data);
};

exports.notImplemented = function (message, data) {
  return exports.initialize(501, message, data);
};

exports.badGateway = function (message, data) {
  return exports.initialize(502, message, data);
};

exports.serverTimeout = function (message, data) {
  return exports.initialize(503, message, data);
};

exports.gatewayTimeout = function (message, data) {
  return exports.initialize(504, message, data);
};
