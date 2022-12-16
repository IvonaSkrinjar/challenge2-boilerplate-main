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

