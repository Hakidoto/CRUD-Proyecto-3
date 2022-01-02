var Fila = null;
var ArrayUsuarios = [];

function onSubmit(){
    let DataForm = LeerDatos()
    if(Fila == null){
        AlmacenarDatos(DataForm)
    } else{
        ActualizarDatos(DataForm)
        VaciarDatos()
    }
}


function LeerDatos(){
let DataForm = {}
DataForm["nombre"] = document.getElementById("nombre").value
DataForm["aPat"] = document.getElementById("aPat").value
DataForm["aMat"] = document.getElementById("aMat").value
DataForm["direc"] = document.getElementById("direc").value
DataForm["email"] = document.getElementById("email").value
DataForm["ciudad"] = document.getElementById("ciudad").value

return DataForm
}

function AlmacenarDatos(DataForm){
   // ArrayUsuarios.push(DataForm)
   //localStorage.setItem("DatosUsuarios", JSON.stringify(ArrayUsuarios))
   let ListaUsuario = {
       "nombre" : DataForm.nombre,
       "aPat" : DataForm.aPat,
       "aMat" : DataForm.aMat,
       "direc" : DataForm.direc,
       "email" : DataForm.email,
       "ciudad" : DataForm.ciudad
   };
   if(localStorage.getItem('ArrayUsuarios') == null) {
       localStorage.setItem('ArrayUsuarios', '[]');
   }

   let usuarios = JSON.parse(localStorage.getItem('ArrayUsuarios'))
   usuarios.push(ListaUsuario);

   localStorage.setItem('ArrayUsuarios', JSON.stringify(usuarios));
   if(localStorage.getItem('ArrayUsuarios') != null) {
       console.log(JSON.parse(localStorage.getItem('ArrayUsuarios')));
   }

   InsertarDatos()
}

function InsertarDatos() {
let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
let Fila = table.insertRow(table.length)
var ListaCompleta = JSON.parse(localStorage.getItem("ArrayUsuarios"));
    console.log(ListaCompleta);

for(var i=1 in ListaCompleta){
    columna1 = Fila.insertCell(0).innerHTML = ListaCompleta[i].nombre
    columna2 = Fila.insertCell(1).innerHTML = ListaCompleta[i].aPat
    columna3 = Fila.insertCell(2).innerHTML = ListaCompleta[i].aMat
    columna4 = Fila.insertCell(3).innerHTML = ListaCompleta[i].direc
    columna5 = Fila.insertCell(4).innerHTML = ListaCompleta[i].email
    columna6 = Fila.insertCell(5).innerHTML = ListaCompleta[i].ciudad
    columna6 = Fila.insertCell(6).innerHTML = `<input class="submit" type="button" onClick="EditarDatos(this)" value="Editar">
                                            <input class="submit" type="button" onClick="BorrarDatos(this)" value="Borrar">`
}

document.getElementById("nombre").focus

}

function VaciarDatos(){
    document.getElementById("nombre").value = ""
    document.getElementById("aPat").value = ""
    document.getElementById("aMat").value = ""
    document.getElementById("direc").value = ""
    document.getElementById("email").value =  ""
    document.getElementById("ciudad").value = ""
    Fila=null
}

function EditarDatos(td){
Fila= td.parentElement.parentElement
document.getElementById("nombre").value = Fila.cells[0].innerHTML
    document.getElementById("aPat").value = Fila.cells[1].innerHTML
    document.getElementById("aMat").value = Fila.cells[2].innerHTML
    document.getElementById("direc").value = Fila.cells[3].innerHTML
    document.getElementById("email").value =  Fila.cells[4].innerHTML
    document.getElementById("ciudad").value = Fila.cells[5].innerHTML
}

function ActualizarDatos(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nombre
    Fila.cells[1].innerHTML = DataForm.aPat
    Fila.cells[2].innerHTML = DataForm.aMat
    Fila.cells[3].innerHTML = DataForm.direc
    Fila.cells[4].innerHTML = DataForm.email
    Fila.cells[5].innerHTML = DataForm.ciudad
    document.getElementById("nombre").focus

}

function BorrarDatos(td){
    if(confirm('¿Deseas eliminar permanentemente este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        VaciarDatos()
    }
}