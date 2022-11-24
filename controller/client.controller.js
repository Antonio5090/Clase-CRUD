import { ClientesServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
const linea = document.createElement("tr");
const contenido = `
    <td class="td" data-td>
    ${nombre}
    </td>
    <td>${email}</td>
    <td>
    <ul class="table__button-control">
        <li>
        <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
        >
            Editar
        </a>
        </li>
        <li>
        <button class="simple-button simple-button--delete" type="button" id=${id}>
            Eliminar
        </button>
        </li>
    </ul>
    </td>
`;
linea.innerHTML = contenido;
const botonEliminar = linea.querySelector("button");
botonEliminar.addEventListener("click", () => {
    const idbtn = botonEliminar.id;
    ClientesServices.eliminarCliente(idbtn).then(() => {
    }).catch((error) => {
        alert('No se pudo eliminar')
    });
})
return linea;
};

const table = document.querySelector("[data-table]");

ClientesServices.listaDeClientes().then((data) => {
data.forEach(({nombre, email, id}) => {
    const nuevaLinea = crearNuevaLinea(nombre, email, id);
    table.appendChild(nuevaLinea);
});
})
.catch((error) => alert("servidor no iniciado"));

