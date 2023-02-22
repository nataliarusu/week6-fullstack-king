const types = ['Citrus', 'Berries'];
const fruits = [
  {
    id: 1,
    title: 'Orange',
    image_path: '/images/orange.png',
    price: 1.5,
    fruit_description:
      'A great natural deodorizer. Simply throw the orange peels in a bin or in a stinky place and the smell is gone!',
    fruit_type: types[0],
  },
  {
    id: 2,
    title: 'Lemon',
    image_path: '/images/lemon.png',
    price: 1.8,
    fruit_description: 'Great hair toner. Keep away from eyes.',
    fruit_type: types[0],
  },
  {
    id: 3,
    title: 'Lime',
    image_path: '/images/lime.png',
    price: 1.2,
    fruit_description:
      'Keep away from UV light if handling the juice - the skin can become blistered, swollen or darker in colour.',
    fruit_type: types[0],
  },
  {
    id: 4,
    title: 'Goji berries',
    image_path: '/images/goji.png',
    price: 2.5,
    fruit_description:
      'Do not eat more than 8 a day or else you get lead poisoning',
    fruit_type: types[1],
  },
  {
    id: 5,
    title: 'Blackberry',
    image_path: '/images/blackberry.png',
    price: 2.2,
    fruit_description: 'Does not come with BBM unfortunately',
    fruit_type: types[1],
  },
  {
    id: 6,
    title: 'Banana pack of 6',
    image_path: '/images/banana.png',
    price: 1.0,
    fruit_description: 'Yes they are berries',
    fruit_type: types[1],
  },
];

export default fruits;
