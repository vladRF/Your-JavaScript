//let myName = "vlad";
//
//console.log(`${myName.charAt(0).toUpperCase() + myName.slice(1)}`)

function fullName(firstName, surname) {
  let correctFirstName = firstName.charAt(0).toUpperCase() + firstName.toLowerCase().slice(1);
  let correctSurname = surname.charAt(0).toUpperCase() + surname.toLowerCase().slice(1);

  console.log(`${correctFirstName} ${correctSurname}`);
}

fullName("владиСлав", "боЛогов");
