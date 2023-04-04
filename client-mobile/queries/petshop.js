import { gql } from "@apollo/client";

export const GET_ALL_PETSHOP = gql`
  query Query {
    getAllPetshops {
      id
      name
      logo
      address
      location {
        type
        coordinates
      }
      phoneNumber
      UserId
      PhoneNumber
    }
  }
`;
