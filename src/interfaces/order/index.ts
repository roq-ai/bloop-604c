import { UserInterface } from 'interfaces/user';
import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  item_id: string;
  quantity: number;
  total_price: number;
  order_status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  item?: ItemInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  item_id?: string;
  order_status?: string;
}
