
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = async (args) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: { "id": args.id, "firstName": args.firstName}
    };
    const r = await dynamoDb.get(params).promise();
    return r.Item;
};