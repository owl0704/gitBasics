class Catalogue {
  constructor(title) {
    this.title = title;
    this.products = [];
  }
  checkReorders() {
    const result = { type: "Reorder", productIds: [] };
    this.products.forEach( (p) => {
      if (p.quantityInStock <= p.reorderLevel) {
        result.productIds.push(p.id);
      }
    });
    return result;
  }
  removeProductById(id) {
    const removedProduct = this.findProductById(id);
    if (removedProduct) {
      this.products = this.products.filter(
        (product) => product.id !== id // ***********
      );
    }
    return removedProduct;
  }
  findProductById(id) {
    const match = this.products.find((product) => id === product.id);
    return match;
  }

  addProduct(product) {
    if (!this.findProductById(product.id)) {
      this.products.push(product);
      return true;
    }
    return false;
  }
}
module.exports = Catalogue;
