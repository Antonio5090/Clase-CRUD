const registrar = document.querySelector('[data-form]');

registrar.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const nombreCliente = document.querySelector('[data-nombre]').value;
    const emailCliente = document.querySelector('[data-email]').value;
    console.log(nombreCliente, emailCliente);
})