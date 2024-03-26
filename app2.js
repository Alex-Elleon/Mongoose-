const alexleon = require('mongoose')
const url_db='mongodb://localhost:27017/alexelleon'

alexleon.connect(url_db)
.then(() =>{
    console.log('conexion exitosa')
})
.catch((err) => {
    console.log('No funcionó')
})

const alumnos_esquema = new alexleon.Schema(
    {
 name:{
    type:String
 },
 apepat:{
    type:String
 },
 numerotel:{
    type:Number
 }
}
)

const alumnos = new alexleon.model('Tabla de registro de alumnos', alumnos_esquema)

alumnos.create(
    {
        name:'Jesus',
        apepat:'Salazar',
        numerotel:8787878787
    }
)
