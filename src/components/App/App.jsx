import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import LineChart from '../../shared/LineChart'

import AppContainer from '../AppContainer'
import AppHeader from '../AppHeader'
import ShoppingList from '../ShoppingList'

import { selectSelectedProductTotalPrice, selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selectors'

import { addProductToCart } from '../../store/Products/Products.actions'

import extractPercentage from '../../utils/extractPercentage'

import { Wrapper, Container } from './App.styles'

function App() {
  const dispatch = useDispatch()

  const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

  const products = useSelector(selectAllProducts)
  const selectedProducts = useSelector(selectSelectedProducts)
  const totalPrice = useSelector(selectSelectedProductTotalPrice)

  console.log(totalPrice)

  function handleToggle(id) {
    dispatch(addProductToCart(id))
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="Available products"
              onToggle={handleToggle}
              />}
              middle={
                <ShoppingList
                title="Your shopping list"
                onToggle={handleToggle}
                displayOnlySelected
            />}
          right={<div>
            Statistics

            <LineChart
              color={colors[0]}
              title="Healthy"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts
                  .filter(product => product.tags.includes('healthy'))
                  .length
              )}
            />
            <LineChart
              color={colors[1]}
              title="Not so healthy"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts
                  .filter(product => product.tags.includes('junk'))
                  .length
              )}
            />
            <LineChart
              color={colors[2]}
              title="Cleaning"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts
                  .filter(product => product.tags.includes('cleaning'))
                  .length
              )}
            />
            <LineChart
              color={colors[3]}
              title="Others"
              percentage={extractPercentage(
                selectedProducts.length,
                selectedProducts
                  .filter(product => product.tags.includes('others'))
                  .length
              )}
            />

            <div style={{ marginTop: 12 }}>
              <h2 style={{ fontWeight: 400, fontSize: 12, color: '#00364A' }}>
                Expenditure forecast:
              </h2>
              <div style={{ fontSize: 24 }}>
                { totalPrice.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  style: 'currency',
                  currency: 'USD'
                }) }
              </div>
            </div>
          </div>}
        />
      </Container>
    </Wrapper>
  )
}

export default App