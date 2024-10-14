// {id:,
//   name: "",
//   description: "",
//   category: "",
//   price: ,
//   img: ,
//   stock: 
// },
// archivo que pretendera emular la API de donde se obtienen los productos

const products = [
  {id:1,
    name: "Balanceado Gallinas Ponedoras",
    description: "breve descripcion",
    category: "Balanceados",
    price: 315,
    img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
    stock: 250,
  },
  {id:2,
    name: "Balanceado Cerdos Adultos",
    description: "breve descripcion",
    category: "Balanceados",
    price: 325,
    img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
    stock: 250,
  },
  {id:3,
    name: "Balanceado Conejos",
    description: "breve descripcion",
    category: "Balanceados",
    price: 470,
    img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
    stock: 250,
  },

  {id:4,
    name: "Balanceado Perros Adultos",
    description: "breve descripcion",
    category: "Balanceados",
    price: 1250,
    img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
    stock: 250,
  },
  {id:5,
    name: "Balanceado Gatos todas las Edades",
    description: "breve descripcion",
    category: "Balanceados",
    price: 2000,
    img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
    stock: 250,
  },
  {id:6,
  name: "Pollita Ponedora Lohmahn",
  description: "breve descripcion",
  category: "Animales",
  price: 2300,
  img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
  stock :1000 
},
{id:7,
  name: "Pollito Parrillero Broiler",
  description: "breve descripcion",
  category: "Animales",
  price: 990,
  img: "https://previews.123rf.com/images/eatcute/eatcute1505/eatcute150502017/39502191-icono-plana-mascotas-comida-para-perros-con-una-larga-sombra-icono-l%C3%ADnea.jpg",
  stock: 1000 
},
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod=>prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod=>prod.category === productCategory));
    }, 500);
  });
};

