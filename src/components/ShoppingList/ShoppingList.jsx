import React from 'react'
import { useSelector } from 'react-redux'
import Checkbox from '../../shared/Checkbox'
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors'
import { Wrapper, Title, Array } from './ShoppingList.styles'

function ShoppingList({ title, onToggle, displayOnlySelected }) {
  const products = useSelector(
    displayOnlySelected
    ? selectSelectedProducts 
    : selectAllProducts)

  return (
    <Wrapper>
      <Title>
        {title}:
      </Title>
      <Array>
        {
          products.map(product =>
            <Checkbox
              key={product.id}
              value={product.checked}
              title={product.name}
              onClick={() => onToggle(product.id, product.checked, product.name)}
            />
          )
        }
      </Array>
    </Wrapper>
  )
}

export default ShoppingList
