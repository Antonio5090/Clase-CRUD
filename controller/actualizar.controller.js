import { ClientesServices } from "../service/client-service.js";

const formulario = document.querySelector('[data-form]')

const obtenerInformacion = async() => {

    const urlCliente = new URL(window.location);
    const id = urlCliente.searchParams.get('id');

    if(id == null){
        window.location.href = "../screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try {
        const perfil = await ClientesServices.detalleCliente(id);
        if(perfil){
        nombre.value = perfil.nombre;
        email.value = perfil.email;
        }else {
            throw new Error("No se pudo obtener el perfil");
        }
    } catch (error) {
        console.log(error);
    }

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