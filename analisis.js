//Helpers o Utils
function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (
    valorAcumulado = 0,
    nuevoElemento = lista.length
  ) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

//salarios
const salarioscol = colombia.map((per) => {
  return per.salarioscol;
});
salarioscolSorted = salarioscol.sort((salaryA, salaryB) => {
  return salaryA - salaryB;
});

//mediana General 
function medianaSalariosCol(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    let val1 = lista[mitad - 1];
    let val2 = lista[mitad];
    return (val1 + val2) / 2;
  } else {
    return lista[mitad];
  }
}

const spliceStart = (salarioscolSorted.length * 90)/100;
const spliceCount = salarioscolSorted.length - spliceStart;
const salariosTop10 = salarioscolSorted.splice(spliceStart, spliceCount);

const medianaGeneralCol = medianaSalariosCol(salarioscol);
const medianaTop10Col = medianaSalariosCol(salariosTop10);

console.log(`Salarios generales de colombia ${medianaGeneralCol}`);
console.log(`Salarios top 10 de colombia ${medianaGeneralCol}`);
