document.getElementById('formularioLogin') .addEventListener('submit',function (event) {
    event.preventDefault();
const usuario = document.getElementById ('usuario').value
const contrasena = document.getElementById ('contrasena').value
// Validacion basica
if (usuario === 'ADMIN' && contrasena === 'RamiroG' ) {
    alert ('Inicio de sesion exitoso. ¡Bienvenido Ramiro!');
    // Aqui podras redirigir a otra pagina:
    window.location.href = "https://youtu.be/QDia3e12czc?si=d_EYa3MGNEOq4p7u";
} else{
    alert('Usuario o contraseña incorrectos. Intenta nuevamente.');
}
});