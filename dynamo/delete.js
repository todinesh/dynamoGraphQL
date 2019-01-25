const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = (args) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: { "id": args.id, "firstName": args.firstName}
    };
    return dynamoDb.delete(params).promise()
};