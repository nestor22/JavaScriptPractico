//codigo del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4; 
} 

function areaCuadrado(lado) {
  return lado * lado;
} 

//codigo del triangulo del


function perimetroTriangulo(lado1, lado2, lado3){
  return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura){
  return (base*altura)/2;
}

//diametro del
function diametroCirculo(radio){
  radio*2
}



//pi
//const PI = 3.1416
const PI = Math.PI;


//circunverencia del
function perimetroCirculo(radio){
  diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio){
  (radion*radio)*PI
}
