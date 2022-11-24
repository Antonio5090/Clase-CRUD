
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

const detalleCliente = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
  return await respuesta.json();
}

const actualizarCliente = async (id, nombre, email) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, email }),
    });
    return respuesta;
  } catch (error) {
    return console.log(error);
  }
}

export const ClientesServices = {
  listaDeClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
}