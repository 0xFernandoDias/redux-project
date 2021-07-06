export function addProductToCart(id) {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: id
    }
}