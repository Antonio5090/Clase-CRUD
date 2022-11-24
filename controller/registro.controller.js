import { ClientesServices } from "../service/client-service.js";

const registrar = document.querySelector('[data-form]');

registrar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    ClientesServices.crearCliente(nombre, email).then(() => {
        window.location.href = '/screens/registro_completado.html'
    })
    
    .catch(() => window.location.href = '/screens/error.html')
    
})