import { ItemInterface } from 'interfaces/item';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MarketplaceInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  item?: ItemInterface[];
  user?: UserInterface;
  _count?: {
    item?: number;
  };
}

export interface MarketplaceGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
