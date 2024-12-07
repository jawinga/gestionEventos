class evento {
  nombre;
  fecha;
  hora;
  prioridad;
  participantes;

  constructor(nombre, fecha, hora, prioridad, participantes) {
    this.nombre = nombre;
    this.fecha = fecha;
    this.hora = hora;
    this.prioridad = prioridad;
    this.participantes = participantes;
  }
}

class participante {
  nombre;
  email;
  id;

  constructor(nombre, email, id) {
    this.nombre = nombre;
    this.fecha = email;
    this.id = id;
  }
}
