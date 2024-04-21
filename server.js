import ex from 'express';
import dir from 'path';

const app = ex()
const dir_front = dir.resolve()
app.use(ex.static("actividades_front_end/build"))

app.listen('5500', function(){
    console.log('Servidor iniciado')
    // console.log(dir_front)
})

app.get('/', function(req, res){
    // console.log(dir_front + "/actividades_front_end/build/index.html")
    res.sendFile(dir_front + "/actividades_front_end/build/index.html")
})

app.get('/registrar', function(req, res){
    // console.log(dir_front + "/actividades_front_end/build/index.html")
    res.sendFile(dir_front + "/actividades_front_end/build/index.html")
})

app.get('/consultar', function(req, res){
    // console.log(dir_front + "/actividades_front_end/build/index.html")
    res.sendFile(dir_front + "/actividades_front_end/build/index.html")
})