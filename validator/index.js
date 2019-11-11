const Ajv = require('ajv');
const schemaDraft = require('ajv/lib/refs/json-schema-draft-06.json');

const jsonEventsSchema = require('../events');

let ajv = new Ajv();
ajv.addMetaSchema(schemaDraft);
let validate = ajv.compile(jsonEventsSchema);


let validateSchema = function (data) {
  let error;

  //debug error
  // var valid = ajv.validate(jsonEventsSchema, data);
  // if (!valid) console.log(ajv.errors);

  let result = validate(data);
  if (!result) {
    error = {code: 400, message: `Invalid format.`};
    data = null;
  }
  return {data, error};
};



module.exports = validateSchema;