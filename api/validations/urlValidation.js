const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateURLInput(data) {
  let errors = {};
  data.longUrl = !isEmpty(data.longUrl) ? data.longUrl : '';

  if (validator.isEmpty(data.longUrl)) {
    errors.longUrl = 'A long URL is Required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
