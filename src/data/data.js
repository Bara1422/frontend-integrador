 export const componentItem = [
  {
    key: 1,
    id: 1,
    name: 'Placa de Video Gigabyte Radeon RX 590 Gaming 8GB GDDR5',
    img: '/img/rx590.jpg',
     category: 'Placa de video',
    price: 40000,
  },
  {
    key: 2,
    id: 2,
    name: 'Micro AMD Ryzen 5 5600 - 6 Nucleos / 12 Threads 4.4Ghz AM4',
    img: '/img/imagen.png',
    category: 'Microprocesador',
    price: 50000,
  },
  {
    key: 3,
    id: 3,
    name: 'Mother Gigabyte GA-A320M-H DDR4 USB3.1 AM4',
    img: '/img/mother_a320m.png',
    category: 'Motherboard',
    price: 47000,
  },
  {
    key: 4,
    id: 4,
    name: 'Micro Intel Core I5 11400 6 Núcleos / 12 Threads HT 4.4Ghz (11va Gen) LGA1200',
    img: '/img/i511400.png',
    category: 'Microprocesador',
    price: 47000,
  },
  {
    key: 5,
    id: 5,
    name: 'Mother MSI H310M PRO-VDH (8va/9na Gen) S1151',
    img: '/img/msih310m.jpg',
    category: 'Motherboard',
    price: 12000,
  },
  {
    key: 6,
    id: 6,
    name: 'Placa de Video Palit NVIDIA GeForce GTX 1660 DUAL 6GB GDDR5',
    img: '/img/1660.png',
    category: 'Placa de video',
    price: 65000,
  }
];

export const arraySections = [
  {
    category: 'Placa de video',
  },
  {
    category: 'Motherboard',
  },
  {
    category: 'Microprocesador',
  },
]; 

 export const Components = componentItem.reduce((res, comp) => {
   if (!res[comp.category]) {
     res[comp.category] = [];
  }
   res[comp.category] = [...res[comp.category], comp];

  return res;
}, {}); 