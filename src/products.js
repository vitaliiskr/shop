/* eslint-disable quotes */
const products = [
  {
    id: 1,
    name: "article 1",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt utlabore et dolore magna aliqua.",
    price: 25,
    img: "@/images/product.jpg",
  },
  {
    id: 2,
    name: "article 2",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 35,
    img: "./images/product.jpg",
  },
  {
    id: 3,
    name: "article 3",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: 45,
    img: "../images/product.jpg",
  },
];

export default products;
