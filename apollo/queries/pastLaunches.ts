import gql from 'graphql-tag';

export const GET_PAST_LAUNCHES = gql`
  query getPastLaunches {
    launchesPast {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
        second_stage {
          payloads {
            payload_type
          }
        }
      }
    }
  }
`;
