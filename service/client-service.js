
const listaDeClientes = () => fetch('http://localhost:3000/perfil').then(answer => answer.json());

export const VerListaClientes = {
  listaDeClientes,
}