import decodeEnv from 'utils/decodeEnv';
import { config } from 'dotenv'

// load environment variables from a .env file into process.env
config()

// store current environment mode into the variable
const env = decodeEnv(process.env.REACT_APP_ENVIRONMENT || process.env.NODE_ENV)

// expose specific env config variables
const envConfig = {
  env,
};

export default envConfig
