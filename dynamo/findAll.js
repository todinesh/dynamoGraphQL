const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = () => dynamoDb.scan({ TableName: process.env.DYNAMODB_TABLE })
    .promise()
    .then(r => r.Items);  