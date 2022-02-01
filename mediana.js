

function getMediana(lista){
    lista = lista.sort()
    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;

    if (esPar(lista.length)){
        const elemento1 = lista[mitadLista1-1];
        const elemento2 = lista[mitadLista1];
    
        mediana = calcularPromedio(lista)
    }else {
        mediana = lista[mitadLista1]
    }
    return mediana;

}

function esPar(numerito){
    if (numerito%2 === 0){
        return true;
    }else{
        return false;
    }
}



function calcularPromedio (lista){
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento = lista.length) {
        return valorAcumulado + nuevoElemento;
    })
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}




