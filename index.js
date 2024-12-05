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

  console.log("Nuevo evento:");

  console.log("Nombre: ", nombreEvento.value);
  console.log("Fecha: ", fecha.value);
  console.log("Hora: ", hora.value);
  console.log("Descripcion: ", descripcion.value);
  console.log("Prioridad: ", prioridad.value);
  console.log("Participantes: ", participantesSelect);
});
