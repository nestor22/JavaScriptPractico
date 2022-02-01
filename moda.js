const lista1 = [
    12, 32,12,23,56,78,54,3,12,1,35,4,13
]

const lista1Count = {

}

lista1.map(function(elemento){
    if (lista1Count[elemento]){
        lista1Count[elemento]+= 1;
    }else{
        lista1Count[elemento] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(function(valorAcumulado,nuevoValor){
    return valorAcumulado[1] - nuevoValor[1];
});

const moda = lista1Array[lista1Array.length -1];

