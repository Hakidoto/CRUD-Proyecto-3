var Fila = null;

function onSubmit(){
    let DataForm = LeerDatos()
    if(Fila == null){
        InsertarDatos(DataForm)
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

function InsertarDatos(data) {
let table = document.getElementById("tabla").getElementsByTagName('tbody')[0]
let Fila = table.insertRow(table.length)
columna1 = Fila.insertCell(0).innerHTML = data.nombre
columna2 = Fila.insertCell(1).innerHTML = data.aPat
columna3 = Fila.insertCell(2).innerHTML = data.aMat
columna4 = Fila.insertCell(3).innerHTML = data.direc
columna5 = Fila.insertCell(4).innerHTML = data.email
columna6 = Fila.insertCell(5).innerHTML = data.ciudad
columna6 = Fila.insertCell(6).innerHTML = `<input class="submit" type="button" onClick="EditarDatos(this)" value="Editar">
                                            <input class="submit" type="button" onClick="BorrarDatos(this)" value="Borrar">`
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