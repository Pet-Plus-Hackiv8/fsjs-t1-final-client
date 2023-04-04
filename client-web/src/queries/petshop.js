import { gql } from "@apollo/client";


export const GET_PETSHOP = gql`
query GetShopById($userId: Int) {
    getShopById(UserId: $userId) {
      name
      id
      logo
    }
}`