const Joi = require('joi');

const validateParty = party => {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(30)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    address: Joi.string()
      .alphanum()
      .min(4)
      .max(50)
      .required(),
    city: Joi.string()
      .min(2)
      .max(30)
      .required(),
    logo: Joi.string().required()
  };

  const options = {
    language: {
      msg: '{{msg}}'
    }
  };

  return Joi.validate(party, schema, options);
};

export default validateParty;
