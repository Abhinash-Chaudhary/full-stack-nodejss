const {Sequelize, DataTypes,} = require('sequelize');


const sequelize = new Sequelize("postgresql://postgres.rqrmvtfaqliyvfkvuzdz:%23Abhinash%402000@aws-0-ap-south-1.pooler.supabase.com:6543/postgres");

sequelize.authenticate()
.then( ()=>{
  console.log("Connection established successfully");  
})

.catch((err)=>{
  console.log("Error:" + err);
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = Sequelize;

module.exports = db;