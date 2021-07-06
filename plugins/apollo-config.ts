import { gql } from 'graphql-tag';
import LOCAL_SCHEMA from '../apollo/local-schema.graphql';
import { GET_LAUNCH_BY_ID } from '~/apollo/queries/launchById';

export default () => {
  const typeDefs = gql`
    ${LOCAL_SCHEMA}
  `;

  return {
    httpEndpoint: 'https://api.spacex.land/graphql',
    ssr: true,
    typeDefs,
    resolvers: {
      Launch: {
        notes() {
          return 'N/A';
        }
      },
      Mutation: {
        addNotes: (
          _: any,
          { id, notes }: { id: string; notes: string },
          { cache }: any
        ) => {
          const data = cache.readQuery({
            query: GET_LAUNCH_BY_ID,
            variables: { id }
          });

          data.launch.notes = notes;

          cache.writeQuery({
            query: GET_LAUNCH_BY_ID,
            variables: { id },
            data
          });

          return data.launch.notes;
        }
      }
    }
  };
};
