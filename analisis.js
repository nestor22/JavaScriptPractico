const salarioscol = colombia.map((per) => {
  return per.salarioscol;
});

salarioscolSorted = salarioscol.sort((salaryA, salaryB) => {
  return salaryA - salaryB;
});

function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica (lista){
    
     const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento = lista.length) {
        return valorAcumulado + nuevoElemento;

    })
    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}


function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        let val1 = lista[mitad-1];
        let val2 = lista[mitad];
        return (val1 + val2)/2;
    }else{
        return lista[mitad]
    }
}
