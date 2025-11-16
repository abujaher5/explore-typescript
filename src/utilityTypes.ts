// utility types

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  color?: string;
};
type ProductSummary = Pick<Product, "id" | "name" | "price">; // want to use this type thats why use Pick<>
type ProductWithOutStock = Omit<Product, "stock" | "color">; // don't want  stock and color type from the Product type thats why use Omit<>

type ProductWithColor = Required<Product>; // thats mean all type  is required also optional type like color?:string

const product: ProductWithColor = {
  id: 123,
  name: "watch",
  price: 200,
  stock: 100,
  color: "black",
}; // no error occur
type OptionProduct = Partial<Product>; // all the product type is optional

type ProductReadOnly = Readonly<Product>;

const product1: ProductReadOnly = {
  id: 123,
  name: "watch",
  price: 200,
  stock: 10,
  color: "black",
};
// product1.color='green' // can't do this cause product1 key has readonly modifiers

// define an empty object type using Record modifiers

const emptyObj: Record<string, unknown> = {};
// const pro={
// id: 123, key:string,value:number or anything .
// name:'abc' key:string , value: anything or unknown
// }
