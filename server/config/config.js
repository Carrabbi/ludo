import * as dotenv from 'dotenv'

dotenv.config({ path: './.env' })

const env = process.env.NODE_ENV;
// eslint-disable-next-line no-console

// eslint-disable-next-line consistent-return
function checkenv (){

  if ( env === "production" ){
    return {
       database: process.env.AUTH_DB,
       username: process.env.AUTH_DB_USER,
       password: process.env.AUTH_DB_PSWD,
       dialect: process.env.AUTH_DIALECT,
       host: process.env.AUTH_MYSQL_HOST,
       port: process.env.AUTH_PORT  
     }
   }
   
   if ( env === "development" ){
   
     return {
       database: process.env.AUTH_DB,
       username: process.env.AUTH_DB_USER,
       password: process.env.AUTH_DB_PSWD,
       dialect: process.env.AUTH_DIALECT,
       host: process.env.AUTH_MYSQL_HOST,
       port: process.env.AUTH_PORT  
     }
   }
   
   if ( env === "test" ){
     return {
         database: process.env.AUTH_DB,
         username: process.env.AUTH_DB_USER,
         password: process.env.AUTH_DB_PSWD,
         dialect: process.env.AUTH_DIALECT,
         host: process.env.AUTH_MYSQL_HOST,
         port: process.env.AUTH_PORT 
     }
   }
  

}


const sqconfig = checkenv();


export default sqconfig;
