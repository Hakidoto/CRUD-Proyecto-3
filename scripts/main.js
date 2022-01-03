var Fila = null
var ArrayUsuarios = [];

window.onload = function(){
    DesplegarTabla()
}

function onSubmit() {
        let DataForm = LeerDatos()
        if (Fila == null){
            AlmacenarDatos(DataForm)
        } else{
            Actualizar(DataForm)
            Vaciar()
    }
}
function LeerDatos() {
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
    var RecibirObjeto = JSON.parse(localStorage.getItem('ArrayUsuarios'));

    var tbody = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    
    for (var i = RecibirObjeto.length -1 ; i < RecibirObjeto.length; i++) {
      var tr = "<tr>";
      tr += "<td>" + RecibirObjeto[i].nombre + "</td>" + "<td>" + RecibirObjeto[i].aPat + "</td>" 
      + "<td>" + RecibirObjeto[i].aMat + "</td>" + "<td>" + RecibirObjeto[i].direc + "</td>" + "<td>" + RecibirObjeto[i].email + "</td>" +
      "<td>" + RecibirObjeto[i].ciudad + "</td>" + "<td>" + "<input class='submit' type='button' onClick='EditarDatos(this)' value='Editar'>" +
      "<input class='submit' type='button' onClick='BorrarDatos(this)' value='Borrar'>" + "</td>" + "</tr>" ;
      tbody.innerHTML += tr;
    }
   document.getElementById("nombre").focus
}

function DesplegarTabla(){

    var RecibirObjeto = JSON.parse(localStorage.getItem('ArrayUsuarios'));

    var tbody = document.getElementById("tabla").getElementsByTagName('tbody')[0];
    
    for (var i = 0; i < RecibirObjeto.length; i++) {
      var tr = "<tr>";
      tr += "<td>" + RecibirObjeto[i].nombre + "</td>" + "<td>" + RecibirObjeto[i].aPat + "</td>" 
      + "<td>" + RecibirObjeto[i].aMat + "</td>" + "<td>" + RecibirObjeto[i].direc + "</td>" + "<td>" + RecibirObjeto[i].email + "</td>" +
      "<td>" + RecibirObjeto[i].ciudad + "</td>" + "<td>" + "<input class='submit' type='button' onClick='EditarDatos(this)' value='Editar'>" +
      "<input class='submit' type='button' onClick='BorrarDatos(this)' value='Borrar'>" + "</td>" + "</tr>" ;
      tbody.innerHTML += tr;
    }
}

function Vaciar() {
    document.getElementById("nombre").value = ""
    document.getElementById("aPat").value = ""
    document.getElementById("aMat").value = ""
    document.getElementById("direc").value = ""
    document.getElementById("email").value = ""
    document.getElementById("ciudad").value = ""
    Fila = null
}
function EditarDatos(td) {
    Fila = td.parentElement.parentElement
    document.getElementById("nombre").value = Fila.cells[0].innerHTML
    document.getElementById("aPat").value = Fila.cells[1].innerHTML
    document.getElementById("aMat").value = Fila.cells[2].innerHTML
    document.getElementById("direc").value = Fila.cells[3].innerHTML
    document.getElementById("email").value = Fila.cells[4].innerHTML
    document.getElementById("ciudad").value = Fila.cells[5].innerHTML

}
function Actualizar(DataForm) {
    Fila.cells[0].innerHTML = DataForm.nombre
    Fila.cells[1].innerHTML = DataForm.aPat
    Fila.cells[2].innerHTML = DataForm.aMat
    Fila.cells[3].innerHTML = DataForm.direc
    Fila.cells[4].innerHTML = DataForm.email
    Fila.cells[5].innerHTML = DataForm.ciudad
    document.getElementById("nombre").focus()
}
function BorrarDatos(td) {
    if (confirm('¿Seguro de borrar este registro?')) {
        row = td.parentElement.parentElement
        document.getElementById("tabla").deleteRow(row.rowIndex)
        Vaciar()
    }

    var index = ArrayUsuarios.indexOf(td);
    if(index > -1){
        ArrayUsuarios.splice(index, 1);
    }
    localStorage.setItem("ArrayUsuarios", JSON.stringify(ArrayUsuarios));
    return ArrayUsuarios;
}