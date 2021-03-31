class Serie {
  constructor(nombre, personajes = []) {
    this.nombre = nombre;
    this.personajes = personajes;
  }

  agregarPersonajes(personaje) {
    this.personajes.push(personaje);
  };

  getPersonajes(grab) {
      const resultados = document.getElementById("resultados");
      resultados.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3">
        <div class="card mb-4">
          <img class="card-img-top" src="${grab.getImagen()}" alt="Información del Personaje">
          <div class="card-body">
            <h5 class="card-title">${grab.getNombre()}</h5>
            <p class="card-text">Especie: ${grab.getEspecie()}</p>
          </div>
        </div>
      </div>
      `
  };
};

export default Serie;