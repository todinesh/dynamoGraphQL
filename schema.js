const { makeExecutableSchema } = require('graphql-tools');
const create = require('./dynamo/create');
const findOne = require('./dynamo/findOne');
const findAll = require('./dynamo/findAll');
const deleteOne = require('./dynamo/delete');
const typeUser =  require('./typeUser');
const typeUserAddress =  require('./typeUserAddress');

const resolvers = {
    Query: {
        Users: (parent, args) => {
            return findAll();
        },
        User: (parent, args, context, info) => {
            return findOne(args);
        },
    },
    Mutation: {
        User: (parent, args) => {
            return create(args);
        },
        deleteUser:  (parent, args) => {
            return deleteOne(args);
        },
    },
    User:{
        contactAddress: () => {
            return {
                id: 1,
                street: 'K Street',
                city: 'Washington',
                state: 'DC',
                zip: '0000'
            }
        }
    },
};

const schema = makeExecutableSchema({
    typeDefs: [typeUser, typeUserAddress],
    resolvers
});

module.exports = schema;