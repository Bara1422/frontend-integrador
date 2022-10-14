import React, { useState } from 'react';
import {
  ComponentsStyled,
  ComponentGrid,
  Component,
  ComponentCard,
  AddToCardButton,
  TagCard,
  TagsMenu,
} from './MenuElements';
import { formatPrice } from '../../utils/formatPrice';
import { useSelector, useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

export const Menu = ({ onProductAdd }) => {
  const dispatch = useDispatch();
  const [section, setSection] = useState(null);
  let Components = useSelector(state => state.products.components);
  const categories = useSelector(({ categories: { categories } }) => categories);


  if (section) {
    Components = { [section]: Components[section] };
  }

  const addToOrder = (components) => {
    dispatch(cartActions.addItem(components));
    toast.success('Item agregado al carrito',
      {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    onProductAdd();
  };

  return (
    <ComponentsStyled  >
      <h2 >NUESTROS PRODUCTOS</h2>
      <TagsMenu >
        {section && (
          <TagCard onClick={() => setSection(null)}>
            <p>Todos</p>
          </TagCard>
        )}
        {categories.map(category => (
          <TagCard
            onClick={() => setSection(category.section)}
            selected={category.section === section}
            key={uuidv4()}

          >
            <p>{category.section}</p>
          </TagCard>
        ))}
      </TagsMenu>
      <ComponentGrid >
        {
          Object.entries(Components).map(([sectionName, components]) => {
            return (
              <>
                {components.map((components) => (
                  <ComponentCard key={components.id}>
                    <Component img={components.img} >
                      <h5>{components.name}</h5>
                      <p>{formatPrice(components.price)}</p>
                      <AddToCardButton onClick={() => addToOrder(components)}>Agregar al carrito</AddToCardButton>
                    </Component>
                  </ComponentCard>
                ))}
              </>
            );
          })
        }
      </ComponentGrid>
      <Toaster
        position='bottom-center'
      />
    </ComponentsStyled >
  );

};
