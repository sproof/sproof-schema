const profileSchema = require('../objects/profile');
const _ =  require('lodash');


const profileUpdateKeySchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Update Profile Key",
  "description": "Update profile key sproof event",
  "type": "object",
  properties : {
    "eventType" : {
      "type" : "string",
      "enum" : ["PROFILE_UPDATE_KEY"]
    },
    data: {
      type : 'object',
      properties: {
        : {
          description: "Description for revocation",
          type: "string",
          maxLength: 512,
          minLength: 512,
        }
      }
    }
  },
  "required" : ['eventType', 'data']
};

module.exports = profileUpdateKeySchema;