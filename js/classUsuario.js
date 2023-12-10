class Usuario {
    #id;
    #estatusUsuario;
    #nombreApellido;
    #nombreUsuario;
    #email;
    #telefono;
    #domicilio;
    #localidad;
    #codigoPostal;
    #contraseña;
  
    constructor(estatusUsuario, nombreApellido, nombreUsuario, email, telefono, domicilio, localidad, codigoPostal, contraseña) {
      this.#id = crypto.randomUUID();
      this.#estatusUsuario = estatusUsuario;
      this.#nombreApellido = nombreApellido;
      this.#nombreUsuario = nombreUsuario;
      this.#email = email;
      this.#telefono = telefono;
      this.#domicilio = domicilio;
      this.#localidad = localidad;
      this.#codigoPostal = codigoPostal;
      this.#contraseña = contraseña;
    }
  
    // Métodos getter
    getId() {
      return this.#id;
    }
  
    getEstatusUsuario() {
      return this.#estatusUsuario;
    }
  
    getNombreApellido() {
      return this.#nombreApellido;
    }
  
    getNombreUsuario() {
      return this.#nombreUsuario;
    }
  
    getEmail() {
      return this.#email;
    }
  
    getTelefono() {
      return this.#telefono;
    }
  
    getDomicilio() {
      return this.#domicilio;
    }
  
    getLocalidad() {
      return this.#localidad;
    }
  
    getCodigoPostal() {
      return this.#codigoPostal;
    }
  
    getContraseña() {
      return this.#contraseña;
    }
  
    // Métodos setter
  
    setEstatusUsuario(estatusUsuario) {
      this.#estatusUsuario = estatusUsuario;
    }
  
    setNombreApellido(nombreApellido) {
      this.#nombreApellido = nombreApellido;
    }
  
    setNombreUsuario(nombreUsuario) {
      this.#nombreUsuario = nombreUsuario;
    }
  
    setEmail(email) {
      this.#email = email;
    }
  
    setTelefono(telefono) {
      this.#telefono = telefono;
    }
  
    setDomicilio(domicilio) {
      this.#domicilio = domicilio;
    }
  
    setLocalidad(localidad) {
      this.#localidad = localidad;
    }
  
    setCodigoPostal(codigoPostal) {
      this.#codigoPostal = codigoPostal;
    }
  
    setContraseña(contraseña) {
      this.#contraseña = contraseña;
    }
  }