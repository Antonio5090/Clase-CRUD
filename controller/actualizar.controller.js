import { ClientesServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]')

const obtenerInformacion = () => {

    const urlCliente = new URL(window.location);
    const id = urlCliente.searchParams.get('id');

    if(id == null){
        window.location.href = "../screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    ClientesServices.detalleCliente(id).then((perfil) => {
        nombre.value = perfil.nombre;
        email.value = perfil.email;
    })
}
obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const urlCliente = new URL(window.location);
    const id = urlCliente.searchParams.get('id');

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    ClientesServices.actualizarCliente(id, nombre, email).then(() => {
        window.location.href = "../screens/edicion_concluida.html";
    })
})