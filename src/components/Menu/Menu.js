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
import { Spinner } from '@chakra-ui/react';

export const Menu = ({ onProductAdd }) => {
  const cates = useCategories();
  const products = useProducts();
  const dispatch = useDispatch();
  const [section, setSection] = useState(null);

  const addToOrder = (components) => {
    if (cates.isLoading === false && products.isLoading === false) {
      dispatch(cartActions.addItem(components));
      toast.success('Item agregado al carrito', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });

      onProductAdd();
    }
  };

  let Products = products?.data?.reduce((res, comp) => {
    if (!res[comp.categoryId]) {
      res[comp.categoryId] = [];
    }
    res[comp.categoryId] = [...res[comp.categoryId], comp];
    return res;
  }, {});

  let filteredProducts = Products;

  if (section) {
    filteredProducts = { [section]: Products[section] };
  }

  return (
    <ComponentsStyled>
      <h2>NUESTROS PRODUCTOS</h2>

      {cates.isLoading === true || products.isLoading === true ? (
        <div
          style={{
            padding: '20px',
          }}
        >
          <Spinner />
        </div>
      ) : (
        <>
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
            {Object.entries(filteredProducts)?.map(
              ([sectionName, components]) => {
                return (
                  <React.Fragment
                    key={`${sectionName}-${components[0]?.category}`}
                  >
                    {components.map((components) => (
                      <ComponentCard key={`${sectionName}-${components.id}`}>
                        <Component img={components.imgUrl}>
                          <h5>{components.name}</h5>
                          <p>{formatPrice(components.price)}</p>
                          <AddToCardButton
                            onClick={() => addToOrder(components)}
                          >
                            Agregar al carrito
                          </AddToCardButton>
                        </Component>
                      </ComponentCard>
                    ))}
                  </React.Fragment>
                );
              }
            )}
          </ComponentGrid>
          <Toaster position="bottom-center" />
        </>
      )}
    </ComponentsStyled>
  );
};
