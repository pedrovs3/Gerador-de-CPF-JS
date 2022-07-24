import GeraCPF from "./modules/GeraCPF";
import "./assets/css/styles.css";

(function () {
  const gera = new GeraCPF();
  const cpfGerado = document.querySelector(".cpf-gerado");
  cpfGerado.innerHTML = gera.geraNovoCpf();
})();

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("cpf-gerado")) {
    const cpf = e.target;
    copyToClipboard(cpf);
  }
});

function copyToClipboard(cpf) {
  navigator.clipboard.writeText(cpf.innerText);
  alert("Cpf copiado com sucesso!");
}
