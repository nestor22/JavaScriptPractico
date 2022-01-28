//codigo del cuadrado
console.group("cuadrados")
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden: ${ladoCuadrado}cm`);
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es:  ${perimetroCuadrado}cm`);
const areaCuadrado = ladoCuadrado * 4;
console.log(`El area del cuadrado es:  ${perimetroCuadrado}cm`);
console.groupEnd();
//codigo del triangulo del
console.group("triangulos")
const ladoTriangulo = 6;
const ladoTriangulo2 = 2;
const baseTriangulo = 4;

console.log(
  `los lados del triangulo miden: ${ladoTriangulo}cm  * ${ladoTriangulo2} cm * ${baseTriangulo} cm`
);
const alturaTriangulo = 5.5;

console.log("la altura de mi triagulo es : " + alturaTriangulo+"cm")

const perimetroTriangulo = ladoTriangulo + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro de mi triangulo es: "+ perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`el area del triangulo es ${areaTriangulo}cm`)
console.groupEnd();

console.group("circulos");
//radio del
const radioCirculo = 4;

//diametro del
const diametroCirculo = radioCirculo*2;


//pi
//const PI = 3.1416
const PI = Math.PI;


//circunverencia del
const perimetroCirculo = diametroCirculo * PI;

// area 
const areaCirculo = (radioCirculo * radioCirculo) * PI


console.log(`el radio del circulo es ${perimetroCirculo}cm`);
console.log(`el area del circulo es ${areaCirculo}cm`);


console.groupEnd();