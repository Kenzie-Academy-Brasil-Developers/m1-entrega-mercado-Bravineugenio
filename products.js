const frutas = document.querySelector(".fruits");
const drinks = document.querySelector(".drinks");
const higyen = document.querySelector(".hygiene");
//Mapeando os elementos pela classe
products.map((elemento) => {
  const listarProdutos = criarLista(elemento);

  if (elemento.category == "Frutas"){ 
    return frutas.appendChild(listarProdutos);
  } if (elemento.category == "Bebidas"){ 
    return drinks.appendChild(listarProdutos);
  } if (elemento.category == "Higiene"){ 
    return higyen.appendChild(listarProdutos);
  }
});
//criando a lista dos produtos
function criarLista(item) {
  const productCard = document.createElement("li");
  const productImg = document.createElement("img");
  const productMain = document.createElement("main");
  const productTitle = document.createElement("h1");
  const productCategory = document.createElement("h5");
  const productPrice = document.createElement("strong");

  productCard.appendChild(productImg);
  productCard.appendChild(productMain);
  productMain.appendChild(productTitle);
  productMain.appendChild(productCategory);
  productMain.appendChild(productPrice);


  productCard.classList = "product";
  productImg.classList = "product-img";
  productMain.classList = "product-main";
  productTitle.classList = "product-title";
  productCategory.classList = "product-category";
  productPrice.classList = "product-price";

  productImg.src =
  products[0].image;
  products[0].image === undefined ? "./img/products/no-img.svg"
  productTitle.innerHTML = products[0].title;
  productCategory.innerHTML = products[0].category;
  productPrice.innerHTML = products[0].price

}



const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

criarLista(products)