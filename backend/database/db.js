import {Sequelize} from 'sequelize'

const db = new Sequelize('prueba', 'root', 'mysql',{
    host:'localhost',
    dialect:'mysql'
})

export default db