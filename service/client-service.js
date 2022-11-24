
const listaDeClientes = () => fetch('http://localhost:3000/perfil').then(answer => answer.json());

const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email, id:uuid.v4()}),
  });
};

export const ClientesServices = {
  listaDeClientes,
  crearCliente,
}