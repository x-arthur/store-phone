const valor = document.querySelector("#valor");
const entrada = document.querySelector("#entrada");
const calcular = document.querySelector("button");

const v = document.querySelector("#v");
const p = document.querySelector("#p");
const t = document.querySelector("#t");

calcular.addEventListener("click", (e) => {
  v.innerHTML = "";
  p.innerHTML = "";
  t.innerHTML = "";
  if (Number(entrada.value) >= Number(valor.value)) {
    console.log(`Entrada é maior:`);
    alert(`O valor da entrada é maior do que o valor do produto`);
  } else {
    let diferenca = valor.value - entrada.value;
    console.log(diferenca);
    let mes = diferenca / 18;
    console.log(mes);

    for (let i = 1; i <= 18; i++) {
      let m = diferenca * Math.pow(0.024697, 1);
      diferenca = m + diferenca;
      let itemv = document.createElement("li");
      itemv.innerHTML = i;
      v.appendChild(itemv);
      let itemp = document.createElement("li");
      itemp.innerHTML = (diferenca / i).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      p.appendChild(itemp);
      let itemt = document.createElement("li");
      itemt.innerHTML = diferenca.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      t.appendChild(itemt);
    }
  }
});
