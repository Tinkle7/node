import fs from "fs";
import path from "path";
import mainModuleDirname from "../../util/path";

const p = path.join(mainModuleDirname, "../", "data", "products.json");

const getProductsFromFile = (callback) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      callback([]);
      return;
    }
    const dataString = data.toString();
    const products = JSON.parse(dataString);
    callback(products);
  });
};

//in class way
export class Product {
  constructor(public title: string) {
    this.title = title;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    getProductsFromFile(callback);
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
