class User {
  constructor(_firstName, _lastName, _age, _location) {
    (this._firstName = _firstName),
      (this._lastName = _lastName),
      (this._age = _age),
      (this._location = _location),
      (this.piùVecchio = function () {
        if (this._age > utente2._age) {
          console.log(
            `Ciao io mi chiamo ${this._firstName} e sono più vecchia`
          );
        } else {
          console.log(
            `Ciao io mi chiamo ${utente2._firstName} e sono più giovane`
          );
        }
      });
  }
}

const utente1 = new User("Alessia", "Luongo", 28, "Veneto");
console.log(utente1);

const utente2 = new User("Aurora", "Luongo", 23, "Veneto");
console.log(utente2);

console.log(utente1.piùVecchio(utente2));
console.log(utente2.piùVecchio(utente1));
