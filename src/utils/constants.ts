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
    'USER' = 'USER',
  }


  export enum MODULE_NAME {
    'USER' = 'User',
    'ROLES' = 'Roles',
    'ORGANISATIONAL HIERARCHY' = 'Organisational-Hierarchy',
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