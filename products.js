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


const frutas = document.querySelector(".fruits");
const bebidas = document.querySelector(".drinks");
const higiene = document.querySelector(".hygiene");
const corpo = document.querySelector(".products-content")

// function criarLista(array) {

//   for(let i=0;i<array.length;i++){
//   const tagUl = document.createElement("ul")
//   const productCard = document.createElement("li");
//   const productImg = document.createElement("img");
//   const productMain = document.createElement("main");
//   const productTitle = document.createElement("h1");
//   const productCategory = document.createElement("h5");
//   const productPrice = document.createElement("strong");

//   productCard.classList.add("product");
//   productImg.classList.add("product-img");
//   productMain.classList.add("product-main");
//   productTitle.classList.add("product-title");
//   productCategory.classList.add("product-category");
//   productPrice.classList.add("product-price");

//   products[i].image = (products[i].image == undefined) ? "./img/products/no-img.svg": products[i].image
//   productImg.src =  `${products[i].image}`
//   productTitle.innerText = `${products[i].title}`;
//   productCategory.innerText = `${products[i].category}`;
//   productPrice.innerHTML = `${products[i].price}`;

//   productCard.appendChild(productImg);
//   productCard.appendChild(productMain);
//   productMain.appendChild(productTitle);
//   productMain.appendChild(productCategory);
//   productMain.appendChild(productPrice);
//   tagUl.appendChild(productCard)
//   corpo.appendChild(tagUl)

//   if(products[i].category === "Higiene"){
//     higiene.appendChild(productCard)
//   }
//   if(products[i].category === "Bebidas"){
//     bebidas.appendChild(productCard)
//   }
//   if(products[i].category === "Frutas"){
//   frutas.appendChild(productCard)
//   }

// }

// }

// criarLista(products)







function teste(array) {
  const tagUl = document.createElement("ul")
  
  
  for(let i=0;i<array.length;i++){
  
  const productCard = document.createElement("li");
  const productImg = document.createElement("img");
  const productMain = document.createElement("main");
  const productTitle = document.createElement("h1");
  const productCategory = document.createElement("h5");
  const productPrice = document.createElement("strong");

  productCard.classList.add("product");
  productImg.classList.add("product-img");
  productMain.classList.add("product-main");
  productTitle.classList.add("product-title");
  productCategory.classList.add("product-category");
  productPrice.classList.add("product-price");

  products[i].image = (products[i].image == undefined) ? "./img/products/no-img.svg": products[i].image
  productImg.src =  `${products[i].image}`
  productTitle.innerText = `${products[i].title}`;
  productCategory.innerText = `${products[i].category}`;
  productPrice.innerHTML = `${products[i].price}`;

  productCard.appendChild(productImg);
  productCard.appendChild(productMain);
  productMain.appendChild(productTitle);
  productMain.appendChild(productCategory);
  productMain.appendChild(productPrice);
  tagUl.appendChild(productCard)
  

  if(products[i].category === "Higiene"){
    higiene.appendChild(productCard)
  }
  if(products[i].category === "Bebidas"){
    bebidas.appendChild(productCard)
  }
  if(products[i].category === "Frutas"){
  frutas.appendChild(productCard)
  }

}
corpo.appendChild(tagUl)
console.log(tagUl)
}
teste(products)