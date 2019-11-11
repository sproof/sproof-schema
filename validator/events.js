const Ajv = require('ajv');
const schemaDraft = require('ajv/lib/refs/json-schema-draft-06.json');

const jsonEventsSchema = require('../events/events');

let ajv = new Ajv();
ajv.addMetaSchema(schemaDraft);
let validate = ajv.compile(jsonEventsSchema);


let validateSchema = function (data) {
  let error;
  if (!validate(data)) {
    error = {code: 400, message: `Invalid format.`};
    data = null;
  }
  return {data, error};
};



module.exports = validateSchema;