import express from 'express'
import cors from 'cors'
// Conexion a la BD
import db from './database/db.js'
// importar nuestro enrutador
import userRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs', userRoutes)

try {
    await db.authenticate()
    console.log('Conexion a la BD exitosa!!')
} catch (error) {
    console.log(`El error de conexion es: ${error}`)
}

app.listen(4000, ()=>{
    console.log('server running...');
});
