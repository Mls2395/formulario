import { getData, save } from "./firestore.js"

//addEventListener permite ejecutar la función cuando se haga click 
document.getElementById('btnGuardar').addEventListener('click', () => {
    document.querySelectorAll('.form-control').forEach(item => {
        verificar(item.id)
    })
    //verificar si existen estilos en rojo(is-invalid)
    if (document.querySelectorAll('.is-invalid').length == 0) {
        if (document.getElementById('btnGuardar').value == 'Guardar') {
            const persona = {
                run: document.getElementById('run').value,
                nom: document.getElementById('nombre').value.trim(),
                ape: document.getElementById('apellido').value.trim(),
                fecha: document.getElementById('fechaIngreso').value,
                email: document.getElementById('email').value,
                fono: document.getElementById('fono').value,
                sueldo: document.getElementById('sueldo').value
            }
            save(persona)
        }
    }
})
//DOMContentLoaded es una evento que se activa al recargar la página
window.addEventListener('DOMContentLoaded', () => {
    //función que recibe los datos de la db 
    getData((datos) => {
        let tabla = ''
        datos.forEach((doc) => {
            //data trae todos los valores de los documentos de la base datos
            const item = doc.data()

            tabla += `<tr>
            <td>${item.run}</td>
            <td>${item.nom}</td>
            <td>${item.ape}</td>
            <td>${item.fecha}</td>
            <td>${item.email}</td>
            <td>${item.fono}</td>
            <td>${item.sueldo}</td>
            <td nowrap>
                <button class="btn btn-warning">Editar</button>
                <button class="btn btn-danger">Eliminar</button>
            </td>
        </tr>`
        })
        document.getElementById('contenido').innerHTML = tabla
    })
})