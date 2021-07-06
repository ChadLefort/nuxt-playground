import { gql } from 'graphql-tag';

export const GET_LAUNCH_BY_ID = gql`
  query getLaunchById($id: ID!) {
    launch(id: $id) {
      notes @client
      id
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
