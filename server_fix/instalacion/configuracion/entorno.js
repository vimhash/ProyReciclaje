;
let initVar = () => {
    process.env.PORT = process.env.PORT || 7777
    process.env.CLIENT = process.env.CLIENT || 'pg'
    process.env.CONNECTION_DB = process.env.CONNECTION_DB || {
                                                                host: '127.0.0.1', 
                                                                user: 'postgres', 
                                                                password: '1234', 
                                                                database: 'integrador'
                                                              }
  }
  
  module.exports = {
    initVar
  }