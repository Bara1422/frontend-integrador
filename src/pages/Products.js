import React from 'react';
import { useState } from 'react';
import { Menu } from '../components/Menu/Menu';
import { Navbar } from '../components/Navbar/Navbar';

export const Products = () => {


  const [shake, setShake] = useState(false);
  const hanldeProductAdd = () => {
    setShake(true);
    setTimeout(() => {
      setShake(false);
    }, 500);
  };
  return (
    <>
      <Navbar shake={shake} />
      <Menu onProductAdd={hanldeProductAdd} />
    </>
  );
}

