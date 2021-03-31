import "../../assets/scss/style.scss";
import "regenerator-runtime/runtime.js";

import Serie from "./Serie";
import Personaje from "./Personaje";


const llamarPersonajes = (() => {
  const urlBase = "https://rickandmortyapi.com/api"
  let cantidadPersonajes = 0;

  const dataPrivada = async(url, urlP) => {
    let arr = [];
    try {
      const request = await fetch(url + urlP);
      const response = await request.json();
      arr = response.results;
    } catch(error) {
      console.log(`Ups! Ha ocurrido un error obteniendo los personajes: ${error}`);
    } finally {
      return arr;
    }
  }

  const funcionPublica1 = async() => {
    const serie = new Serie("Rick and Morty");
    const resultadosApi = await dataPrivada(urlBase, "/character");
    console.log(resultadosApi);
    cantidadPersonajes = resultadosApi.length;

    resultadosApi.forEach(e => {
      const pers = new Personaje(e.id, e.name, e.species, e.image);
      serie.agregarPersonajes(pers);
      serie.getPersonajes(pers);
    });
  };

  const funcionPublica2 = () => {
    const spinner = document.getElementById("spinner");
    const number = document.getElementById("cantidadPersonajes");
    spinner.setAttribute('style', 'display: none;')
    number.textContent =`${cantidadPersonajes}`
  }
  return {
    funcionPublica1,
    funcionPublica2
  }
})();

llamarPersonajes.funcionPublica1();
setTimeout(() => {
  llamarPersonajes.funcionPublica2();
}, 2000);
