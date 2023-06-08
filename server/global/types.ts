export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  dob: Date;
  address: {
    street: string;
    addressLine: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
}

export interface userDetails {}

export interface LoginUserRequest {
  email: string;
  password: string;
}

