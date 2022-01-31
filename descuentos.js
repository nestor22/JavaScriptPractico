//const precionOriginal = 120;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){

    const porcentajePresioConDescuento = 100 - descuento;
    
    const preciosConDescuento = (precio * porcentajePresioConDescuento)/100;
    return preciosConDescuento;
}



console.log(`el precio con descuento es ${calcularPrecioConDescuento(120, 15)}`)


