const products = [
    {
      id: 1,
      title: "pelota",
      price: 1000,
      thumbnail:
        "https://http2.mlstatic.com/D_NQ_NP_744914-MLA49984338877_052022-O.webp"
    },
    {
      id: 2,
      title: "Botines",
      price: 1250,
      thumbnail:
        "https://www.rossettideportes.com/media/catalog/product/cache/201bb9304c5ba5aaf8080b8ff3bbb6ff/b/o/botines-futbol-ninios-adidas-x-speedportal-3-fg-j-a-gw8460-121.jpg",
    },
    {
      id: 3,
      title: "Camiseta",
      price: 1850,
      thumbnail:
        "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/611f58bb7b4444bbb62eaeca012c57dd_9366/camiseta-titular-argentina-22.jpg",
    },
    {
      title: "Short",
      price: "1450",
      thumbnail:
        "https://static.dafiti.com.ar/p/adidas-5144-009794-1-product.jpg",
      id: 4,
    },
  ];
  
  class Products {
    static lastProductId = products[products.length - 1].id;
    constructor() {
      this.list = products;
    }
  
    getAll() {
      return this.list;
    }
    getById(productId) {
      return this.list.find((product) => product.id === +productId);
    }
  
    save(product) {
      const { title, price, thumbnail } = product;
      if (!title || !price || !thumbnail) {
        return { error: "nombre,precio  e imagen son campos obligatorios" };
      }
      Products.lastProductId++;
      const newProduct = {
        id: Products.lastProductId,
        title,
        price,
        thumbnail,
      };
      products.push(newProduct);
      return newProduct;
    }
    updateById(productId, product) {
      const productIndex = this.list.findIndex(
        (product) => product.id === +productId
      );
      if (productIndex < 0) return null;
  
      const { title, price, thumbnail } = product;
      const updatedProduct = {
        id: this.list[productIndex].id,
        title,
        price,
        thumbnail,
      };
      this.list[productIndex] = updatedProduct;
      return updatedProduct;
    }
  
    deleteById(productId) {
      const productIndex = this.list.indexOf(
        (producto) => producto.id === +productId
      );
      if (productIndex < 0) return null;
      return this.list.splice(productIndex, 1);
    }
  }
  
  module.exports = Products;