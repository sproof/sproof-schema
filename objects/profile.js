const profileSchema =  {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "Profile",
  "description": "A sproof profile",
  "type": "object",
  "properties": {
    "name": {
      "description": "The name of a user",
      "type": "string",
      "minLength" : 3,
    },
    profileText: {
      description: "Additional text for the profile",
      type: "string",
      "title": "Add your profile text",
      "maxLength": 500,
      "validationMessage": "Don't be greedy!"
    },
    "image": {
      "description": "A base64 encoded string of a image",
      "type": "string",
      "minLength": 1
    },
    website: {
      description: "The website of the user. To increase the trust, the user has to upload a file on rootdomain/sproof.html",
      type: "string",
      pattern : "^((http\\:\\/\\/|https\\:\\/\\/)([a-z0-9][a-z0-9\\-]*\\.)+[a-z0-9][a-z0-9\\-]*$)?$"
    },
    "socialMedia": {
      "type": "array",
      "description": "Array of social media post and user account. This is to increase the trust of the users account",
      "items": {
        "type": "object",
        "properties": {
          "userId": {
            "description": 'The unique userid of a social media account.',
            "type": "string"
          },
          "messageId": {
            "description": "The unique message_id which contrains the public key of the user",
            "type": "string"
          },
          "platform": {
            "type": "string",
            "description": "Name of the social media platform"
          }
        },
        "required": ["userId", "messageId", "platform"]
      },
      "minItems": 0,
      "uniqueItems": true
    },
  },
  "required" : ["name"]
};

module.exports = profileSchema;