let trabajadores = [
  new participante("Maria Gutierrez", "mariagutierrez@gmail.com", 1),
  new participante("Samuel Fernandez", "samuelfernandez@gmail.com", 2),
  new participante("Sergio Perez", "sergioperez@gmail.com", 3),
  new participante("Maria Sanchez", "mariasanchez@gmail.com", 4),
  new participante("Cristian Harders", "cristianharders@gmail.com", 5),
  new participante("Eus Dalsio", "eusdalsio@gmail.com", 6),
];

let nombreEvento = document.querySelector("#nombreEvento");
let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");
let descripcion = document.querySelector("#descripcion");
let prioridad = document.querySelector("#prioridad");
let btnCrear = document.querySelector("#btnCrear");
let participantesCheck = document.querySelectorAll(".btn-check");

function prioridadNivel() {
  if (prioridad.value == 1) {
    let baja = console.log("Prioridad: Baja");
    return baja;
  } else if (prioridad.value == 2) {
    let media = console.log("Prioridad: Media");
    return media;
  } else if (prioridad.value == 3) {
    let alta = console.log("Prioridad: Alta");

    return alta;
  } else if (prioridad.value == 4) {
    let urgente = console.log("Prioridad: Urgente");
    return urgente;
  } else {
    let noSeleccionado = console.log(
      "Prioridad:No ha seleccionado nivel de prioridad."
    );
    return noSeleccionado;
  }
}

let participantesSelect = [];

btnCrear.addEventListener("click", () => {
  let buscarTrabajador;

  participantesCheck.forEach((participante) => {
    if (participante.checked) {
      let idPart = document.querySelector(`label[for='${participante.id}']`);
      //participantesSelect.push(trabajadores[idPart]);

      /*
      if (idPart) {
        buscarTrabajador = trabajadores.find(
          (trabajador) => trabajador.id === idPart.innerText.trim()
        );

        if (buscarTrabajador) {
          participantesSelect.push(buscarTrabajador);
        }
      }
      */

      if (idPart) {
        let innerName = idPart.innerText;

        participantesSelect.push(innerName);
      }
    }
  });

  console.log("Nuevo evento:");
  console.log("Nombre: ", nombreEvento.value);
  console.log("Fecha: ", fecha.value);
  console.log("Hora: ", hora.value);
  console.log("Descripcion: ", descripcion.value);
  prioridadNivel();
  console.log("Participantes: ", participantesSelect);
});

let eventosCartas = document.querySelector("#eventosCartas");

btnCrear.addEventListener("click", (e) => {
  if (
    nombreEvento.value === "" ||
    fecha.value === "" ||
    hora.value === "" ||
    descripcion.value === "" ||
    prioridad.value === "" ||
    participantesSelect.length == 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    let crearCarta = document.createElement("div");

    crearCarta.innerHTML = `
  <div class="card" style="width: 18rem">
    <div class="ratio ratio-1x1">
      <img
        src="imagenes/${prioridad.value}.jpg"
        class="card-img-top"
        alt="prioridad ${prioridad.value}.jpg"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">${nombreEvento.value}</h5>
      <p class="card-text">${descripcion.value}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Prioridad: ${prioridadNivel()}</li>
      <li class="list-group-item">${fecha.value}</li>
      <li class="list-group-item">Participantes: ${participantesSelect.join(
        ", "
      )}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Ir a evento</a>
      <a href="#" class="card-link">Editar evento</a>
    </div>
  </div>`;

    eventosCartas.appendChild(crearCarta);

    nombreEvento.value = "";
    prioridad.value = "";
    hora.value = "";
    descripcion.value = "";
    fecha.value = "";
    participantesSelect = [];
    participantesCheck.checked = false;

    let imagenVacio = document.querySelector("#imagenVacio");
    imagenVacio.style.visibility = "hidden";

    participantesCheck.forEach((seleccionado) => {
      seleccionado.checked = false;
    });
  }
});
