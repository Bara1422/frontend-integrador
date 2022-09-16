export const componentItem = [
  {
    id: 1,
    name: 'Placa de Video Gigabyte Radeon RX 590 Gaming 8GB GDDR5',
    img: '/img/rx590.jpg',
    section: 'Placa de video',
    description:
      'Placa de Video Gigabyte Radeon RX 590 Gaming 8GB GDDR5',
    price: 40000,
  },
  {
    id: 2,
    name: 'Micro AMD Ryzen 5 5600 - 6 Nucleos / 12 Threads 4.4Ghz AM4',
    img: '/img/imagen.png',
    section: 'Microprocesador',
    description:
      'Micro AMD Ryzen 5 5600 - 6 Nucleos / 12 Threads 4.4Ghz AM4',
    price: 50000,
  },
  {
    id: 3,
    name: 'Mother Gigabyte GA-A320M-H DDR4 USB3.1 AM4',
    img: '/img/mother_a320m.png',
    section: 'Motherboard',
    description:
      'Mother Gigabyte GA-A320M-H DDR4 USB3.1 AM4',
    price: 47000,
  },
  {
    id: 4,
    name: 'Micro Intel Core I5 11400 6 Núcleos / 12 Threads HT 4.4Ghz (11va Gen) LGA1200',
    img: '/img/i511400.png',
    section: 'Microprocesador',
    description:
      'Micro Intel Core I5 11400 6 Núcleos / 12 Threads HT 4.4Ghz (11va Gen) LGA1200',
    price: 47000,
  },
  {
    id: 5,
    name: 'Mother MSI H310M PRO-VDH (8va/9na Gen) S1151',
    img: '/img/msih310m.jpg',
    section: 'Motherboard',
    description:
      'Mother MSI H310M PRO-VDH (8va/9na Gen) S1151',
    price: 12000,
  },
  {
    id: 6,
    name: 'Placa de Video Palit NVIDIA GeForce GTX 1660 DUAL 6GB GDDR5',
    img: '/img/1660.png',
    section: 'Placa de video',
    description:
      'Placa de Video Palit NVIDIA GeForce GTX 1660 DUAL 6GB GDDR5',
    price: 65000,
  },
]

export const Components = componentItem.reduce((res, comp) => {
  if (!res[comp.section]) {
    res[comp.section] = [];
  }
  res[comp.section] = [...res[comp.section], comp]

  return res
}, {})