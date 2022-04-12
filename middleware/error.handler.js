/* eslint-disable no-unused-vars */

function logErrors(err, req, res, next) {
  next(err);
}
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    res.status(err.output.statusCode).json(err.output.payload);
  } else {
    next(err);
  }
}
module.exports = { logErrors, errorHandler, boomErrorHandler };