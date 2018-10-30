import gql from 'graphql-tag'

export const ReturnFieldsCheckout = gql`
fragment ReturnFieldsCheckout on Checkout {
    id
    webUrl
    lineItems(first: 250) {
        edges {
            node {
                id
                title
                quantity
                variant {
                    sku
                    price
                    compareAtPrice
                    selectedOptions {
                        name
                        value
                    }
                }
            }
        }
    }
}
`