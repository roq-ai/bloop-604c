import { InventoryInterface } from 'interfaces/inventory';
import { OrderInterface } from 'interfaces/order';
import { VideoInterface } from 'interfaces/video';
import { MarketplaceInterface } from 'interfaces/marketplace';
import { GetQueryInterface } from 'interfaces';

export interface ItemInterface {
  id?: string;
  name: string;
  category: string;
  price: number;
  status: string;
  marketplace_id: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order?: OrderInterface[];
  video?: VideoInterface[];
  marketplace?: MarketplaceInterface;
  _count?: {
    inventory?: number;
    order?: number;
    video?: number;
  };
}

export interface ItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  category?: string;
  status?: string;
  marketplace_id?: string;
}
