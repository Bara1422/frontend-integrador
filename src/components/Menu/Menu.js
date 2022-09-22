import React, { useState } from 'react'
import {
  ComponentsStyled,
  ComponentGrid,
  Component,
  ComponentCard,
  AddToCardButton,
  TagCard,
  TagsMenu,
} from './MenuElements'
import { Components, componentItem } from '../../data/data'
import { formatPrice } from '../../utils/formatPrice'
import { useOrders } from '../../hooks/useOrders'
import { useOpenComponents } from '../../hooks/useOpenComponents'
import { useSelector, useDispatch } from 'react-redux'
import * as cartActions from '../../redux/cart/cart-actions'

export const Menu = ({ openComponents }) => {
  const dispatch = useDispatch()
  const [section, setSection] = useState(null)
  const Components = useSelector(state => state.products.components)
  const categories = useSelector(state => state.categories.categories)


  if (section) {
    Components = { [section]: Components[section] }
  }

  const addToOrder = (component) => {
    dispatch(cartActions.addItem(component))
    console.log(component)
  }

  return (
    <ComponentsStyled>
      <h2>NUESTROS PRODUCTOS</h2>
      <TagsMenu>
        {
          (
            <TagCard onClick={() => setSection(null)}>
              <p>Todos</p>
            </TagCard>
          )}
        {
          categories.map(category => (
            <TagCard onClick={() => setSection(category.section)}
              selected={category.section === section}
            >
              <p>{category.section}</p>
            </TagCard>
          ))
        }
      </TagsMenu>
      <ComponentGrid>

        {componentItem.map((component) => (
          <ComponentCard>
            <Component img={component.img} >
              <h5>{component.name}</h5>
              <p>{formatPrice(component.price)}</p>
              <AddToCardButton onClick={() => addToOrder(component)}>Agregar al carrito</AddToCardButton>
              {console.log(addToOrder)}
            </Component>
          </ComponentCard>
        ))}

      </ComponentGrid>
    </ComponentsStyled>
  )
}
