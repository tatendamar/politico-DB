import Joi from 'joi';

const validateOffice = office => {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    type: Joi.string()
      .min(2)
      .max(30)
      .required()
  };

  const options = {
    language: {
      msg: '{{msg}}'
    }
  };

  return Joi.validate(office, schema, options);
};

export default validateOffice;
