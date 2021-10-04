import startsv from './server.js';
import { gql } from 'apollo-server-core';

const typeDefs = gql`

type Author {
  id: ID
  name: String
  surname: String
}

  type Book {
    id: ID
    title: String
    author: Author
  }

  type Query {
    books: [Book]
    authors: [Author]
  }
`;

const authors = [
  {
    id: '23456789098765fghjkoiuy',
    name: 'Joe Juni',
    surname: 'Kate Chopin',
  },
  {
    id: '234567867899098765fghjkoiuy',
    name: 'Joe Kleber',
    surname: 'Paul Auster',
  },
];

const books = [
    {
      id: '4567890-sadsadf-adsfds',
      title: 'The Awakening',
      author: '23456789098765fghjkoiuy',
    },
    {
      id: '4567890-sadsadf-adsfdasd',
      title: 'City of Glass',
      author: '234567867899098765fghjkoiuy',
    },
];



const resolvers = {
    Query: {
      books: () => books,
      authors: () => authors,
    },
};

startsv(typeDefs, resolvers);
