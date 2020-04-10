import React, { Fragment } from 'react'

import CardGrid from '../components/CardGrid'
import HeaderContainer from '../components/CardGrid/HeaderContainer'
import Body from '../components/Body'
import Header from '../components/CardGrid/HeaderContainer/Header'
import CardItemsContainer from '../components/CardGrid/CardItemsContainer'


import products from '../data/products'

const Home = () => (
  <Fragment>

    {/*  <Sidebar/>
    <MainProductContent />
    <OrdersCheckout />
  */}
    <CardGrid>
      <HeaderContainer>
        <Header>
          Womens Shopping
          </Header>
      </HeaderContainer>
      <CardItemsContainer products={products} />
    </CardGrid>

  </Fragment>
)

export default Home
