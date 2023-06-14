// Product Details structure
export interface Product {
  _id: string;
  name: string;
  description: string;
  station: string;
  createdAt: string;
  price: number;
}
export interface Ingredients {
  name: string;
  price: number;
}
export interface Sides {
  name: string;
  price: number;
}
export interface OrderDetails {
  _id: string;
  orderItem: [
    {
      product: Product;
      quantity: number;
      notes?: string;
      add?: Ingredients[];
      remove?: Ingredients[];
      sides?: Sides[];
      guestNumber?: number;
    }
  ];
}
export interface TableDetails {
  _id: string;
  tableNumber: number;
  capacity: number;
  orderDetails: OrderDetails;
}

export type CurrencyType = string;

// Registration Interface
export interface RegisterUserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  dob: string;
  companySize: string;
  companyName: string;
  companyLifeSpan: string;
  // Address fields
  street: string;
  addressLine: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface LoginUserData {
  email: string;
  password: string;
}

export interface CompanySizeOptions {
  name: string;
  icon: any;
  value: string;
}


export interface UserLoginData {
  email: string;
  password: string;
}