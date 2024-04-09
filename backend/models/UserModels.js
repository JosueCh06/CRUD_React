// importar conexion a bd
import db from "../database/db.js";
// importar sequielize
import { DataTypes } from "sequelize";

const UserModel = db.define('blogs',{
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
})

export default UserModel