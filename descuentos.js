//const precionOriginal = 120;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){

    const porcentajePresioConDescuento = 100 - descuento;
    
    const preciosConDescuento = (precio * porcentajePresioConDescuento)/100;
    return preciosConDescuento;
}

onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDescount.value;

    const precioConDescuento = calculaPrecioConDescuento(priceValue, descountValue);
   const resultP = document.getElementById("ResultP");
    resultP.innertest = `El precio con descuento son $ ${precioConDescuento}`
}



console.log(`el precio con descuento es ${calcularPrecioConDescuento(120, 15)}`);


