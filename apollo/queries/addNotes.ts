import { gql } from 'graphql-tag';

export const ADD_NOTES = gql`
  mutation addNotes($id: ID!, $notes: String!) {
    addNotes(id: $id, notes: $notes) @client
  }
`;
