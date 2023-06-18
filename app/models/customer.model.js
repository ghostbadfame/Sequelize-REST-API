module.exports = (sequelize,Sequelize) =>{
    const customers = sequelize.define('customer',{
        name:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING,
            primaryKey:true
        },
        age:{
            type:Sequelize.INTEGER
        }
    });
    return customers; 

}