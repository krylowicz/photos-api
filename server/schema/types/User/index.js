const User = `
  type User {
    _id: String!
    name: String!
    password: String!
    role: String!
    photos: [Photo!]!
    domain: String!
  }

  type Query {
    currentUser: User
    user(_id: ID, name: String): User
    users(name: String): [User!]!
  }

  type Mutation {
    login(name: String!, password: String!): LoginResponse!
    createUser(name: String!, password: String!, domain: String!): User!
    updateUser(_id: String!, name: String, password: String, domain: String): User!
    deleteUser(_id: String!): User
  }

  type LoginResponse {
    token: String
    user: User
  }
`

module.exports = {
  User
}
