export interface IProduct {
   jasper: any;
   id: number;
   title: string;
   price: number;
   description: string;
   category: string;
   image: string;
   rating: {
      rate: number;
      count: number;
   }
}

export interface ICartProduct extends IProduct {
   amount: number;
 }

export interface IWishlistProduct extends IProduct {
   amount: number;
}

export interface IUser {
   jasper: any;
   id: number;
   email: string;
   username: string;
   password: string;
   name: {
      firstname: string;
      lastname: string;
   };
   address: {
      city: string;
      street: string;
      number: number;
      zipcode: string;
      geolocation: {
         lat: string;
         long: string;
      }
   }
   phone: string;  
}

