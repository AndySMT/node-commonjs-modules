const importName = require("./utility/names");
console.log(importName);
console.log(importName.fullName("Gigi", "Becali"));

const importHobby = require("./utility/hobbies");
console.log(importHobby);
console.log(
  importHobby.hobby(
    "F1",
    "GP1",
    "Qualsiasi altra cosa basta che non sia calcio"
  )
);
