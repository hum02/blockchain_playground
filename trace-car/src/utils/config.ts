namespace Config {
  export const PROGRAM_ID = import.meta.env.VITE_PROGRAM_ID;
  export const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
  
  export const BASE_URL = "/api"
  export const AUTH_TOKEN_URL = "/auth-tokens"
  export const EVENTS_URL = `/neptune/trace-programs/${PROGRAM_ID}/events`
  export const GENERATE_WALLET_URL = `/wallets`

  // EVENT NAMES
  export const CREATE = "Create"
  export const UPDATE = "Update"
  
  // SAMPLE ITEMS DEFAULT SETTINGS
  export const DEFAULT_ITEMS_USER_NAME = "trace_demo"
  export const DEFAULT_ITEMS_OBJECT_ID = "trace_demo_sample_default_items"
  
  // USER DEFAULT SETTINGS
  export const USER_NAME = import.meta.env.VITE_USER_NAME
  export const USER_ITEMS_OBJECT_ID = "trace_demo_user_items"

  export const ENVIRONMENT_ID = "1712389165551188574"
}


export default Config