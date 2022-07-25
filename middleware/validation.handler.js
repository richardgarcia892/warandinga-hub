import { badRequest } from '@hapi/boom';

// TODO: MEJORAR ESTO (prueba unitaria para esta funcion)
function validationHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(badRequest(error));
    }
    next();
  };
}

export { validationHandler };
