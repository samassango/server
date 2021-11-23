const { gql } = require('apollo-server');

export const typeDefs = gql`
    type People {
    name: String
    height: String
    mass: String
    gender: String
    homeworld: String
  }

    type Query {
      peoples(page: Int):[People]
      search(search: String!):[People]
    }
  `;

