import React from 'react'
import { Menu } from '../components/Menu/Menu'
import { Navbar } from '../components/Navbar/Navbar'
import { useOpenComponents } from '../hooks/useOpenComponents'

export const Products = ({ opendComponents }) => {
  return (
    <>
      <Navbar />
      <Menu {...opendComponents} />
    </>
  )
}

