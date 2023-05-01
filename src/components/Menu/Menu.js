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
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import toast, { Toaster } from 'react-hot-toast';
import { useCategories } from '../../hooks/useCategories';
import { useProducts } from '../../hooks/useProducts';

export const Menu = ({ onProductAdd }) => {
  const cates = useCategories();
  let products = useProducts();
  const dispatch = useDispatch();
  const [section, setSection] = useState('');

  if (cates.isLoading === false && products.isLoading === false) {
    const addToOrder = (components) => {
      dispatch(cartActions.addItem(components));
      toast.success('Item agregado al carrito', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });

      onProductAdd();
    };

    let Products = products?.data?.reduce((res, comp) => {
      if (!res[comp.categoryId]) {
        res[comp.categoryId] = [];
      }
      res[comp.categoryId] = [...res[comp.categoryId], comp];
      return res;
    }, {});

    if (section) {
      Products = { [section]: Products[section] };
    }

    return (
      <ComponentsStyled>
        <h2>NUESTROS PRODUCTOS</h2>
        <TagsMenu>
          {section && (
            <TagCard onClick={() => setSection(null)}>
              <p>Todos</p>
            </TagCard>
          )}
          {cates?.data?.map((category) => (
            <TagCard
              onClick={() => setSection(category.id)}
              selected={category.id === section}
              key={category.id}
            >
              <p>{category.category}</p>
            </TagCard>
          ))}
        </TagsMenu>
        <ComponentGrid>
          {Object.entries(Products)?.map(([sectionName, components]) => {
            return (
              <React.Fragment key={`${sectionName}-${components[0].category}`}>
                {components.map((components) => (
                  <ComponentCard key={`${sectionName}-${components.id}`}>
                    <Component img={components.imgUrl}>
                      <h5>{components.name}</h5>
                      <p>{formatPrice(components.price)}</p>
                      <AddToCardButton onClick={() => addToOrder(components)}>
                        Agregar al carrito
                      </AddToCardButton>
                    </Component>
                  </ComponentCard>
                ))}
              </React.Fragment>
            );
          })}
        </ComponentGrid>
        <Toaster position="bottom-center" />
      </ComponentsStyled>
    );
  }
};
