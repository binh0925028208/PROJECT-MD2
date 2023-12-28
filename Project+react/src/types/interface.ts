export interface IProduct {
  id?: number;
  Productname: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  isDelete: number;
  category: string;
  scale: string;
  brand: string;
  scaleDetail: string;
}
export interface IComment {
  id?: number;
  idUser: number;
  idProduct: number;
  content: string;
  date: string;
}
export interface ICart extends IProduct {
  quantity: number;
}
export interface IOrderDetail {
  id?: number;
  idProducts: number;
  price: number;
  quantity: number;
  name: string;
}
export interface IOrder {
  id?: number;
  idUser: number;
  totalPrice: number;
  status: number;
  orderDetails: IOrderDetail[];
}
export interface IUser {
  id?: number;
  email: string;
  avatar: string;
  password: string;
  role: number;
  status: number;
  phone: string;
  address: string;
  cart: ICart[];
}
