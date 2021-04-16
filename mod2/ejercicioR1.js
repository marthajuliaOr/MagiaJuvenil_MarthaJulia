/* EJERCICIO REFORZAMIENTO | SEMANA 1 | MÓDULO2
MARTHA JULIA ORTEGA CASTILLO :)
Problema: 
Juan quiere vender sus dulces, pero necesita venderlos aún si no está presente, por  lo  que  compró  una  máquina  expendedora
y  nos  pide ayuda para que implementemos su funcionamiento.
Tabla de valores:
Chocolate   xc23    12.5
Paleta      c4f2    5.75
Chicle      gt74    4.25
Galleta     l3k8    9.10
*/

const prompt = require ( 'prompt-sync' ) ();

var codigo = prompt ( "Porfavor, ingresa el codigo del producto: " ); //este valor será definido por el usuario en terminal
var pago = prompt ( "Porfavor, ingresa la cantidad a pagar: " ); //este valor será definido por el usuario en terminal

//chocolate
if (( codigo == "xc23" ) && ( pago == 12.5 )) { //si el código es "xc23" y el pago es exacto, 
    console.log ( "¡Compra de chocolate exitosa!" ); //se imprimirá el mensaje de "¡Compra de chocolate exitosa!"
}
else if (( codigo == "xc23" ) && ( pago > 12.5 )) { //si el código es "xc23" y el pago es mayor al obligatorio, 
    console.log ( "¡Compra de chocolate exitosa!" ); //se imprimirá el mensaje de "¡Compra de chocolate exitosa!"
    console.log ( "Su cambio es " + ( pago - 12.5 ));//y el cambio que se debe entregar
}
else if (( codigo == "xc23" ) && ( pago < 12.5 )) { //si el código  es "xc23" y el pago es insuficiente,, 
    console.log ( "¡Compra de chocolate denegada!" ); //se imprimirá el mensaje de error
    console.log ( "Porfavor, revise la informaión ingresada" ); //y dará otro intento al usuario de ingrsear algún valor correcto
}

//paleta (pasa lo mismo que arriba pero con un producto, codigo y pago distinto)
else if (( codigo == "c4f2" ) && ( pago == 5.75 )) {
    console.log ( "¡Compra de paleta exitosa! ");
}
else if (( codigo == "c4f2") && ( pago > 5.75 )) {
    console.log ( "¡Compra de paleta exitosa!" );
    console.log ( "Su cambio es: " + ( pago - 5.75 ));
}
else if (( codigo == "c4f2" ) && ( pago < 5.75 )) {
    console.log ( "¡Compra de paleta denegada!" );
    console.log ( "Porfavor, revise la informaión ingresada" );
}

//chicle (pasa lo mismo que arriba pero con un producto, codigo y pago distinto)
else if (( codigo == "gt74" ) && ( pago == 4.25 )) {
    console.log ( "¡Compra de chicle exitosa! " );
}
else if (( codigo == "gt74" ) && ( pago > 4.25 )) {
    console.log ( "¡Compra de chicle exitosa!" );
    console.log ( "Su cambio es " + (pago - 4.25));
}
else if (( codigo == "gt74" ) && ( pago < 4.25 )) {
    console.log ( "¡Compra de chicle denegada!" );
    console.log ( "Porfavor, revise la informaión ingresada" );
}

//galleta (pasa lo mismo que arriba pero con un producto, codigo y pago distinto)
else if (( codigo == "l3k8" ) && ( pago == 9.10 )) {
    console.log ( "¡Compra de galleta exitosa! ");
}
else if (( codigo == "l3k8" ) && ( pago > 9.10 )) {
    console.log ( "¡Compra de galleta exitosa!" );
    console.log ( "Su cambio es " + (pago - 9.10));
}
else if (( codigo == "l3k8" ) && ( pago < 9.10 )) {
    console.log ( "¡Compra de galleta denegada!" );
    console.log ( "Porfavor, revise la información ingresada" );
}

/*esta condición la agregue por si el código ingresado no es correcto,
  no fue necesario hacer especificaciones ya que al descartar todas las opciones correctas, 
  el codigo no debe ser existente dentro de lo válido */

else {
    console.log ( "Porfavor, ingrese un código válido" ); 
}

/* Creo que esto podría resolverse también con un condicional switch, o incluso mostrando las opciones de compra y,
partiendo de ahí, dar a conocer el precio del producto. Pero, creo que para mantenerlo simple y tenerlo como práctica
de "if", "else if" y operadores básicos queda bastante bien :D */
