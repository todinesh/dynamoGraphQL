const user = `
type User {
    id: Int
    firstName: String
    contactAddress: UserAddress
}

type Query {
    Users:[User]
    User(id:Int!,firstName:String):User
}

type Mutation {
    User(id:Int!, firstName:String):User
    deleteUser(id:Int!, firstName:String):User
}
`;

module.exports = user;