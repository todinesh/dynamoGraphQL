const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

if (process.env.AWS_ENDPOINT !== undefined) {
    AWS.config.update({
      endpoint: process.env.AWS_ENDPOINT
    });
}

module.exports = (data) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
            firstName: data.firstName,
            id: data.id
        }
    };
    return dynamoDb.put(params).promise()
        .then(result => params.Item)
};