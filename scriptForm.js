const inputNome = document.getElementById("nome");
const inputPadrone = document.getElementById("nome-padrone");
const inputSpecie = document.getElementById("specie");
const inputRazza = document.getElementById("razza");

const saveButton = document.querySelector("form button");

const rubricaPelosa = [];

class Animale {
  constructor(_nome, _nomePadrone, _specie, _razza) {
    (this.nome = _nome),
      (this.nomePadrone = _nomePadrone),
      (this.specie = _specie),
      (this.razza = _razza);
    this.stessoPadrone = function () {
      if (this.nomePadrone === animale2.nomePadrone) {
        return `${this.nome} e ${animale2.nome} hanno lo stesso padrone`;
      } else {
        return `Non sono fratellini`;
      }
    };
  }
}

// const animale1 = new Animale("Mika", "Alessia", "Cane", "Maremmano");

// const animale2 = new Animale("Olivia", "Alessia", "Cane", "Bastardino");

// console.log(animale1);
// console.log(animale2);
// console.log(animale2.stessoPadrone(animale2));

const fillRowWithCards = function () {
  const row = document.getElementById("cards-animali");
  row.innerHTML = "";

  rubricaPelosa.forEach((animale) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `  <div class="col-3 card my-5">
        <img
          src="https://placedog.net/300"
          class="card-img-top"
          alt="doggo"
        />
        <div class="card-body">
          <h4>${animale.nome}</h4>
          <h5>${animale.nomePadrone}</h5>
          <p class="card-text">${animale.specie}</p>
          <p>${animale.razza}</p>
        </div>
      </div>`;

    row.appendChild(newCol);
  });
  inputNome.value = "";
  inputPadrone.value = "";
  inputSpecie.value = "";
  inputRazza.value = "";
};

const formSubmit = document.getElementsByTagName("form")[0];
formSubmit.addEventListener("submit", function (e) {
  e.preventDefault();

  const animale = new Animale(
    inputNome.value,
    inputPadrone.value,
    inputSpecie.value,
    inputRazza.value
  );
  rubricaPelosa.push(animale);
  fillRowWithCards();
});
