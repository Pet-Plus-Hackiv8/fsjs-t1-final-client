import gql from "graphql-tag";

export const GET_SCHEDULES = gql`
query FetchPetScheduleForPetshop($petshopId: ID!) {
  fetchPetScheduleForPetshop(PetshopId: $petshopId) {
    id
    details
    complete
    Pet {
      name
      species
      id
      User {
        email
        fullName
        id
      }
    }
    DoctorSchedule {
      time
      status
      day
      DoctorId
    }
  }
}`