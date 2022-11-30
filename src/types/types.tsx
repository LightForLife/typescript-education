export interface IAddress {
  street: string;
  city: "Gwenborough";
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}
