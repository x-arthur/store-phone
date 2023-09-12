const valor = document.querySelector("#valor");
const entrada = document.querySelector("#entrada");
const calcular = document.querySelector("button");

const v = document.querySelector("#v");
const p = document.querySelector("#p");
const t = document.querySelector("#t");

calcular.addEventListener("click", (e) => {
  // console.log(valor);
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
      // console.log(`${i} -- ${m}`);
      console.log(`- ${i} ------------------------------------`);
      console.log(`DIFERENÇA: ${diferenca.toFixed(2)}`);
      console.log(`PARCELAS: ${diferenca.toFixed(2) / i} `);

      let itemv = document.createElement("li");
      itemv.innerHTML = i;
      v.appendChild(itemv);
      let itemp = document.createElement("li");
      itemp.innerHTML =
        (diferenca/i).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        }) ;
      p.appendChild(itemp);
      let itemt = document.createElement("li");
      itemt.innerHTML = diferenca.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }) ;
      t.appendChild(itemt);
    }

    // const parcela = document.createElement('h2');
    // parcela.innerHTML = 'Parcela';
    // const vparcela = document.createElement('h2');
    // vparcela.innerHTML = 'Valor da Parcela';
    // const vtotal = document.createElement('h2');
    // vtotal.innerHTML = 'Total';
    // valores.appendChild(parcela);
    // valores.appendChild(vparcela);
    // valores.appendChild(vtotal);
  }
});

// for (let i = 2; i <= 18; i++) {
//   juros +=  juros;
//   console.log(`${i} - ${Math.ceil(diferenca)} - ${juros}`);
// }

// let juros = diferenca * Math.pow(0.0459, 1);
// console.log(juros);
// let juros2 = (1050 + juros)* Math.pow(0.0459, 1);

// console.log(juros2 )
