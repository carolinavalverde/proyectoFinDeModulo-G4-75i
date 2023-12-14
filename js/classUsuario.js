export default class Usuario {
  #id;
  #administrador;
  #nombreApellido;
  #nombreUsuario;
  #email;
  #telefono;
  #domicilio;
  #localidad;
  #codigoPostal;
  #contrasena;

  constructor(
    administrador = false,
    nombreApellido,
    nombreUsuario,
    email,
    telefono,
    domicilio,
    localidad,
    codigoPostal,
    contrasena
  ) {
    this.#id = crypto.randomUUID();
    this.#administrador = administrador;
    this.#nombreApellido = nombreApellido;
    this.#nombreUsuario = nombreUsuario;
    this.#email = email;
    this.#telefono = telefono;
    this.#domicilio = domicilio;
    this.#localidad = localidad;
    this.#codigoPostal = codigoPostal;
    this.#contrasena = contrasena;
  }

  get id() {
    return this.#id;
  }

  get administrador() {
    return this.#administrador;
  }

  get nombreApellido() {
    return this.#nombreApellido;
  }

  get nombreUsuario() {
    return this.#nombreUsuario;
  }

  get email() {
    return this.#email;
  }

  get telefono() {
    return this.#telefono;
  }

  get domicilio() {
    return this.#domicilio;
  }

  get localidad() {
    return this.#localidad;
  }

  get codigoPostal() {
    return this.#codigoPostal;
  }

  get contrasena() {
    return this.#contrasena;
  }

  set administrador(administrador) {
    this.#administrador = administrador;
  }

  set nombreApellido(nombreApellido) {
    this.#nombreApellido = nombreApellido;
  }

  set nombreUsuario(nombreUsuario) {
    this.#nombreUsuario = nombreUsuario;
  }

  set email(email) {
    this.#email = email;
  }

  set telefono(telefono) {
    this.#telefono = telefono;
  }

  set domicilio(domicilio) {
    this.#domicilio = domicilio;
  }

  set localidad(localidad) {
    this.#localidad = localidad;
  }

  set codigoPostal(codigoPostal) {
    this.#codigoPostal = codigoPostal;
  }

  set contrasena(contrasena) {
    this.#contrasena = contrasena;
  }

  toJSON() {
    return {
      id: this.id,
      administrador: this.administrador,
      nombreApellido: this.nombreApellido,
      nombreUsuario: this.nombreUsuario,
      email: this.email,
      telefono: this.telefono,
      domicilio: this.domicilio,
      localidad: this.localidad,
      codigoPostal: this.codigoPostal,
      contrasena: this.contrasena,
    };
  }
}
