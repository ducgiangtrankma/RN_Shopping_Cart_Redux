import {images} from './assets';

export const COLORS = {
  red1: 'rgba(245, 42, 42,0.2)',
  gray1: 'rgba(0,0,0,0.2) ',
  gray2: '#E0E0E0',
  gray3: '#9E9E9E',
  white: '#FFFFFF',
  green: '#43A047',
  red: '#E53935',
  gray: '#CFD8DC',
  black: '#000000',
};
export const categories = ['Urbanears', 'JBL', 'Sony', 'Skullcandy'];
export const data = [
  {
    id: 1,
    name: 'Urbanears Blue',
    price: 39.99,
    like: true,
    img: images.product1,
  },

  {
    id: 2,
    name: 'Urbanears Grey',
    price: 29.99,
    like: false,
    img: images.product2,
  },
  {
    id: 3,
    name: 'Urbanears Mint',
    price: 25.99,
    like: false,
    img: images.product3,
  },

  {
    id: 4,
    name: 'Urbanears Pink',
    price: 25.99,
    like: true,
    img: images.product4,
  },
  {
    id: 5,
    name: 'Urbanears Blue',
    price: 50.99,
    like: true,
    img: images.product1,
  },
  {
    id: 6,
    name: 'Urbanears Grey',
    price: 50.99,
    like: false,
    img: images.product2,
  },
];
