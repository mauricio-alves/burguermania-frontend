export interface OrderInterface {
  status: number;
  value: number;
  observation: string;
  productOrders: {
    productId: number;
    quantity: number;
  }[];
  userOrders: {
    userId: number;
  }[];
}
