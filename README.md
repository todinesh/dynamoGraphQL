# Setup and Install
```
npm install
npm install serverless -g
```

#Setup local env
```
npm install serverless-dynamodb-local
npm install serverless-offline -g
serverless dynamodb install
```

#Start locally
```
serverless offline start
```

#Insert test data
```
http://localhost:4000/local/query?query=mutation{User(id:1,firstName:"Joe"){id,firstName}}
http://localhost:4000/local/query?query=mutation{User(id:2,firstName:"Jane"){id,firstName}}
```

#Query test data
```
http://localhost:4000/local/query?query={User(id:1,firstName:"Joe"){id,firstName,contactAddress{street,city}}}
http://localhost:4000/local/query?query={Users{id,firstName,contactAddress{street,city}}}
```

#Delete test data
```
http://localhost:4000/local/query?query=mutation{deleteUser(id:1,firstName:"Joe"){id}}
http://localhost:4000/local/query?query=mutation{deleteUser(id:2,firstName:"Jane"){id}}
```