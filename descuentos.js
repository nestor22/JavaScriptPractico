const precionOriginal = 120;
const descuento = 15;

const porcentajePresioConDescuento = 100 - descuento;

const preciosConDescuento = (precionOriginal * porcentajePresioConDescuento)/100;

console.log(`el precio original es ${preciosConDescuento}`)