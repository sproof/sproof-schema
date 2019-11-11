const eventsSchema = require('./events');
const profileSchema = require ('./objects/profile');
const validator = require ('./validator');
const eventValidator = require ('./validator/events');


module.exports = {
  eventsSchema,
  profileSchema,
  validator,
  eventValidator
};
