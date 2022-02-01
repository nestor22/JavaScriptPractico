//const precionOriginal = 120;
//const descuento = 15;


function calcularPrecioConDescuento(precio, descuento){

    const porcentajePresioConDescuento = 100 - descuento;
    
    const preciosConDescuento = (precio * porcentajePresioConDescuento)/100;
    return preciosConDescuento;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
   const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento son $ ${precioConDescuento}`
}


