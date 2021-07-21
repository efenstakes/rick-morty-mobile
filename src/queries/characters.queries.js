import { gql } from '@apollo/client'

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id 
                name
                status
                species
                origin {
                name
                }
                gender
                origin {
                name
                }
                image
            }
        }
    }
`;


export default {
    GET_CHARACTERS,
}