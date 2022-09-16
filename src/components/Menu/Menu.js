import React from 'react'
import { ComponentsStyled, ComponentGrid, Component, ComponentCard } from './MenuElements'
import { Components } from '../../data/data'

export const Menu = () => {
  console.log(Components)
  return (
    <ComponentsStyled>
      {
        Object.entries(Components).map(([sectionName, components]) => {
          return (
            <>
              <h3>{sectionName}</h3>
              <ComponentGrid>
                {components.map((component) => (
                  <ComponentCard>
                    <Component img={component.img}>
                      <h5>{component.name}</h5>
                    </Component>
                  </ComponentCard>
                ))}
              </ComponentGrid>
            </>
          )
        })}
    </ComponentsStyled>
  )
}
