import { ItemInterface } from 'interfaces/item';
import { GetQueryInterface } from 'interfaces';

export interface VideoInterface {
  id?: string;
  duration: number;
  item_id: string;
  created_at?: any;
  updated_at?: any;

  item?: ItemInterface;
  _count?: {};
}

export interface VideoGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_id?: string;
}
