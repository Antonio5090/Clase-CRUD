
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

const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`,).then(respuesta => {
    return respuesta.json();
  })
}

const actualizarCliente = (id, nombre, email) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({nombre, email}),
}).then(respuesta => respuesta)
.catch(error => console.log(error))
}

export const ClientesServices = {
  listaDeClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}