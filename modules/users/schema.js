import { gql } from "apollo-server-core";

export default gql`

type User{
    _id: ID
    name: String
    email: String
    password: String
    verified: Boolean
    contact: String
    created_at: String
    udpated_at: String
}

type UserInput{
    name: String!
    email: String!
    password: String!
    verified: Boolean!
    contact: String!
    created_at: String!
    udpated_at: String!
}

type Query{
    users: [User],
    user: User,
}

type Mutation{
    addUser(UserInput): Book  
}

`;