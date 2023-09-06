interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Sales Manager', 'Customer Service Representative', 'Inventory Manager'],
  tenantName: 'Marketplace',
  applicationName: 'BLOOP',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View item listings',
    'Search for specific items',
    'Purchase items',
    'View item details',
    'Track order status',
  ],
  ownerAbilities: [
    'Manage Marketplace',
    'Invite Sales Managers, Customer Service Representatives, and Inventory Managers to the application',
  ],
};
