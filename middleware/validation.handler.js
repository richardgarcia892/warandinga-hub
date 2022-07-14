const boom = require('@hapi/boom');

// TODO: MEJORAR ESTO (prueba unitaria para esta funcion)
function validationHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validationHandler;
