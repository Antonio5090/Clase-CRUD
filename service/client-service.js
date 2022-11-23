
const listaDeClientes = () => fetch('http://localhost:3000/perfil').then(answer => answer.json());

const crearCliente = (nombre, email) => {
  fetch('http://localhost:3000/perfil'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email}),
  }
}
export const VerListaClientes = {
  listaDeClientes,
}