function validarFormulario() {
    let nombre=document.getElementById('nombre').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let tarea=document.getElementById('tarea').value
    if (nombre==='' || email==='' || password==='' || tarea===''){
        alert('Todos los campos son obligatorios \u263A ')
        return false
    }
    return true
}
