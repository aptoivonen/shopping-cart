const data = [
  {
    id: 1,
    title: "Original T-Shirt",
    description: "This t-shirt has attitude!",
    img: "https://unsplash.com/photos/fEt6Wd4t4j0",
    price: 1999,
  },
  {
    id: 2,
    title: "Leave the Road T-Shirt",
    description: "This t-shirt has attitude!",
    img: "https://unsplash.com/photos/VW5VjskNXZ8",
    price: 2499,
  },
  {
    id: 3,
    title: "Plain White T-Shirt",
    description: "This t-shirt has attitude!",
    img: "https://unsplash.com/photos/m1MRYp556Ew",
    price: 999,
  },
  {
    id: 4,
    title: "Fucking Awesome T-Shirt",
    description: "This t-shirt has attitude!",
    img: "https://unsplash.com/photos/2XcbGfYShfk",
    price: 2999,
  },
];

export const productExists = (id) => {
  return !!data.find((product) => product.id === id);
};

export default data;
