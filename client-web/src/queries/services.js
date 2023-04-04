import gql from "graphql-tag";

export const GET_SERVICES = gql`
query FetchService($petshopId: ID!) {
  fetchService(PetshopId: $petshopId) {
    serviceLogo
    minPrice
    name
    maxPrice
    PetshopId
    id
  }
}
` 