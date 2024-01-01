import fs from "fs";
import path from "path";
import mainModuleDirname from "../../util/path";

//in class way
export class Product {
  constructor(public title: string) {
    this.title = title;
  }

  save() {
    const p = path.join(mainModuleDirname, "../", "data", "products.json");
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        const dataString = data.toString();
        products = JSON.parse(dataString);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err);
      });
    });
  }

  static fetchAll(callback) {
    const p = path.join(mainModuleDirname, "../", "data", "products.json");
    fs.readFile(p, (err, data) => {
      if (err) {
        callback([]);
        return;
      }
      const dataString = data.toString();
      const products = JSON.parse(dataString);
      callback(products);
    });
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
