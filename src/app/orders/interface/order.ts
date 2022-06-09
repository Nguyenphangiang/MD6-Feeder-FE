export interface Order {
  id ?: number;
  customerId ?: number;
  orderTime ?: Date;
  dishId ?: number;
  quantity ?: number;
  note ?: string;
  status ?: number;
}
