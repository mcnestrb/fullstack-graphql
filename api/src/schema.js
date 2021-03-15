const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String
  }

  input PetInput {
    type: String
  }

  input NewPetInput {
    type: String!
    name: String!
  }

  type Shoe {
    brand: String!
    size: Int!
  }

  input ShoeInput {
    brand: String
    size: Int
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(input: PetInput!): Pet
    shoes(input: ShoeInput): [Shoe]!
  }

  type Mutation {
    newPet(input: NewPetInput!): Pet!
    deletePet(input: NewPetInput!): Pet
  }
`;

module.exports = typeDefs
