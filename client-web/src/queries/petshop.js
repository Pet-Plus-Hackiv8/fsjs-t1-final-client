import { gql } from "@apollo/client";


export const GET_PETSHOP = gql`
query GetShopById($userId: Int) {
  getShopById(UserId: $userId) {
    phoneNumber
    name
    logo
    location {
      type
      coordinates
    }
    address
    UserId
    id
  }
}`

export const CREATE_PETSHOP = gql`
mutation PostPetshop($name: String, $address: String, $latitude: String, $longitude: String, $phoneNumber: String, $userId: Int, $logo: Upload) {
  postPetshop(name: $name, address: $address, latitude: $latitude, longitude: $longitude, phoneNumber: $phoneNumber, UserId: $userId, logo: $logo) {
    id
    name
    phoneNumber
    logo
    address
    PhoneNumber
  }
}`