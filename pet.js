// document.getElementById("petForm").addEventListener("submit", function (event) {
//   event.preventDefault();

//   let petNameIV = document.getElementById("petName").value;
//   let ownerNameIV = document.getElementById("ownerName").value;
//   let speciesIV = document.getElementById("species").value;
//   let breedIV = document.getElementById("breed").value;

//   let pets = [];

//   class Pet {
//     constructor(petName, ownerName, species, breed) {
//       this.petName = petName;
//       this.ownerName = ownerName;
//       this.species = species;
//       this.breed = breed;
//     }

//     checkOwner(anotherPet) {
//       if (this.ownerName === anotherPet.ownerName) {
//         return true;
//       } else {
//         return false;
//       }
//     }}

// }

// let anotherPet= function () {
//         let newPet = new Pet(
//           petNameField.value,
//           ownerNameField.value,
//           speciesField.value,
//           breedField.value
//         )
//   }

// );

const formNode = document.querySelector("form");
formNode.onsubmit = function (e) {
  e.preventDefault();

  console.log("form inviato");
};

let petName = document.getElementById("petName");
let ownerName = document.getElementById("ownerName");
let species = document.getElementById("species");
let breed = document.getElementById("breed");

let addBtn = document.getElementById("btnAddPet");
let petsList = document.getElementById("petsList");
let pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const makeAList = function () {
  petsList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = "Pet: " + pet.petName + ", owner: " + pet.ownerName;
    petsList.appendChild(newLi);
  });
};

addBtn.onclick = function () {
  let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
  pets.push(newPet);
  console.log(pets);
  makeAList();
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};
