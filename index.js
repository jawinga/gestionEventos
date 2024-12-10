let nombreEvento = document.querySelector("#nombreEvento");
let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");
let descripcion = document.querySelector("#descripcion");
let prioridad = document.querySelector("#prioridad");
let btnCrear = document.querySelector("#btnCrear");
let participantesCheck = document.querySelectorAll(".btn-check");

function prioridadNivel() {
  switch (prioridad.value) {
    case "1":
      return "Baja";
    case "2":
      return "Media";
    case "3":
      return "Alta";
    case "4":
      return "Urgente";
    default:
      return "No seleccionada";
  }
}

let participantesSelect = [];

btnCrear.addEventListener("click", () => {
  participantesCheck.forEach((participante) => {
    if (participante.checked) {
      let idPart = document.querySelector(`label[for='${participante.id}']`);

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

btnCrear.addEventListener("click", () => {
  if (
    nombreEvento.value === "" ||
    fecha.value === "" ||
    hora.value === "" ||
    descripcion.value === "" ||
    prioridad.value === "" ||
    participantesSelect.length === 0
  ) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor, rellena todos los campos.",
    });
  } else {
    const crearCol = document.createElement("div");
    crearCol.className = "col-md-6"; // Each card takes half of the row width.

    const crearCarta = `
    <div class="card ${
      prioridad.value
    } animate__animated animate__backInUp" style="width: 100%;">
      <div class="ratio ratio-1x1">
        <img src="imagenes/${
          prioridad.value
        }.jpg" alt="prioridad" class="card-img-top" />
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
    </div>
  `;

    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    crearCol.innerHTML = crearCarta;
    document.querySelector("#eventosCartas").appendChild(crearCol);

    // Clear form
    nombreEvento.value = "";
    fecha.value = "";
    hora.value = "";
    descripcion.value = "";
    prioridad.value = "";
    participantesSelect = [];
    document
      .querySelectorAll(".btn-check")
      .forEach((checkbox) => (checkbox.checked = false));

    // Hide empty image
    document.querySelector("#imagenVacio").style.display = "none";
  }
});

let select = document.querySelector("#select");

select.addEventListener("change", (e) => {
  let cartaPrioridad = document.querySelectorAll(".card");
  let cartasArray = Array.from(cartaPrioridad);
  let filtrarPrioridad = select.value;

  let cartasNoVisibles = cartasArray.filter(
    (carta) => !carta.classList.contains(filtrarPrioridad)
  );
  let cartasVisibles = cartasArray.filter((carta) =>
    carta.classList.contains(filtrarPrioridad)
  );

  cartasNoVisibles.forEach((card) => {
    card.classList.add("d-none");
  });

  cartasVisibles.forEach((card) => {
    card.classList.remove("d-none");
  });

  if (filtrarPrioridad === "0") {
    cartasArray.forEach((carta) => carta.classList.remove("d-none"));
    return;
  }
});

eventosCartas.addEventListener("mouseover", (e) => {
  let card = e.target.closest(".card");

  if (card) {
    card.classList.add("border", "border-dark", "border-2");
  }
});

eventosCartas.addEventListener("mouseout", (e) => {
  let card = e.target.closest(".card");

  if (card) {
    card.classList.remove("border", "border-dark", "border-2");
  }
});

/*eventosCartas.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.remove("border", "border-dark");
  }
});
*/

/*
cartaPrioridad.forEach((carta) => {
  carta.addEventListener("mouseover", (e) => {
    carta.classList.add("border border-dark");
  });
});

cartaPrioridad.forEach((carta) => {
  carta.addEventListener("mouseout", (e) => {
    carta.classList.remove("border border-dark");
  });
});

*/
