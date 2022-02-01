const lista1 = [
    100, 200, 300, 500
];

let sumaLista= 0;







function calcularMediaAritmetica (lista){
    
    /* for (let i  = 0 ; i < lista.length; i++){
        sumaLista += lista[i];
    }
     */

    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento = lista.length) {
        return valorAcumulado + nuevoElemento;

    })
    const promedioLista = sumaLista1 / lista.length;

    return promedioLista;
}

