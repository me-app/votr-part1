var config = {};

config.couchdb = {};
config.twilio = {};

config.couchdb.url = 'https://mieke.cloudant.com';
config.couchdb.port = 443;
config.couchdb.username = 'mieke';
config.couchdb.password = 'maurice202';

config.twilio.sid = 'AC2ca4fecd69816443da8e2c43f272242c';
config.twilio.key = 'fa364c25818589b14512f87b3434b80e';
config.twilio.smsWebhook = 'https://nodeserver/vote/sms';
config.twilio.voiceWebhook = 'https://nodeserver/vote/voice';
config.disableTwilioSigCheck = false;

module.exports = config;
