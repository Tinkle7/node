//in class way

export class Product {
  static products: Product[] = [];

  constructor(public title: string) {
    this.title = title;
  }

  save() {
    Product.products.push(this);
  }

  static fetchAll() {
    return this.products;
  }
}

// in functional way

//   interface Product {
//     title: string;
//   }

//   const products: Product[] = [];

//   export const addProduct = (title: string): void => {
//     const newProduct: Product = { title };
//     products.push(newProduct);
//   };

//   export const getAllProducts = (): Product[] => {
//     return [...products];
//   };
