import gql from "graphql-tag";

export const GET_DOCTORS = gql`
query FetchDoctor($petshopId: ID!) {
  fetchDoctor(PetshopId: $petshopId) {
    name
    imgUrl
    id
    gender
    education
    PetshopId
  }
}
`