let trabajadores = [
  new participante("Maria Gutierrez", "mariagutierrez@gmail.com"),
  new participante("Samuel Fernandez", "samuelfernandez@gmail.com"),
  new participante("Sergio Perez", "sergioperez@gmail.com"),
  new participante("Maria Sanchez", "mariasanchez@gmail.com"),
  new participante("Cristian Harders", "cristianharders@gmail.com"),
  new participante("Eus Dalsio", "eusdalsio@gmail.com"),
];

let nombreEvento = document.querySelector("#nombreEvento");
let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");
let descripcion = document.querySelector("#descripcion");
let prioridad = document.querySelector("#prioridad");
let btnCrear = document.querySelector("#btnCrear");
let participantesCheck = document.querySelectorAll(".btn-check");

btnCrear.addEventListener("click", () => {
  let participantesSelect = [];

  participantesCheck.forEach((participante) => {
    if (participante.checked) {
      let idPart = document.querySelector(`label[for=${participante.id}]`);
      participantesSelect.push(idPart.innerHTML);
    }
  });

  //Consola mostrar datos
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
  console.log("Nuevo evento:");
  console.log("Nombre: ", nombreEvento.value);
  console.log("Fecha: ", fecha.value);
  console.log("Hora: ", hora.value);
  console.log("Descripcion: ", descripcion.value);
  prioridadNivel();
  console.log("Participantes: ", participantesSelect);
});
