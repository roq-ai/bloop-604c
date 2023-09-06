const mapping: Record<string, string> = {
  inventories: 'inventory',
  items: 'item',
  marketplaces: 'marketplace',
  orders: 'order',
  users: 'user',
  videos: 'video',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
