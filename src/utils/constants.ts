export const ENV_VARIABLES = {
    DB_HOST: 'DB_HOST',
    DB_PORT: 'DB_PORT',
    DB_USERNAME: 'DB_USERNAME',
    DB_PASSWORD: 'DB_PASSWORD',
    DB_NAME: 'DB_NAME'
}

export enum ROLESNAME {
    'SUPER ADMIN' = 'SUPER ADMIN',
    'ADMIN' = 'ADMIN',
    'HO' = 'HO',
    'DISTRIBUTOR' = 'DISTRIBUTOR',
    'SALESMAN' = 'SALESMAN',
    'ASM' = 'ASM',
    'ZSM' = 'ZSM',
    'RSM' = 'RSM',
    'CHANNEL HEAD' = 'CHANNEL HEAD',
    'CRO' = 'CRO',
    'HO - PROMOTION ONLY' = 'HO PROMOTION ONLY',
    'HO WITHOUT PROMO' = 'HO WITHOUT PROMO',
  }


  export enum MODULE_NAME {
    'USER' = 'User',
    'ROLES' = 'Roles',
    'DISTRIBUTOR' = 'Distributor',
    'ROUTE' = 'Route',
    'CUSTOMER' = 'Customer',
    'BEAT' = 'Beat',
    'VISIT' = 'Visit',
    'PROMOTIONS' = 'Promotion',
    'ORGANISATIONAL HIERARCHY' = 'Organisational-Hierarchy',
    'PRODUCTS' = 'Products',
    'REPORTS' = 'Reports',
    'INVENTORY' = 'Inventory',
    'ORDERS' = 'Orders',
    'VISUAL MERCHANDISE' = 'visual-Merchandise',
    'SALES ENTRY' = 'Sales-Entry',
    'TARGET' = 'Target',
    'REFERENCE MASTER' = 'Reference-Master',
    'NOTIFICATIONS' = 'Notifications',
    'GUEST' = 'guest',
    'INDIVIDUAL' = 'individual',
    'SETTINGS' = 'settings',
  }

  export enum ALLOWEDACTION {
    'CREATE' = 'create',
    'UPDATE' = 'update',
    'READ' = 'read',
    'delete' = 'delete',
    'MANAGE-ONLY' = 'manage-only',
  }