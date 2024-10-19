send = () => {
  alert("Mensagem enviada!");
  document
    .querySelectorAll("form#form-inscricao>input")
    .forEach((input) => (input.value = ""));
  document.querySelector("textarea").value = "";
  document.querySelector("select").value = "";
  document.querySelectorAll(".genero>input").forEach((radio) => {
    if (radio.checked) radio.checked = false;
  });
  return false;
};

document.querySelector("#clear-button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("limpo");

  document
    .querySelectorAll("form#form-inscricao>input")
    .forEach((input) => (input.value = ""));
  document.querySelector("textarea").value = "";
  document.querySelector("select").value = "";
  document.querySelectorAll(".genero>input").forEach((radio) => {
    if (radio.checked) radio.checked = false;
  });
});
