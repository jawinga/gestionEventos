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

  constructor(nombre, email) {
    this.nombre = nombre;
    this.fecha = email;
  }
}
