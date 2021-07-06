import productsMock from '../../mocks/products.json'

export default function (state = productsMock.products, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            return state.map(product =>
                product.id === action.payload
                    ? { ...product, checked: !product.checked }
                    : product
            )

        default:
            return state
    }
}