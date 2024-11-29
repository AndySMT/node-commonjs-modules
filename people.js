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

function user() {
  return {
    nome: importName.fullName("Andy", "Simota"),
    hobby: importHobby.hobby(
      "F1",
      "LOL",
      "Qualsiasi altra cosa basta che non sia calcio"
    ),
  };
}
console.log(user());
