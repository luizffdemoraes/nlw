//Procurar botão
document
  .querySelector("#add-time")
  //Quando clicar no botão
  .addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  // Duplicar os campos. Que campos?
  // variavel constante
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true); // boolean: true ou false

  // Pegar os campos. Que campos?
  const fields = newFieldContainer.querySelectorAll("input");

  // Para cada campo, limpar
  fields.forEach(function (field) {
    // pegar o field do momento e limpa
    field.value = "";
    //console.log(field);
  });
  //console.log(fields[0].value);
  //fields[0].value = ""
  //fields[1].value = ""

  // Colocar nas paginas onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
