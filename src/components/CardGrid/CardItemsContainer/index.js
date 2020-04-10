import React from 'react'

import { CardItemsContainerStyle } from './styles'

import Card from './Card'
import Title from './Card/Title'
import Description from './Card/Description'
import Price from './Card/Price'
import Detail from './Card/Detail'

const CardItemsContainerComponent = (props) => {
    {
        return props.products.map(eachProductItem => {
            return (
                <Card key={eachProductItem.id}>
                    <img src={eachProductItem.img} />
                    <Detail>
                        <Title>{eachProductItem.name}</Title>
                        <Description>{eachProductItem.description}</Description>
                        <Price>{eachProductItem.price}</Price>
                    </Detail>
                </Card>
            )
        })
    }
}

const CardItemsContainer = (props) => {
    return (
        <CardItemsContainerStyle>
           <CardItemsContainerComponent {...props}/>
        </CardItemsContainerStyle>
        )
}

export default CardItemsContainer;