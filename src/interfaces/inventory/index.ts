import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  item_id: string;
  quantity: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  item?: ItemInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_id?: string;
  status?: string;
}
