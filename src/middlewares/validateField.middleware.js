import { validationResult } from "express-validator";

const validateField = (request, response, next) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    return response
      .status(200)
      .json({ errors: errors.array() });
  }
  next();
};

export { validateField };
