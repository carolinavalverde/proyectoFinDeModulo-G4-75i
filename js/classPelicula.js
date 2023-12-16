export default class Pelicula {
    #codigo;
    #titulo;
    #categoria;
    #descripcion;
    #publicada;
    #destacada;
  
    constructor(
      codigo,
      titulo,
      categoria,
      descripcion,
      publicada = false,
      destacada = false
    ) {
      this.#codigo = codigo;
      this.#titulo = titulo;
      this.#categoria = categoria;
      this.#descripcion = descripcion;
      this.#publicada = publicada;
      this.#destacada = destacada;
    }
  
    get codigo() {
      return this.#codigo;
    }
  
    get titulo() {
      return this.#titulo;
    }
  
    get categoria() {
      return this.#categoria;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    get publicada() {
      return this.#publicada;
    }
  
    get destacada() {
      return this.#destacada;
    }
  
    set codigo(codigo) {
      this.#codigo = codigo;
    }
  
    set titulo(titulo) {
      this.#titulo = titulo;
    }
  
    set categoria(categoria) {
      this.#categoria = categoria;
    }
  
    set descripcion(descripcion) {
      this.#descripcion = descripcion;
    }
  
    set publicada(publicada) {
      this.#publicada = publicada;
    }
  
    set destacada(destacada) {
      this.#destacada = destacada;
    }
  
    toJSON() {
      return {
        codigo: this.codigo,
        titulo: this.titulo,
        categoria: this.categoria,
        descripcion: this.descripcion,
        publicada: this.publicada,
        destacada: this.destacada,
      };
    }
  }